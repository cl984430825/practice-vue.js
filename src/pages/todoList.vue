<template>
    <div>
        <div id="todoList">
            <h1>小任务列表</h1>
            <h2 style="margin-top:20px;">添加小任务</h2>
            <el-input v-model="iptVal" @keyup.enter.native="addmission" placeholder="输入小目标后，按回车确认" style="margin-top:20px;"></el-input>
            <div style="margin-top:20px;">共有5项任务，已完成3项，还有2项未完成</div>
            <div class="list_container" style="margin-top:20px;">
                <el-radio v-model="radio" :label="0">所有任务</el-radio>
                <el-radio v-model="radio" :label="1">已完成任务</el-radio>
                <el-radio v-model="radio" :label="2">未完成任务</el-radio>
            </div>
            <div class="checkbox_container" v-if="radio==0">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox 
                    @change="checkListMeth"
                    class="checked_container" 
                    v-for="(item,index) in mission" 
                    :label="item.id"
                    :key="index">
                        <el-input :value="item.text"></el-input>
                        <el-button>删除</el-button>
                    </el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkbox_container" v-if="radio==1">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox 
                    @change="checkListMeth"
                    class="checked_container" 
                    v-for="(item,index) in mission" 
                    :label="item.id"
                    :key="index" 
                    v-if="item.state==true">
                        <el-input :value="item.text"></el-input>
                        <el-button>删除</el-button>
                    </el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkbox_container" v-if="radio==2">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox 
                    @change="checkListMeth"
                    class="checked_container" 
                    v-for="(item,index) in mission" 
                    :label="item.id"
                    :key="index" 
                    v-if="!item.state">
                        <el-input :value="item.text"></el-input>
                        <el-button>删除</el-button>
                    </el-checkbox>
                </el-checkbox-group>
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
                checkList: []
            }
        },
        watch:{
            radio(){
                console.log(this.radio)
            }
        },
        computed:{
            ...mapState(['mission'])
        },
        methods:{
            ...mapActions(['setData']),
            addmission(){
                if(!this.iptVal){alert("不能为空!"); return}
                var newArr = this.mission
                newArr.push(Object.assign({},{text:this.iptVal,state:false,id:Math.floor(Math.random()*1000)}))
                
                this.setData({a:'mission',b:newArr})
                this.iptVal = ""
            },
            checkListMeth(){
                for(let i = 0;i < this.checkList.length;i++){
                    for(let m = 0;m < this.mission.length;m++){
                        if(this.checkList[i]==this.mission[m].id){
                            this.mission[m].state = true
                        }
                    }
                }
                this.setData({a:'mission',b:this.mission})
            }
        }
    }
</script>

<style scoped>
@media screen and (max-width: 400px){
    .list_container{
        display: flex;
        flex-direction: column;
    }
    .el-radio+.el-radio{
        margin: 10px 0 0 0;
    }
}
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
.checked_container{
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.el-checkbox__label{
    z-index: 999;
}
</style>
