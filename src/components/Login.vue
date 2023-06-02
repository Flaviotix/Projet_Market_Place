<template>
    <section class="container mx-auto p-4">
      <div class="bg-white w-full max-w-md mx-auto rounded shadow-md p-6">
        <h2 class="text-center font-bold text-2xl mb-6">Connexion</h2>
        <form>
          <div class="mb-4">
            <label for="email" class="block mb-2">Adresse e-mail :</label>
            <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Mot de passe :</label>
            <input type="password" id="password" class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Se connecter</button>
        </form>
      </div>
    </section>
  </template>
  <script>
  export default {};
  </script>
  