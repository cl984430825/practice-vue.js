<template>
    <div>
        <div id="shopPrice">
            <el-table 
            :data="shopData" 
            style="width:100%;" 
            :border='true' 
            tooltip-effect="dark" 
            ref="multipleTable" 
            @selection-change="handleSelectionChange">
                <el-table-column type="selection" :align="'center'" width="100">
                </el-table-column>
                <el-table-column label="商品名称" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{scope.row.shopName}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="商品数量" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-input-number style="width:120px;" 
                        v-model="scope.row.quantity" 
                        :min="1" 
                        :max="99" 
                        @change="addNumber"
                        label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column label="商品单价" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{scope.row.price}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="商品金额1" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{scope.row.price*scope.row.quantity}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button v-on:click="toRemove(scope)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top:20px;display: flex;justify-content: space-between;align-items: center;">
                <div>
                    <el-button @click="addShop">添加一件商品</el-button>
                    <el-button v-on:click="removeToPitchOn">删除所选商品</el-button>
                </div>
                <div>
                    <span>{{pitchNum}} 件商品总计(不含运费)：￥{{allPrice}}</span>
                    <el-button>去结算</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
    name: 'shopPrice',
    data(){
        return {
            pitchNum: 0,
            allPrice: 0
        }
    },
    methods: {
        ...mapActions({
            setShopData: 'setData',
        }),
        // 添加一件商品
        addShop(){
            let newShop = this.shopData
            newShop.push({shopName: "AJ1",quantity: 1,price: 1000,state:false,id:Math.floor(Math.random()*1000)})
            this.setShopData({a:'shopData',b:newShop})
        },
        handleSelectionChange(selection){
            let that = this
            this.allPrice = 0
            this.pitchNum = selection.length
            this.shopData.forEach((v)=>{v.state=false})
            selection.forEach((v,i)=>{
                that.shopData.forEach((a,b)=>{
                    if(v.id==a.id){
                        a.state = true
                    }
                })
            })
            this.setShopData({a:'shopData',b:this.shopData})
            this.shopData.forEach((v,i)=>{
                if(v.state){
                    that.allPrice+=v.quantity*v.price
                }
            })
        },
        addNumber(){
            let newArr = []
            this.shopData.forEach((v,i)=>{if(v.state){newArr.push(v)}})
            this.handleSelectionChange(newArr)
        },
        toRemove(scope){
            this.shopData.splice(scope.$index,1)
            this.addNumber()
        },
        removeToPitchOn(){
            let that = this
            for(let i = 0;i < this.shopData.length;i++){
                if(this.shopData[i].state){
                    this.shopData.splice(i,1)
                    i-=1;
                }
            }
        }
    },
    computed: {
        ...mapState({
            shopData: 'shopData'
        })
    }
}
</script>

<style scoped>

</style>