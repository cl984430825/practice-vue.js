<template>
  <div>
    <div id="home">
      <router-link :to="item" v-for="(item,index) in routerArr" :key="index">
        <el-button class="btn-cls">{{item}}</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapState,mapActions,mapMutations } from 'vuex'
  export default {
    name: "home",
    data(){
      return {
        
      }
    },
    computed:{
      ...mapState(['routerArr'])
    }
  }
</script>

<style scoped>
#home{
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.btn-cls{
  font-weight: bold;
  margin:0 20px 20px 0;
}
</style>
