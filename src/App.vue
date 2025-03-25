<template>
  <div>
    <AppHeader @scrollToFooter="scrollToFooter"/>
    <AppFooter ref="footer"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppFooter,
    AppHeader,
  },
  methods: {
    scrollToFooter(){
      this.$refs.footer.$el.scrollIntoView({ behavior: "smooth" })
    },
  },
}
</script>
<style>
</style>
