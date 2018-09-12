<template>
    <div>
        <div id="todoList">
            <h1>小任务列表</h1>
            <h2 style="margin-top:20px;">添加小任务</h2>
            <el-input v-model="iptVal" @keyup.enter.native="addmission" placeholder="输入小目标后，按回车确认" style="margin-top:20px;"></el-input>
            <div style="margin-top:20px;">共有5项任务，已完成3项，还有2项未完成</div>
            <div style="margin-top:10px;">
                <el-radio v-model="radio" :label="0">所有任务</el-radio>
                <el-radio v-model="radio" :label="1">已完成任务</el-radio>
                <el-radio v-model="radio" :label="2">未完成任务</el-radio>
            </div>
            <div class="checkbox_container" v-if="radio==0">
                <el-checkbox v-for="(item,index) in missionAll" :key="index" v-model="checked">
                    <el-input style="height:50px;" :value="item.text"></el-input>
                    <el-button>删除</el-button>
                </el-checkbox>
            </div>
            <div class="checkbox_container" v-if="radio==1">
                <el-checkbox v-for="(item,index) in missionOk" :key="index" v-if="item.state" v-model="checked">
                    <el-input style="height:50px;" :value="item.text"></el-input>
                    <el-button>删除</el-button>
                </el-checkbox>
            </div>
            <div class="checkbox_container" v-if="radio==2">
                <el-checkbox v-for="(item,index) in unfinished" :key="index" v-if="!item.state" v-model="checked">
                    <el-input style="height:50px;" :value="item.text"></el-input>
                    <el-button>删除</el-button>
                </el-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState,mapActions,mapMutations } from 'vuex'
    export default {
        name: "todoList",
        data(){
            return {
                iptVal: "",
                radio: 0,
                checked: false
            }
        },
        watch:{
            radio(){
                console.log(this.radio)
            }
        },
        computed:{
            ...mapState(['missionAll','missionOk','unfinished'])
        },
        methods:{
            ...mapActions(['setData']),
            addmission(){
                if(!this.iptVal){alert("不能为空!"); return}
                var newArr = this.missionAll
                newArr.push(Object.assign({},{text:this.iptVal,state:false}))
                // newArr.forEach((v,i)=>{
                    
                // })
                this.setData({a:'missionAll',b:newArr})
                this.iptVal = ""
            }
        }
    }
</script>

<style scoped>
#todoList{
    padding:0 20px;
}
.checkbox_container{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.el-checkbox+.el-checkbox{
    margin-left: 0;
    width: 100%;
}
</style>
