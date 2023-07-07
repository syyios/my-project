<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{bigSum}}</h3>
    <h3>我在{{location}}学习{{subject}}</h3>
    <h3>persone组件中的总人数为:{{ personList.length }}</h3>
    <select v-model.number = "n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等500毫秒再加</button>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
export default {
  name: 'CountComponent',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    ...mapState('countAbout', ['sum', 'location', 'subject']),
    ...mapState('personAbout', ['personList']),
    ...mapGetters('countAbout', ['bigSum']),
  },
  methods: {
    ...mapMutations('countAbout', {increment: 'addition', decrement: 'substruction'}),
    ...mapActions('countAbout', {incrementOdd: 'additionWithOddNumber', incrementWait: 'additionWait'}),
  },
  mounted() {
    console.log('Count组件挂载完毕')
  },

}
</script>

<style>
    button{
      margin-left: 10.px;
    }
</style>