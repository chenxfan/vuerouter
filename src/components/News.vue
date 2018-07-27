<template>
  <div id='news'>
    ----{{this.$store.state.count}}
    <button @click='incCount()'>触发vuex</button>
    <ul class="list">
      <li v-for="item in list">
        <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
  data() {
    return {
      msg: '新闻页面',
      list: []
    }
  },
  methods: {
    getData() {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      this.$http.jsonp(api).then((response) => {
        console.log(response);
        this.list = response.body.result;
        //数据放在store里面

        this.$store.commit('addList', response.body.result);
      }, function(err) {
        console.log(err);
      })
    },
    incCount() {
      this.$store.commit('incCount');
    }
  },
  mounted() {
    var listData = this.$store.state.list;
    if (listData.length > 0) {
      this.list = listData;
    } else {
      this.getData();
    }

  },
  store
}

</script>
<style lang="scss" scoped>
.list {

  li {
    height: 3.4rem;

    line-height: 3.4rem;

    boder-bottom: 1px solid #eee;

    /*font-size:1.6rem;*/
    a {

      color: #666;
    }
  }
}

</style>
