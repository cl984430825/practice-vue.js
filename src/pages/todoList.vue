<template>
    <div>
      <router-link to="/">
        <el-button class="backCls">Back</el-button>
      </router-link>
        <div id="todoList">
            <h1>小任务列表</h1>
            <h2 style="margin-top:20px;">添加小任务</h2>
            <el-input v-model="iptVal" @keyup.enter.native="addmission" placeholder="输入小目标后，按回车确认" style="margin-top:20px;"></el-input>
            <div style="margin-top:20px;">共有 {{mission.length}} 项任务，已完成 {{parkData.length}} 项，还有 {{freeData.length}} 项未完成</div>
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
                        <el-input @input="iptListData({a:item.id,b:$event})" :value="item.text"></el-input>
                        <el-button @click="remove(item.id)">删除</el-button>
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
                        <el-input @input="iptListData({a:item.id,b:$event})" :value="item.text"></el-input>
                        <el-button @click="remove(item.id)">删除</el-button>
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
                        <el-input @input="iptListData({a:item.id,b:$event})" :value="item.text"></el-input>
                        <el-button @click="remove(item.id)">删除</el-button>
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "todoList",
  data() {
    return {
      iptVal: "",
      radio: 0,
      checkList: [],
      parkData: [],
      freeData: []
    };
  },
  watch: {
    radio() {
      // console.log(this.radio)
    }
  },
  computed: {
    ...mapState(["mission"])
  },
  methods: {
    ...mapActions(["setData"]),
    addmission() {
      if (!this.iptVal) {
        alert("不能为空!");
        return;
      }
      var newArr = this.mission;
      newArr.push(
        Object.assign(
          {},
          {
            text: this.iptVal,
            state: false,
            id: Math.floor(Math.random() * 1000)
          }
        )
      );

      this.setData({ a: "mission", b: newArr });
      this.iptVal = "";
      this.parkOrFree();
    },
    checkListMeth() {
      for (let i = 0; i < this.mission.length; i++) {
        this.mission[i].state = false;
      }
      for (let i = 0; i < this.checkList.length; i++) {
        for (let m = 0; m < this.mission.length; m++) {
          if (this.checkList[i] == this.mission[m].id) {
            this.mission[m].state = true;
          }
        }
      }
      this.parkOrFree();
      this.setData({ a: "mission", b: this.mission });
    },
    iptListData(obj){
        this.mission.forEach((v,i)=>{
            if(v.id==obj.a){
                v.text = obj.b
            }
        })
        this.setData({a:'mission',b:this.mission})
    },
    remove(id){
        let that = this
        this.mission.forEach((v,i)=>{
            if(v.id==id){
                that.mission.splice(i,1)
            }
        })
        this.parkOrFree();
        this.setData({a:'mission',b:this.mission})
    },
    // 刷新已完成和未完成
    parkOrFree(){
        let that = this
        this.parkData = []
        this.freeData = []
        this.mission.forEach((v,i)=>{
            if(v.state){
                that.parkData.push(v)
            }else{
                that.freeData.push(v)
            }
        })
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .list_container {
    display: flex;
    flex-direction: column;
  }
  .el-radio + .el-radio {
    margin: 10px 0 0 0;
  }
}
#todoList {
  padding: 0 20px;
}
.checkbox_container {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.el-checkbox + .el-checkbox {
  margin-left: 0;
  width: 100%;
}
.checked_container {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.el-checkbox__label {
  z-index: 999;
}
.backCls{
    text-decoration: none;
    font-weight: bold;
}
</style>
