<template>
  <header class="w-full header bg-black">
    <div class="m-2 mx-auto w-full leading-6">
      <span class="block text-2xl text-logo text-white">GPT-Startup</span>

      <span class="inline-block text-xs text-white subtitle">
        ⚡Startup Idea Generator with GPT-3 💡
      </span>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: '',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap',
      },
    ],
  },
  setup() {
    return {}
  },
}
</script>
<style scoped>
.header {
  color: black;
  position: fixed;
  top: 0;
}
.text-logo {
  font-family: 'Sedgwick Ave', cursive;
  font-weight: 700;
  letter-spacing: 3px;
}
.subtitle {
  font-family: 'freight-display-pro', serif;
}
</style>
