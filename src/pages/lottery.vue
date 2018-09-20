<template>
    <div>
        <router-link to='/'>
            <el-button class="backCls"> Back </el-button>
        </router-link>
        <div id="lottery">
            <div style="display:flex;justify-content: center;">
                <el-button @click="action" type="primary" plain>开始</el-button>
            </div>
            <div class="list_container">
                <div class="nameDiv" v-for="(item,index) in nameArr" :key="index">{{item}}</div>
            </div>
        </div>
        <div class="result_jl">
            <h3>中奖纪录</h3>
            <div v-for="(item,index) in lottertArr" :key="index">{{index+1}}、{{item}}</div>
        </div>
        <!-- dialog -->
        <el-dialog :visible.sync="dialogState" title="抽奖结果">
            <div>抽奖结果为：{{lotteryVal}}</div>
        </el-dialog>
    </div>
</template>

<script>
    import { mapState,mapActions,MapMutations } from 'vuex'
    export default {
        name: "lottery",
        data(){
            return {
                nameArr: ["🍎","🍌","🍉","🍐","🍒","🍇","🍍","🍑"],
                num: 0,
                // 切换时间
                cutTime: 0,
                // 加速率
                cutCac: 50,
                dialogState: false,
                // 抽奖结果
                lotteryVal: ""
            }
        },
        computed: {
            ...mapState(['lottertArr'])
        },
        methods: {
            ...mapActions(['setData']),
            // 开始
            action(){
                let that = this
                this.cutTime = 1000
                this.cutCac = 50
                var timeTwo = setInterval(()=>{
                    that.cutCac += 0.005
                },Math.random()*1000+800)
                var timeFn = function(){
                    if(that.cutTime<=50){that.cutTime = 50}
                    setTimeout(()=>{
                        that.removeId();
                        document.getElementsByClassName("nameDiv")[that.num].setAttribute("id","pitchOn");
                        that.num++; 
                        if(that.cutCac>=50.08){
                            that.cutTime += that.cutCac
                            if(that.cutCac>50.12){
                                clearInterval(timeTwo)
                                that.dialogState = true
                                that.lotteryVal = that.nameArr[that.num-1]
                                that.lotteryRecord()
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
                }
                timeFn();
            },
            // 添加中奖纪录
            lotteryRecord(){
                let newLottery = this.lottertArr
                newLottery.push(this.lotteryVal)
                this.setData({a:'lottertArr',b:newLottery})
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
.list_container{
    
}
.result_jl{
    padding: 0 20px;
}
</style>

