<template>
  <div class="bg-white rounded shadow-md p-4">
    <img :src="nft.image" alt="NFT Image" class="w-full h-48 object-cover mb-4 rounded" />
    <h3 class="font-bold mb-2">{{ nft.name }}</h3>
    <p class="mb-2">{{ nft.description }}</p>
    <p class="font-bold mb-4">{{ nft.price }} tokens</p>
    <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" @click="isBidOpen = true">Enchérir</button>
    <AuctionTimer :endTime="nft.endTime" v-if="nft.endTime"></AuctionTimer>
    <TokenPurchase></TokenPurchase>
    <Bid :nft="nft" :is-open="isBidOpen" @close="isBidOpen = false"></Bid>
  </div>
</template>

<script>
import AuctionTimer from './AuctionTimer.vue'
import TokenPurchase from './TokenPurchase.vue'
import Bid from './Bid.vue'

export default {
  props: {
    nft: {
      type: Object,
      required: true
    }
  },
  components: {
    AuctionTimer,
    TokenPurchase,
    Bid
  },
  data() {
    return {
      isBidOpen: false
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques à ce composant */
</style>
