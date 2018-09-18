<template>
    <div>
        <router-link to="/">
            <el-button style="font-weight:bold;line-height:16px;">Back</el-button>
        </router-link>
        <!-- content -->
        <div style="displat:flex;flex-direction: column;">
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
}
@media screen and (min-width: 500px){
    .header_four{
        background-color: #fff;
        width: 25%;
        font-size: 1.6rem;
        line-height: 2rem;
        padding: 1rem;
        float: left;
        box-sizing: border-box;
    }
}
.header_container{
    display: flex;
    justify-content: center;
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
}
.header_four span{
    display: inline-block;
    background-color: salmon;
}
.title_cls{
    background-color: antiquewhite;
    text-align: center;
    padding: 1.5rem 1rem;
}
</style>
