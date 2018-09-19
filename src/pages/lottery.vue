<template>
    <div>
        <router-link to='/'>
            <el-button class="backCls"> Back </el-button>
        </router-link>
        <div id="lottery">
            <div style="display:flex;justify-content: center;">
                <el-button @click="action" type="primary" plain>开始</el-button>
            </div>
            <div>
                <div class="nameDiv" v-for="(item,index) in nameArr" :key="index">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lottery",
        data(){
            return {
                nameArr: [1,2,3,4,5,6,7,8,9,10],
                num: 0,
                // 切换时间
                cutTime: 0,
                // 加速率
                cutCac: 50
            }
        },
        methods: {
            // 开始
            action(){
                let that = this
                this.cutTime = 1000
                this.cutCac = 50
                console.log(this.cutTime,this.cutCac)
                var timeFn = function(){
                    if(that.cutTime<=150){that.cutTime = 150}
                    setTimeout(()=>{
                        that.removeId();
                        document.getElementsByClassName("nameDiv")[that.num].setAttribute("id","pitchOn");
                        that.num++; 
                        if(that.cutCac>=50.5){
                            that.cutTime += that.cutCac
                            if(that.cutCac>51){
                                clearTimeFn();
                                console.log("结束了")
                                return
                            }
                        }else{
                            that.cutTime -= that.cutCac
                        }
                        if(that.num == document.getElementsByClassName("nameDiv").length){
                            that.num = 0
                        }
                        timeFn();
                    },that.cutTime)
                    var timeTwo = setInterval(()=>{
                        that.cutCac += 0.001
                    },1000)
                    var clearTimeFn = function(){
                        clearInterval(timeTwo);
                    }
                }
                timeFn();
            },
            // 清除id
            removeId(){
                var a = document.getElementsByClassName("nameDiv").length;
                for(let i = 0;i < a;i++){
                    document.getElementsByClassName("nameDiv")[i].removeAttribute('id');
                }
            }
        }
    }
</script>

<style scoped>
.nameDiv{
    width: 100px;
    height: 100px;
    background-color: bisque;
    float: left;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ffffff;
    font-size: 28px;
}
#pitchOn{
    width: 100px;
    height: 100px;
    float: left;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ffffff;
    font-size: 28px;
    background-color: rosybrown;
    
}
</style>

