<template>
    <section class="container mx-auto p-4">
      <h2 class="text-center font-bold text-2xl mb-6">NFTs disponibles</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NFTItem v-for="nft in nfts" :key="nft.id" :nft="nft" />
      </div>
    </section>
  </template>
  
  <script>
  import NFTItem from "./NFTItem.vue";
  
  export default {
    components: {
      NFTItem
    },
    data() {
      return {
        nfts: [
          // Dummy data, replace with actual data fetched from the blockchain
          {
            id: 1,
            name: "NFT 1",
            description: "Description of NFT 1",
            image: "https://via.placeholder.com/150",
            price: 100
          },
          {
            id: 2,
            name: "NFT 2",
            description: "Description of NFT 2",
            image: "https://via.placeholder.com/150",
            price: 200
          }
        ]
      };
    }
  };
  </script>
  