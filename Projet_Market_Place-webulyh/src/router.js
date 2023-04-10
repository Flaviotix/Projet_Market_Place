import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import CreateNFT from './components/CreateNFT.vue'
import NFTList from './components/NFTList.vue'
import Profile from './components/Profile.vue'
import AuctionTimer from './components/AuctionTimer.vue'
import TokenPurchase from './components/TokenPurchase.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/create-nft', component: CreateNFT },
  { path: '/', component: NFTList },
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
