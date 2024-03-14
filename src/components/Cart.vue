<template>
  <div>
    <navigation :color="color" :flat="flat" />
    <v-container>
      <div class="font-katarasa">
        <v-row>
          <v-col cols="6">
            <h3>
              Keranjang Belanjaku
            </h3>
          </v-col>
          <v-col cols="6">
            <div style="text-align: end;">
              <v-btn style="text-transform: none;" class="font-katarasa">
                <v-icon>
                  mdi-arrow-left
                </v-icon> kembali belanja
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- Data Table -->
        <v-card class="mt-5" style="border-radius: 20px;">
          <v-card-title >
            <v-checkbox v-model="selectAll"></v-checkbox>
            <v-icon left>mdi-home</v-icon> Katarasa Coffee & Tea
          </v-card-title>
          <!-- {{ produkItems }} -->
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="produkItems"
              :item-key="itemKey"
              hide-default-footer
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>
                    <v-checkbox v-model="item.selected" class="custom-checkbox" color="red" @change="selectCart(item.cartId)"></v-checkbox>
                  </td>
                  <td>
                    <v-img :src="item.image" class="align-end" height="auto" style="width: 150px; margin-top: 10px;"/>
                  </td>
                  <td>{{ item.variantId }}</td>
                  <td>{{ item.priceCurrencyFormat }}</td>
                  <td>
                    <div class="spindotts" style="margin: 0px;">
                      <v-btn @click="decrementKuantitas(item)" icon>
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      {{ item.qty }}
                      <v-btn @click="incrementKuantitas(item)" icon>
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </td>
                  <td>Rp. {{ parseInt(item.subTotal)}}</td>
                  <td>
                    <v-btn icon color="red" @click="deleteItem(item.cartId)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <!-- Total Price Card -->
        <v-card class="mt-5" style="border-radius: 20px;">
          <v-card-title class="text-h5" style="color: #1D1851;">
            Total Harga 
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <h4 style="color: #A56C16;">Rp. {{ calculateTotalPrice() }}</h4>
              </v-col>
              <v-col cols="auto" class="justify-end">
                <!-- Tampilkan tombol Checkout hanya jika ada produk yang dipilih -->
                <v-btn v-if="calculateTotalPrice() > 0" color="primary" @click="checkout()">Checkout</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>

     
    </v-container>

    <foote />
  </div>
</template>

<script>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer";

export default {
  components: {
    navigation,
    foote,
  },
  data() {
    return {
      headers: [
        { text: '', value: 'selected', sortable: false },
        { text: 'Produk', value: 'produk' },
        { text: 'Variant', value: 'variant' },
        { text: 'Harga', value: 'harga' },
        { text: 'Kuantitas', value: 'kuantitas' },
        { text: 'Sub Total', value: 'subTotal' },
        { text: '', value: 'actions', sortable: false },
      ],
      produkItems: [],
      itemKey: 'produk',
      selectAll: false,
      cart_id: '',
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {

    getCart() {
      const token = localStorage.getItem('token');
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://api.katarasa.id/cart/data-cart?page=1&limit=5&is_gift=0", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log("respons user", result);
          this.produkItems = result.data.items[0].products;
        })
        .catch(error => console.log('error', error));
    },

    incrementKuantitas(item) {
      item.qty++;
      item.subTotal = item.price * item.qty;
    },
    decrementKuantitas(item) {
      if (item.qty > 1) {
        item.qty--;
        item.subTotal = item.price * item.qty;
      }
    },

    deleteItem(cartId) {

        const token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };

        const deleteUrl = `https://api.katarasa.id/cart/delete-dari-cart?cart_id=${cartId}`;

        fetch(deleteUrl, requestOptions)
          .then(response => {
            if (response.status === 200) {
              return response.text();
            } else {
              throw new Error('Gagal menghapus item dari cart.');
            }
          })
          .then(result => {
            alert("Item berhasil dihapus dari cart.");
            this.getCart();
            window.location.reload();
          })
          .catch(error => {
            console.log('error', error);
            alert("Gagal menghapus item dari cart.");
          });
      },
    
  
      calculateTotalPrice() {
        let totalPrice = 0;
        this.produkItems.forEach(item => {
          if (item.selected) {
            return(
              totalPrice += item.subTotal
            )
          }
        });
        return totalPrice;
      },

      checkout() {
       // Periksa apakah ada produk yang dipilih
        const selectedItems = this.produkItems.filter(item => item.selected);
        if (selectedItems.length > 0) {
          // Lakukan pengalihan ke halaman checkout di sini
          this.$router.push('/checkout');
        } else {
          // Tampilkan pesan bahwa tidak ada produk yang dipilih
          alert("Pilih setidaknya satu produk sebelum melanjutkan ke checkout.");
        }
      },

      selectCart(cart_id) {

        console.log('iniii', cart_id);

          const token = localStorage.getItem('token');
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", "Bearer " + token);

          var raw = JSON.stringify({
            "cart_id": cart_id,
          });

          var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("https://api.katarasa.id/cart/set-select-cart", requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result);
              // if (result.success) {
              //   // Perbarui status 'selected' pada produk yang sesuai
              //   this.produkItems.forEach(item => {
              //     if (item.cartId === cart_id) {
              //       item.selected = true;
                    
              //     }
              //   });
              // } else {
              //   // Jika ada kesalahan, batalkan pemilihan dan ubah status 'selected' pada produk
              //   this.produkItems.forEach(item => {
              //     if (item.cartId === cart_id) {
              //       item.selected = false;
              //     }
              //   });
              // }
            })
            .catch(error => console.log('error', error));
        },

        


  },
    watch: {
      selectAll(value) {
        this.produkItems.forEach(item => {
          item.selected = value;
        });
        this.calculateTotalPrice(); // Hitung total harga saat pilihan 'selectAll' diubah
      },
    },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
.spindotts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  margin: auto;
}

.custom-checkbox input[type="checkbox"] {
  background-color: #ff0000; /* Ganti dengan warna latar belakang yang diinginkan */
}

.font-katarasa {
  font-family: 'Poppins', sans-serif;
 
}

</style>
