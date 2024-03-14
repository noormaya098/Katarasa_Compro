import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HomeSection.vue'
import About from '../components/AboutSection.vue'
import Menu from '../components/Menu.vue'
import Promo from '../components/Promo.vue'
import MenuPages from '../components/MenuPages.vue'
import TentangKami from '../components/TentangKami.vue'
import SyaratdanKetentuan from '../components/SyaratdanKetentuan'
import KontakKami from '../components/KontakKami'
import Kontak from '../components/Kontak'
import Blog from '../components/Blog'
import Korporasi from '../components/Korporasi'
import Bantuan from '../components/Bantuan'
import Coffee from '../components/Coffee'
import Product from '../components/Product'
import KopiKataRasa from '../components/KopiKataRasa'
import LoginPage from '../components/LoginPage'
import FAQ from '../components/Faq'
import Term from '../components/Term'
import Privacy from '../components/Privacy'
import Profile from '../components/Profile'
import NonCoffee from '../components/NonCoffee'
import OrderNow from '../components/OrderNow'
import DaftarPage from '../components/DaftarPage'
import ToGo from '../components/ToGo'
import HotAmericano from '../components/HotAmericano'
import BackUp from '../components/backup'
import Pastry from '../components/Pastry'
import HomeSection from '../components/Home'
import Merchandise from '../components/Merchandise'
import DetailProduct from '../components/DetailProduct'
import Cart from '../components/Cart'
import CheckOut from '../components/CheckOut'
// import CheckOut from '../components/Checkout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/promo',
            name: 'Promo',
            component: Promo
        },

        {
            path: '/loginpage',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/menupages',
            name: 'MenuPages',
            component: MenuPages
        },
        {
            path: '/tentangkami',
            name: 'TentangKami',
            component: TentangKami
        },
        {
            path: '/syaratdanketentuan',
            name: 'SyaratdanKetentuan',
            component: SyaratdanKetentuan
        },
        {
            path: '/kontakkami',
            name: 'KontakKami',
            component: KontakKami
        },
        {
            path: '/kontak',
            name: 'Kontak',
            component: Kontak
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/korporasi',
            name: 'Korporasi',
            component: Korporasi
        },
        {
            path: '/bantuan',
            name: 'Bantuan',
            component: Bantuan
        },
        {
            path: '/coffee',
            name: 'Coffee',
            component: Coffee
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/kopikatarasa',
            name: 'KopiKataRasa',
            component: KopiKataRasa
        },
        {
            path: '/faq',
            name: 'Faq',
            component: FAQ
        },
        {
            path: '/term',
            name: 'Term',
            component: Term
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/noncoffee',
            name: 'NonCoffee',
            component: NonCoffee
        },
        {
            path: '/ordernow',
            name: "OrderNow",
            component: OrderNow
        },
        {
            path: '/daftarpage',
            name: "DaftarPage",
            component: DaftarPage
        },
        {
            path: '/togo',
            name: "ToGo",
            component: ToGo
        },
        {
            path: '/hotamericano',
            name: "HotAmericano",
            component: HotAmericano
        },
        {
            path: '/backup',
            name: "BackUp",
            component: BackUp
        },
        {
            path: '/pastry',
            name: "Pastry",
            component: Pastry
        },
        {
            path: '/home',
            name: "Home",
            component: HomeSection
        },
        {
            path: '/merchandise',
            name: "Merchandise",
            component: Merchandise
        },
        {
            path: '/detailproduct/:slug',
            name: "DetailProduct",
            component: DetailProduct
        },
        {
            path: '/cart',
            name: "Cart",
            component: Cart
        },
        {
            path: '/checkout',
            name: "CheckOut",
            component: CheckOut
        },
        // {
        //     path: '/checkout',
        //     name: "Checkout",
        //     component: Checkout
        // },
    ]
})
