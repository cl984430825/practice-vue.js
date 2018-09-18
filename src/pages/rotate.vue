<template>
    <div>
        <router-link to="/">
            <el-button style="font-weight:bold;line-height:16px;">Back</el-button>
        </router-link>
        <!-- content -->
        <div>
            <!-- header -->
            <div class="header_container">
                <div class="userDiv"></div>
            </div>
            <div class="header_four_container">
                <div class="header_four">
                    <span>内容内容内容内容内容内容内容内容</span>
                </div>
                <div class="header_four">
                    <span>内容内容内容内容内容内容内容内容</span>
                </div>
                <div class="header_four">
                    <span>内容内容内容内容内容内容内容内容</span>
                </div>
                <div class="header_four">
                    <span>内容内容内容内容内容内容内容内容</span>
                </div>
            </div>
            <div class="title_cls">
                <h1>标题标题标题标题标题标题标题标题标题</h1>
                <span>段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落</span>
            </div>
            <div class="nine_container">
                <div class="nine_div" v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index">
                    <div class="colorDiv"></div>
                    <h2>标题</h2>
                    <span>描述描述描述</span>
                </div>
            </div>
            <div class="cljl_container">
                <img class="cl_img" src="@/assets/cl.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rotate",
    data(){
        return {

        }
    },
    created(){
        console.log(window.screen.width / 1920 * 10 + "px")
        document.documentElement.style.fontSize = window.screen.width / 1920 * 10 + "px";
    }
}
</script>

<style scoped>
@media screen and (max-width: 300px){
    .header_four{
        background-color: #fff;
        width: 100%;
        font-size: 1.6rem;
        line-height: 2rem;
        padding: 1rem;
        float: left;
        box-sizing: border-box;
    }
    .nine_div{
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
}
@media screen and (min-width: 300px){
    .header_four{
        background-color: #fff;
        width: 50%;
        font-size: 1.6rem;
        line-height: 2rem;
        padding: 1rem;
        float: left;
        box-sizing: border-box;
    }
    .nine_div{
        width: 50%;
        padding: 0 1rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
}
@media screen and (min-width: 500px){
    .header_four{
        background-color: #fff;
        width: 25%;
        font-size: 1.6rem;
        line-height: 2rem;
        padding: 1rem;
        float: left;
        display: flex;
        box-sizing: border-box;
    }
    .nine_div{
        width: 33.33%;
        padding: 0 1rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
}
.header_container{
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
}
.userDiv{
    background-color: #000;
    border-radius: 50%;
    padding-bottom: 40%;
    width: 40%;
}
.header_four_container{
    box-sizing: border-box;
    height: 6rem;
    margin-top: 1rem;
}
.header_four span{
    display: inline-block;
    background-color: salmon;
    margin: 0 auto;
}
.title_cls{
    background-color: antiquewhite;
    text-align: center;
    padding: 1.5rem 1rem;
}
.nine_container{
    display: flex;
    margin-top: 3rem;
    max-width: 120rem;
    flex-wrap: wrap;
    margin: 3rem auto;
}
.colorDiv{
    width: 100%;
    height: 5rem;
    background-color: darkorchid;
}
.cl_img{
    max-width: 80%;
    margin: 0 auto;
}
.cljl_container{
    text-align: center;
}
</style>
