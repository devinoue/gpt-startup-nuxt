<template>
  <div class="container">
    <TheHeader />
    <span v-if="message">{{ message }}</span>

    <div>
      <div
        id="px-6 english-quote"
        class="px-3 text-left max-w-5xl text-english"
      >
        ⚡IDEA:<br />
        {{ idea }}
      </div>
      <AppHr class="m-12" />
      <div
        id="px-6 japanese-quote"
        class="px-3 text-left max-w-5xl text-japanese"
      >
        ⚡IDEA:<br />
        {{ japanese }}
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from '@vue/composition-api'
import axios from 'axios'
export default {
  setup() {
    const endPoint =
      process.env.END_POINT ||
      'https://kq4z97l2ba.execute-api.ap-northeast-1.amazonaws.com/dev/get'
    const message = ref('')
    const result = reactive({
      idea: '',
      japanese: '',
    })
    onMounted(async () => {
      try {
        const res: any = await axios.get(endPoint)
        console.log(res)
        result.idea = res.data.idea
        result.japanese = res.data.japanese
      } catch (e) {
        message.value = `${e.message}`
      }
    })
    return { ...toRefs(result), message }
  },
}
</script>

<style>
.text-english {
  font-size: 1.2rem;
  font-family: 'freight-display-pro', serif;
  font-weight: 500;
  letter-spacing: -1px;
  font-feature-settings: 'palt';
}
.text-japanese {
  font-size: 1.2rem;
  font-family: 'Noto Serif CJK', serif;
  font-weight: 900;
  font-feature-settings: 'palt';
}
.text-author {
  font-size: 1.4rem;
  font-family: 'freight-display-pro', serif;
  font-weight: 500;
  letter-spacing: -1px;
}
body {
  background-color: #f4f0e7;
  font-family: 'Noto Sans JP', Raleway, HelveticaNeue, 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  color: #010102;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
