<template>
    <section class="container mx-auto p-4">
      <div class="bg-white rounded shadow-md p-6">
        <h2 class="font-bold text-2xl mb-6">Profil de {{ user.name }}</h2>
        <p>Email : {{ user.email }}</p>
        <p>NFTs en possession : {{ user.nfts.length }}</p>
        <p>Nombre de tokens : {{ user.tokens }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
          nfts: [
            /* Dummy data, replace with actual NFT data */
            { id: 1, name: "NFT 1" },
            { id: 2, name: "NFT 2" }
          ],
          tokens: 1000
        }
      };
    }
  };
  </script>
  