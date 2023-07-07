<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Count/>
    <Persion/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Persion from './components/Persion.vue'

export default {
  name: 'App',
  components: {
    Count,
    Persion
  }
}
</script>

<style>

</style>
