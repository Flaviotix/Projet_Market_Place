<script setup lang="ts">
import IconPurse from './icons/IconPurse.vue';
import IconPresentation from './icons/IconPresentation.vue';
import IconLogin from './icons/IconLogin.vue';
import IconMiningCart from './icons/IconMiningCart.vue';
interface Props {
    msg: string
}
defineProps<Props>()

</script>

<template>
    <header class="wrapper">
        <img alt="Stacking Ring logo" src="../assets/stacking-ring.png" />
        <h2>{{ msg }}</h2>
        <IconPresentation />
        <IconMiningCart />
        <IconPurse />
        <IconLogin />
    </header>
</template>

<style scoped>
img{
    width: 30px;
    height: auto;
}
header{
    padding-bottom: 50px;
}
</style>