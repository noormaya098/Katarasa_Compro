<template>
    <div>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        
        <!-- add to cart -->
       <v-container style="margin-left: 5%;">
         <v-card style="width: 100%;" class="mb-5 mt-5">
            <div style="padding: 10px;">
                <v-row>

                <!-- Image Product -->
                <v-col cols="4">
                    <v-img :src="image" style="max-width: 100%;" alt="Gambar Produk" class="img-fluid rounded-start"  >
                    </v-img>
                </v-col>

                <!-- Nama Product -->
                <v-col cols="8">
                    <h2 style="color: #1D1851;"> {{ productDetail.name }}</h2>
                    <v-icon color="#A56C16"
                    style="font-size: 30px; margin-right: 10px; margin-bottom: 10px;">mdi-palette</v-icon> {{ productDetail.category.name }} 

                <!-- Harga Product -->
                    <h2 style="color: #A56C16;"> {{ productDetail.price }}</h2>
                    <br>
                    <br>

                <!-- Kondisi -->
                    <v-row>
                        <v-col cols="2">
                            Kondisi
                        </v-col>
                        <v-col cols="2">
                           {{ productDetail.condition }}
                        </v-col>
                    </v-row>
                    <br>

                <!-- Kuantitas -->
                    <div>
                        <v-row>
                            <v-col cols="2">
                                Kuantitas
                            </v-col>
                            <v-col cols="3">
                                <v-btn-toggle v-model="quantity" mandatory inline>
                                    <v-btn @click="decrementQuantity" outlined icon>
                                      <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                    <v-btn>{{ quantity }}</v-btn>
                                    <v-btn @click="incrementQuantity" outlined icon>
                                      <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                  </v-btn-toggle>
                                 
                            </v-col>
                            <v-col class="mt-2" cols="2" style="margin-left: 10px;">
                                Tersisa  {{ productDetail.stock }}
                            </v-col>
                        </v-row>
                    </div>
                    <br>

                <!-- Tambah Ke Cart -->
                
                    <v-row>
                        <v-col cols="5">
                            <v-btn @click="tambahCart(productDetail.id)" style="text-transform: none; font-family: 'Poppins', sans-serif; border-radius: 2px; outline: 1px solid #A56C16; background-color: transparent;"> 
                                <v-icon style="width: 10px; margin-right: 10px; color: #A56C16;">
                                    mdi-cart
                                </v-icon>  
                                Masukkan Keranjang
                            </v-btn>
                        </v-col>
                        

                        <!-- Beli Sekarang -->
                        <v-col cols="4" class="mb-5">
                            <v-btn style="text-transform: none; font-family: 'Poppins', sans-serif; border-radius: 2px;  background-color: red; color: white;"> 
                                Beli Sekarang</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            </div>
        </v-card>
       
       </v-container>

       <!-- Toko Katarasa -->

       <v-container style="margin-left: 5%;">
        <v-card style="width: 100%;" class="mb-5 mt-5">
            <v-row>
                <v-col cols="2" >
                    <v-img style="margin-left: 20px;">
                        <v-img :src="productDetail.store.image" style="max-width: 50%;" alt="Gambar Produk" class="img-fluid rounded-start"  >
                        </v-img>
                    </v-img>
                </v-col>
                <v-col cols="4" >
                    <h3>
                        {{ productDetail.store.name }}
                    </h3>
                    <h4>
                        <v-icon style="color: red;">
                            mdi-map-marker
                        </v-icon>  {{ productDetail.store.location }}
                    </h4>
                </v-col>
                <v-col cols="6" >
                    <v-btn style="text-transform: none; margin-right: 10px;">
                        <v-icon >
                            mdi-chat-processing
                        </v-icon> Chat Penjual
                    </v-btn>
                    <v-btn style="text-transform: none;">
                        Lihat Toko
                   </v-btn>
                </v-col>
            </v-row>
        </v-card>
       </v-container>

       <!-- Spesifikasi Product -->

       <v-container style="margin-left: 5%;">
        <v-card style="width: 100%;" class="mb-5 mt-5">
            <div style="background-color: #A56C16; border-radius: 5px; width: 15%; margin-left: 10px; margin-top: 20px;">
                <h3 style="text-align: center;">Spesifikasi Produk</h3>
            </div>
            <div style="margin-left: 20px;" class="mt-5">
                <v-row>
                    <v-col cols="2" >
                        Kategori
                    </v-col>
                    <v-col cols="4">
                        {{ productDetail.category.name }}
                    </v-col>
                </v-row>  
            </div>
            <div style="margin-left: 20px;">
                <v-row>
                    <v-col cols="2" >
                        Brand
                    </v-col>
                    <v-col cols="4">
                        {{ productDetail.brand }}
                    </v-col>
                </v-row>  
            </div>
            <div style="margin-left: 20px;">
                <v-row>
                    <v-col cols="2" >
                        Stock
                    </v-col>
                    <v-col cols="4">
                        {{ productDetail.stock }}
                    </v-col>
                </v-row>  
            </div>
            <div style="margin-left: 20px;">
                <v-row>
                    <v-col cols="2" >
                        Berat
                    </v-col>
                    <v-col cols="4">
                        {{ productDetail.weight }} gram
                    </v-col>
                </v-row>  
            </div>
            <div style="margin-left: 20px;">
                <v-row>
                    <v-col cols="2" >
                        Dikirim dari
                    </v-col>
                    <v-col cols="4">
                        {{ productDetail.store.location }}
                    </v-col>
                </v-row>  
            </div>
            <div style="background-color: #A56C16; border-radius: 5px; width: 15%; margin-left: 10px; margin-top: 20px;">
                <h3 style="text-align: center;">Deskripsi Produk</h3>
            </div>
            <div style="margin-left: 20px;" class="mt-2 ">
                <p  >
                    {{ productDetail.description }}
                </p>
            </div>
            <br>
        </v-card>
       </v-container>

       <!-- Penilaian Produk -->
       <!-- <v-container style="margin-left: 5%;">
        <v-card style="width: 100%;" class="mb-5 mt-5">
            <div style="background-color: #A56C16; border-radius: 5px; width: 15%; margin-left: 10px; margin-top: 20px;">
                <h3 style="text-align: center;">Penilaian Produk</h3>
            </div>
            <v-row>
                <v-col cols="4">
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <h2 style="color: red;">{{ productDetail.rating }} dari 5</h2>
                    </div>
                </v-col>
                <v-col cols="6">
                    
                </v-col>
            </v-row>
            
            
        </v-card>
       </v-container> -->
       <!-- Produk Lain Di Toko ini -->
       <!-- <v-container>
        <div>
            Produk Lain di Toko ini
        </div>
        <div>
          
        </div>
       </v-container> -->
       
    <foote />
</div>
    
</template>

<script>

import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer";

    export default {
         data() {
            return {
                productDetail: [],
                image: '',
                quantity: 1, // Nilai awal
                cards: [],
                dataDetailStore: [],
                tambahKeCart: {
                    product_id: '',
                    variant_id: '',
                    qty: '',
                    isNonPhysical: false
                },
            };
        },

        components: {
            navigation,
            foote
        },

        mounted() {
            this.fetchData();
             // Cek status login saat komponen dimuat
            this.isLoggedIn = localStorage.getItem("token");
            this.checkLoginStatus();
            this.cekLSToken();
            
        },

        methods: {

            updateQty (){

                const token = localStorage.getItem('token')
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+token);

                var raw = JSON.stringify({
                    "product_id": "12821",
                    "variant_id": "19881",
                    "qty": "15"
                });

                var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://api.katarasa.id/cart/update-qty-cart", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            },

            tambahCart(id) {  
                const token = localStorage.getItem('token');
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+token);

                var raw = JSON.stringify({
                    product_id: id,
                    variant_id: "",
                    qty: this.quantity,
                    isNonPhysical: false
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://api.katarasa.id/cart/tambah-ke-cart", requestOptions)
                .then(response => response.json())
                .then(result => 
                    {
                        if (result.status.code == 200) {
                            location.reload();
                            alert('Product berhasil diTambahkan!');
                        } else{
                            alert(result.status.message)
                        }
                    }
                )
                .catch(error => console.log('error', error));
            },

            incrementQuantity() {
            this.quantity++;
            },
            decrementQuantity() {
                if (this.quantity > 1) {
                    this.quantity--;
                }
            },

            
            fetchData(){
                 const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(`https://api.katarasa.id/product/get-product-detail?slug=${this.$route.params.slug}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.status.code === 200) {
                        this.productDetail = result.data;
                        this.image = result.data.image[0];
                        console.log(this.productDetail);
                        
                    } else {
                        console.log("Gagal mendapatkan detail produk.");
                    }
                })
                .catch(error => console.log('error', error));
        },

        

        cekLSToken(){

            if (this.dataDetailStore.closed_store) {
                this.$swal.fire("Info", "Saat ini toko sedang libur", "info");

            } else {

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer "+token);

                var raw = JSON.stringify({
                "product_id": this.productDetail.id,
                "variant_id": this.variant_id,
                "qty": this.kuantitas,
                "isNonPhysical": false
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://api.katarasa.id/cart/tambah-ke-cart", requestOptions)
                .then(response => response.json())
                .then((result) => {
                    const res = JSON.parse(result);

                    if (res.status.code === 200) {
                    this.$swal
                        .fire("Sukses", "Berhasil menambahkan data", "success")
                        .then(() => {
                        location.reload();
                        });
                    this.$store.dispatch("getInfo");
                    } else {
                    this.$swal.fire("Warning", res.status.message, "warning");
                    }
                })
                .catch(error => console.log('error', error));
            }
        },

        checkLoginStatus() {
      // Periksa apakah token tersedia dalam localStorage
        const token = localStorage.getItem("token");
        this.isLoggedIn = !!token;
        },
        login() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "email": "sandiirawan859@gmail.com",
            "password": "123456"
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://api.katarasa.id/auth/login", requestOptions)
            .then(response => response.json())
            .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Login gagal");
            }
            })
            .then((data) => {
            // Menyimpan token ke localStorage
            localStorage.setItem("token", data.data);

            // Mengubah status login menjadi true
            this.isLoggedIn = true;
            this.checkLoginStatus();

            // Menampilkan pesan login berhasil
            alert("Login berhasil");
            })
            .catch((error) => {
            console.error(error);
            // Menampilkan pesan login gagal
            alert("Login gagal");
            })
    },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.katarasa-menu1 {
    width: 100%;
    height: auto;
}

.gambar-banner {
    width: 100%;
    height: auto;
}

@media only screen and (max-width: 100px) {
    .katarasa-menu1 {
        width: 100%;
        height: auto;
    }
}


.font-katarasa {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: black;

}

.font-katarasa1 {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #FFFBE9;

}

.font-katarasa2 {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: bold;
}

.font-canada {
    font-family: 'Radio Canada', sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #A56C16;
}
</style>
