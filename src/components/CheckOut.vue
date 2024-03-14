<template>
  <div class="font-katarasa1">
    <section>
      <div>
        <navigation :color="color" :flat="flat" />
        <!-- <h1> Ini class Menu</h1> -->
      </div>

      <div>
        <v-container class="mt-2">
          <v-row>
            <!-- Alamat Pengiriman -->
            <v-col cols="md-6">
              <v-card
                style="border-radius: 10px;"
                class="card-with-shadow"
                elevation="3"
              >
                <v-card-title>
                  Alamat Pengiriman
                </v-card-title>
                <v-card-item>
                  <v-container>
                    <v-row class="ms-1 mb-2">
                      <v-col cols="4">
                        <div>
                          {{ dataCheckOut.address.receiverName }}
                        </div>
                        <div class="mt-2">
                          {{ dataCheckOut.address.phoneNumber }}
                        </div>
                      </v-col>
                      <v-col cols="7">
                        <div>
                          <h4>
                            {{ dataCheckOut.address.label }}
                          </h4>
                          <div class="mt-2">
                            {{ dataCheckOut.address.address }}
                          </div>
                        </div>
                        <br />
                        <div>
                          <v-row>
                            <v-col cols="6">
                              <a
                                style="width: 120px; text-transform: none;"
                                color="transparent"
                              >
                                Alamat Pengiriman</a
                              >
                            </v-col>
                            <v-col cols="6">
                              <a
                                style="width: 120px; text-transform: none;"
                                color="transparent"
                              >
                                Tambah Alamat Pengiriman</a
                              >
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-item>
              </v-card>
            </v-col>

            <!-- Rincian Pembayaran -->
            <v-col cols="md-5 ms-5">
              <v-card
                style="border-radius: 10px;"
                class="card-with-shadow"
                elevation="3"
              >
                <v-card-title>
                  Rincian Pembayaran
                </v-card-title>
                <v-card-item>
                  <v-row>
                    <v-col cols="1">
                      <v-icon class="ms-4" style="color: rgb(253, 183, 57);">
                        mdi-ticket
                      </v-icon>
                    </v-col>
                    <v-col cols="6" class="ms-3">
                      Pakai Voucher Katarasa
                    </v-col>
                    <!-- Modals -->
                    <v-col cols="4">
                      <!-- <a
                        style="width: 120px; text-transform: none;"
                        color="transparent"
                        @click="showModal = true"
                        >Pilih Voucher</a
                      > -->
                      <!-- <v-btn style="width: 150px; text-transform: none;" color="transparent" @click="showModal = true">Pilih Voucher</v-btn> -->

                      <!-- modal -->
                      <!-- <v-dialog v-model="showModal" max-width="500px">
                        <v-card>
                          <v-card-title>
                            <span class="headline">Voucher Katarasa</span>
                          </v-card-title>

                          <v-card-text> -->
                      <!-- Konten modal -->
                      <!-- <p>Belum punya voucher</p>
                          </v-card-text>

                          <v-card-actions>
                            <v-btn
                              color="primary"
                              text
                              @click="showModal = false"
                              >Tutup</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-row>

                  <v-row class="ms-2">
                    <v-col cols="6">
                      Total Pesanan
                    </v-col>
                    <v-col cols="3" class="ms-12" style=" text-align: end;">
                      {{ dataCheckOut.cart[0].totalCurrencyFormat }}
                    </v-col>
                  </v-row>

                  <v-row class="ms-2">
                    <v-col cols="6">
                      Total Pengiriman
                    </v-col>
                    <v-col cols="3" class="ms-12" style=" text-align: end;">
                      {{
                        dataCheckOut.cart[0].shippingSelected
                          .priceCurrencyFormat
                      }}
                    </v-col>
                  </v-row>

                  <v-row class="ms-2 font-katarasa">
                    <v-col cols="6">
                      Total Pembayaran
                    </v-col>
                    <v-col cols="3" class="ms-12" style=" text-align: end;">
                      {{ dataCheckOut.cart[0].totalCurrencyFormat }}
                    </v-col>
                  </v-row>
                  <br />
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-btn
                          style="width: 100%; text-transform: none; background-color: #DFCFCA;"
                        >
                          Pilih Pembayaran
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>

          <!-- Data Cart pada CheckOut -->
          <v-row>
            <v-col cols="md-6">
              <v-card
                style="border-radius: 10px;"
                class="card-with-shadow"
                elevation="3"
              >
                <v-card-title>
                  {{ dataCheckOut.cart[0].store.name }}
                </v-card-title>
                <v-card-item>
                  <v-container>
                    <v-row class="ms-1 mb-2">
                      <v-data-table
                        :headers="headers"
                        :items="produkItems"
                        :item-key="itemKey"
                        hide-default-footer
                      >
                        <template v-slot:item="{ item }">
                          <tr>
                            <td>
                              <v-img
                                :src="item.image"
                                class="align-end"
                                height="auto"
                                style="width: 100px; margin-top: 10px;"
                              />
                            </td>
                            <td>
                              {{ item.name }}
                            </td>
                            <td style="text-align: center;">
                              {{ item.priceCurrencyFormat }}
                            </td>
                            <td style="text-align: center;">{{ item.qty }}</td>
                            <td style="text-align: center;">
                              {{ item.subTotalCurrencyFormat }}
                            </td>
                          </tr>
                        </template>
                      </v-data-table>
                      <v-col class="mt-3" cols="4">
                        SubTotal Produk
                      </v-col>
                      <v-col class="mt-3" cols="7" style=" text-align: end;">
                        {{ dataCheckOut.subTotalCurrencyFormat }}
                      </v-col>
                    </v-row>
                    <div style="border-radius: 10px; border: 1px solid #000;">
                      <v-container>
                        <v-row>
                          <v-col cols="4">
                            <a
                              style="width: 120px; text-transform: none;"
                              color="transparent"
                              @click="showModal = true"
                              >Ubah Pengiriman</a
                            >
                            <!-- <v-btn style="width: 150px; text-transform: none;" color="transparent" @click="showModal = true">Pilih Voucher</v-btn> -->

                            <!-- modal -->
                            <v-dialog v-model="showModal" max-width="700px">
                              <v-card>
        

                                <v-card-text class="mt-3">
                                  <!-- Konten modal -->
                                  <div>
                                    <v-row>
                                      <v-col
                                        cols="4"
                                        
                                      >
                                        <v-img
                                          :src="shippingData1.icon"
                                          style="max-width: 100%;"
                                          alt="Gambar Produk"
                                          class="img-fluid rounded-start"
                                        >
                                        </v-img>
                                      </v-col>
                                      <v-col
                                        cols="4"
                                        style="background-color: blue;"
                                      >
                                      <v-radio-group v-model="selectedOption" >
                                        <v-radio v-for="(option, index) in options" :key="index" :label="option.name" :value="option.isSelected">
                                            {{ option.name }} - {{ shippingData1.name }}
                                          </v-radio>
                                      </v-radio-group> 
                                    </v-col>
                                      <v-col
                                        cols="4"
                                        style="background-color: brown;"
                                      ></v-col>
                                    </v-row>
                                  </div>
                                </v-card-text>

                                <v-card-actions style="justify-content: end;">
                                  <v-btn
                                    color="black"
                                    text
                                    @click="showModal = false"
                                    style="background-color: burlywood;"
                                    >Tutup</v-btn
                                  >
                                  <v-btn
                                    color="black"
                                    text
                                    @click="showModal = false"
                                    style="background-color: brown;"
                                    >Submit</v-btn
                                  >
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-col>
                          <v-col cols="8" style="text-align: end;">
                            {{
                              dataCheckOut.cart[0].shippingSelected
                                .priceCurrencyFormat
                            }}
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </v-container>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols=""></v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    {{ shippingData1 }}
    <!-- {{ dataCheckOut }} -->

    <foote />
  </div>
</template>

<script>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer";
// import { VBtn, VCard, VDialog, VDivider, VForm, VTextField } from 'vuetify/lib';

export default {
  data() {
    return {
      headers: [
        { text: "", value: "image" },
        { text: "", value: "produk" },
        { text: "Harga", value: "harga" },
        { text: "Jumlah", value: "jumlah" },
        { text: "Sub Total", value: "subTotal" },
      ],
      options: [
        { isSelected: false, name: "Layanan Reguler" },
        { isSelected: true, name: "Regular Service" },
      ],
      selectedOption: true,
      produkItems: [],
      dataCheckOut: [],
      shippingData: [],
      shippingData1: [], //Sicepat
      shippingData2: [], //jnt
      showModal: false,
    };
  },

  components: {
    navigation,
    foote,
  },

  mounted() {
    this.fetchData();
    this.fetchDataShipping();
    // this.getCart();
  },

  computed: {
    subtotalKeseluruhanProduk() {
      // Hitung jumlah subtotal keseluruhan produk
      if (this.dataCheckOut.length > 0) {
        const totalSubtotal = this.dataCheckOut.reduce(
          (accumulator, item) => accumulator + item.products[0].subTotal,
          0
        );
        return "Rp" + totalSubtotal;
      } else {
        return "Rp0";
      }
    },
  },

  methods: {
    // getCart() {
    //   const token = localStorage.getItem("token");
    //   var myHeaders = new Headers();
    //   myHeaders.append("Authorization", "Bearer " + token);

    //   var requestOptions = {
    //     method: "GET",
    //     headers: myHeaders,
    //     redirect: "follow",
    //   };

    //   fetch(
    //     "https://api.katarasa.id/cart/data-cart?page=1&limit=5&is_gift=0",
    //     requestOptions
    //   )
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log("respons user", result);
    //       this.produkItems = result.data.items[0].products;
    //     })
    //     .catch((error) => console.log("error", error));
    // },

    fetchData() {
      const token = localStorage.getItem("token");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://api.katarasa.id/checkout/data-checkout",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("respons haahah", result);
          this.dataCheckOut = result.data;
          this.produkItems = result.data.cart[0].products;
        })
        .catch((error) => console.log("error", error));
    },

    fetchDataShipping() {
      const token = localStorage.getItem("token");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://api.katarasa.id/checkout/data-shipping",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => 
        {
          console.log("respons haahah", result);
          this.shippingData = result.data
          this.shippingData1 = result.data.items[2];
          this.shippingData2 = result.data.items[3];
          
        })
        .catch((error) => console.log("error", error));
    },

    updateShippingOption() {

    const token = localStorage.getItem('token');
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer "+token
      );

      var raw = JSON.stringify({
        store_id: "557",
        address_id: "1583",
        shipping_code: "jnt",
        shipping_tipe: "EZ",
        send_time: "setiap saat",
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://api.katarasa.id/checkout/set-select-shipping", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },

  // dataCoba(){

  //     const cobaaaa = async () => {
  //         try {
  //            const isi = await axios.get(`https://api.katarasa.id/checkout/data-checkout`,
  //                 {
  //                     headers: {
  //                         'Content-Type': 'application/json',
  //                         'Accept': 'application/json'
  //                     }
  //                 }
  //            )
  //         } catch (error) {

  //         }
  //     }
  //     this.cobaaaa ();
  // },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap");

.font-katarasa {
  font-family: "Poppins", sans-serif;

  font-weight: bold;
}

.font-katarasa1 {
  font-family: "Poppins", sans-serif;
}

.card-with-shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Ganti dengan warna dan konfigurasi bayangan yang diinginkan */
}
</style>
