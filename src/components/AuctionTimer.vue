<template>
    <div>
      <p class="font-bold">Temps restant pour l'enchère :</p>
      <p>{{ timeRemaining }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      endTime: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        timeRemaining: ""
      };
    },
    created() {
      this.updateTimeRemaining();
      setInterval(() => {
        this.updateTimeRemaining();
      }, 1000);
    },
    methods: {
      updateTimeRemaining() {
        const remaining = Math.max(this.endTime - Date.now(), 0);
        const hours = Math.floor(remaining / 3600000);
        const minutes = Math.floor((remaining % 3600000) / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        this.timeRemaining = `${hours}h ${minutes}m ${seconds}s`;
      }
    }
  };
  </script>
  