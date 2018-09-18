<template>
    <div>
        <div id="rotate">
            <div class="img_container">
                <img :style="'transform:rotate('+rotateVal+'deg);'" class="rotateImg" src="@/assets/rotateImg.jpg" alt="">
                <img @click="start" class="zzImg" src="@/assets/zz.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rotate",
        data(){
            return {
                // 旋转角度
                rotateVal: 0,
                // 旋转加速递增角度
                addNum: 0.1
            }
        },
        methods: {
            start(){
                let that = this
                let a = 0.01
                var timer = setInterval(()=>{
                    if(that.rotateVal>=360){that.rotateVal=0}
                    that.rotateVal+=that.addNum
                    that.addNum+=a
                },10)
                setTimeout(()=>{
                    clearInterval(timer)
                    console.log(that.rotateVal)
                },5000)
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
</style>
