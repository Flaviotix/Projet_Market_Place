<template>
    <section class="container mx-auto p-4">
      <div class="bg-white w-full max-w-md mx-auto rounded shadow-md p-6">
        <h2 class="text-center font-bold text-2xl mb-6">Créer un NFT</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block mb-2">Nom :</label>
            <input type="text" id="name" class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div class="mb-4">
            <label for="description" class="block mb-2">Description :</label>
            <textarea id="description" rows="4" class="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <div class="mb-4">
            <label for="image" class="block mb-2">Image :</label>
            <input type="file" id="image" class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div class="mb-4">
            <label for="price" class="block mb-2">Prix de départ :</label>
            <input type="number" id="price" class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Créer NFT</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  