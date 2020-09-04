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
        &nbsp;&nbsp;&nbsp;&nbsp;{{ idea }}
      </div>
      <AppHr class="m-12" />
      <div
        id="px-6 japanese-quote"
        class="px-3 text-left max-w-5xl text-japanese"
      >
        ⚡IDEA:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{{ japanese }}
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
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap',
      },
    ],
  },
}
</script>

<style>
.text-english {
  font-size: 1.2rem;
  font-family: 'Lato', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-feature-settings: 'palt';
  color: #535353;
}
.text-japanese {
  font-size: 1.2rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-feature-settings: 'palt';
}
.text-author {
  font-size: 1.4rem;
  font-family: 'freight-display-pro', serif;
  font-weight: 500;
  letter-spacing: -1px;
}
body {
  background-color: #f5f2eb;
  font-family: 'Noto Sans JP', Raleway, HelveticaNeue, 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #535353;
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
