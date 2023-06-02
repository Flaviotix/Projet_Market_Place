<template>
  <header class="bg-blue-600 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <router-link to="/" class="font-bold text-lg">
          NFT Marketplace
        </router-link>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="hover:text-gray-300">
              Accueil
            </router-link>
          </li>
          <li>
            <router-link to="/create-nft" class="hover:text-gray-300">
              Créer un NFT
            </router-link>
          </li>
          <li>
            <router-link to="/profile" class="hover:text-gray-300">
              Profil
            </router-link>
          </li>
          <li>
            <router-link to="/login" class="hover:text-gray-300">
              Connexion
            </router-link>
          </li>
          <li>
            <router-link to="/register" class="hover:text-gray-300">
              Inscription
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
