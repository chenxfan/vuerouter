<template>
	<div id='news'>
		<ul class="list">
			 <li  v-for="item in list">
			 	<router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
			 </li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'新闻页面',
				list:[]
			}
		},methods:{
			getData(){
				var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
				this.$http.jsonp(api).then((response)=>{
					console.log(response);
					this.list=response.body.result;
				},function(err){
					console.log(err);
				})
			}
		},mounted(){
			this.getData();
		}
	}
</script>
<style lang="scss" scoped>
    
    .list{

        li{
            height:3.4rem;

            line-height:3.4rem;

            boder-bottom:1px solid #eee;

            /*font-size:1.6rem;*/

            a{

                color:#666;

                
            }
        }
    }

</style>