<template>
    <div>
        <router-link to="/">
            <el-button style="font-weight:bold;">Back</el-button>
        </router-link>
        <div id="rotate">
            <div class="box"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rotate",
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.box{
    width: 1rem;
    height: 1rem;
    background-color: salmon;
    display: flex;
}
</style>
