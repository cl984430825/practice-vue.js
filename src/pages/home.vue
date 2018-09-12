<template>
  <div>
    <div id="home">
      <router-link to="/shopPrice">
        <el-button class="btn-cls">商品计价</el-button>
      </router-link>
      <router-link to="/todoList">
        <el-button class="btn-cls">todoList</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {

      }
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
  margin-right: 20px;
}
</style>
