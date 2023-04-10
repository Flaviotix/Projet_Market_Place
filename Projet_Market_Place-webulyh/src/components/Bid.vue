<template>
    <div class="bg-white rounded shadow-md p-4">
      <h3 class="font-bold mb-2">Enchérir sur {{ nft.name }}</h3>
      <form>
        <div class="mb-4">
          <label for="bidAmount" class="block mb-2">Montant de l'enchère :</label>
          <input type="number" id="bidAmount" class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Placer une enchère</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nft: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  