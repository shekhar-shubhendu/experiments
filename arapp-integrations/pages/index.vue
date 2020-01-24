/* eslint-disable no-console */
<template>
  <div class="container">
    <div>
      <logo />
      <h4 class="title">
        Unity - Wallet Integration Check
      </h4>
      <h5 class="subtitle">
        This is a test app to check deeplink connection in unity app
      </h5>
      <div>
        <p class="mt-2 text-gray-600">
          Method: {{ method }}
          Details: {{ details }}
        </p>
      </div>
      <div class="links">
        <a
          href="com.geomotiongames.co3://co3walletcallback?tx=0x25ce3d2184b3bb4dab628296fa35055e3e0e58f58df4ca2122eb4bbcdf8c641e"
          target="_blank"
          class="button--green"
        >
          Call AR APP
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState('deeplink', {
      method (state) {
        // eslint-disable-next-line no-console
        console.log(state)
        return state.method
      },
      details (state) {
        return state.details
      }
    })
  },
  created () {
    // eslint-disable-next-line no-console
    console.log(this)
    if (this.$route.query.method && this.$route.query.details) {
      this.$store.commit('deeplink/setMethod', this.$route.query.method)
      this.$store.commit('deeplink/setDetails', this.$route.query.details)
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
