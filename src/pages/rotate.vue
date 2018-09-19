<template>
    <div>
        <router-link to="/">
            <el-button style="font-weight:bold;line-height:16px;">Back</el-button>
        </router-link>
        <div id="rotate">
            <div class="img_container">
                <img :style="'transform:rotate('+rotateVal+'deg);'" class="rotateImg" src="@/assets/rotateImg.jpg" alt="">
                <img @click="start" @keyup.space="start" class="zzImg" src="@/assets/zz.png" alt="">
            </div>
            <div class="list_container">
                <h3>中奖纪录</h3>
                <div class="jlCls" v-for="(item,index) in theWinner" :key="index">
                    <span>{{index+1}}、{{item.time}}</span>
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
        <!-- 结果弹框 -->
        <el-dialog title="抽奖结果" :visible.sync="dialogState" width="80%">
            <span>{{resultVal=="谢谢参与"?'谢谢参与':'恭喜你！获得了'+resultVal}}</span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapState,mapActions,mapMutations } from 'vuex'
    export default {
        name: "rotate",
        data(){
            return {
                // 旋转角度
                rotateVal: 0,
                // 旋转加速递增角度
                addNum: 0.1,
                qs: 0,
                // 是否处于抽奖中
                haveInHand: false,
                dialogState: false,
                resultVal: ""
            }
        },
        watch: {
            resultVal(){
                var newArr = this.theWinner
                newArr.push({name:this.resultVal,time:(new Date().toLocaleDateString())+"-"+(new Date().getHours())+":"+(new Date().getMinutes())})
                this.setData({a:'theWinner',b:newArr})
            }
        },
        computed: {
            ...mapState(['theWinner'])
        },
        created(){
            let that = this
            document.addEventListener("keydown",function(e){ 
                if(e.code=="Space"){
                    that.start()
                }
            })
        },
        methods: {
            ...mapActions(['setData']),
            start(){
                let that = this
                if(this.haveInHand){return}
                this.haveInHand = true
                this.addNum = 0.1
                this.qs = 0
                var timer = setInterval(()=>{
                    if(that.rotateVal>=360){that.rotateVal=0}
                    that.rotateVal+=that.addNum
                    if(that.qs>(Math.random()*1500+700)){
                        that.speedCut()
                    }else{
                        that.speedUp()
                    }
                    that.qs++
                    // 抽奖结果
                    if(that.addNum<=0){
                        clearInterval(timer)
                        that.result()
                    }
                },10)
            },
            // 加速
            speedUp(){
                let a = 0.01
                this.addNum += a
            },
            // 减速
            speedCut(){
                let a = 0.01
                this.addNum -= a
            },
            // 抽奖结果
            result(){
                this.haveInHand = false
                this.dialogState = true
                if(this.rotateVal>=0&&this.rotateVal<29){
                    this.resultVal = "代金券5元"
                }else if(this.rotateVal>=29&&this.rotateVal<60){
                    this.resultVal = "代金券10元"
                }else if(this.rotateVal>=60&&this.rotateVal<90){
                    this.resultVal = "果汁一杯"
                }else if(this.rotateVal>=90&&this.rotateVal<120){
                    this.resultVal = "谢谢参与"
                }else if(this.rotateVal>=120&&this.rotateVal<149){
                    this.resultVal = "代金券5元"
                }else if(this.rotateVal>=149&&this.rotateVal<166){
                    this.resultVal = "指定水果一份"
                }else if(this.rotateVal>=166&&this.rotateVal<179){
                    this.resultVal = "幸福之家欢乐游"
                }else if(this.rotateVal>=179&&this.rotateVal<210){
                    this.resultVal = "代金券50元"
                }else if(this.rotateVal>=210&&this.rotateVal<239){
                    this.resultVal = "果盒一个"
                }else if(this.rotateVal>=239&&this.rotateVal<256){
                    this.resultVal = "指定水果一份"
                }else if(this.rotateVal>=256&&this.rotateVal<269){
                    this.resultVal = "代金券100元"
                }else if(this.rotateVal>=269&&this.rotateVal<299){
                    this.resultVal = "代金券20元"
                }else if(this.rotateVal>=299&&this.rotateVal<329){
                    this.resultVal = "果盒一个"
                }else if(this.rotateVal>=329&&this.rotateVal<360){
                    this.resultVal = "果汁一杯"
                }
            }
        }
    }
</script>

<style scoped>
.img_container{
    width: 80%;
    position: relative;
    margin: 50px auto;
}
.rotateImg{
    width: 100%;
}
.zzImg{
    width: 50%;
    position: absolute;
    top: -8%;
    bottom: 0;
    left: .5%;
    right: 0;
    margin: auto;
}
.list_container{
    padding:0 20px;
    box-sizing: border-box;
}
.jlCls{
    display: flex;
    justify-content: space-between;
}
</style>
