<template>
  <div id='content'>
  	<h2>{{list.title}}</h2>
  	<div v-html='list.content'></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '内容页面',
      list:[]
    }
  },
  methods: {
    getData(id) {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + id;
      this.$http.get(api).then((response)=> {
        console.log(response);
        this.list=response.body.result[0];
      }, function(err) {
        console.log(err);

      })
    }
  },
  mounted() {
    var id = this.$route.params.aid;
    this.getData(id);
  }
}

</script>
<style lang="scss">


#content{

    padding:1rem;

    line-height:2;

    img{

        max-width:100%;
    }
}
    
</style>