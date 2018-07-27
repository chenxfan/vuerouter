<template>
  <div id='home'>
    {{msg}}
    <br>--- {{this.$store.state.count}}----{{this.$store.getters.computedCount}}
    <button @click='incCount()'>触发按钮</button>
  </div>
</template>
<script>
//vuex的使用  引用store
import store from '../vuex/store.js';

export default {
  data() {
    return {
      msg: '首页'
    }
  },
  store,
  methods: {
    incCount() {

      //改变vuex store里面的数据

      //this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/

      this.$store.dispatch('incMutationsCount'); /*触发 actions里面的方法   */
    }
  }
}


</script>
<style lang="scss">


</style>
