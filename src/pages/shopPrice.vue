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
                <el-table-column label="数量" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-input-number style="width:120px;" v-model="scope.row.quantity" :min="1" label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column label="单价" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{scope.row.price}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="金额" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{scope.row.price*scope.row.quantity}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" :align="'center'" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top:20px;display: flex;justify-content: space-between;align-items: center;">
                <div>
                    <el-button @click="addShop">添加一件商品</el-button>
                    <el-button>删除所选商品</el-button>
                </div>
                <div>
                    <span>1件商品总计(不含运费)：￥0</span>
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
            
        }
    },
    methods: {
        ...mapActions({
            setShopData: 'setData'
        }),
        // 添加一件商品
        addShop(){
            let newShop = this.shopData
            newShop.push({shopName: "AJ1",quantity: 1,price: 1299})
            setShopData({a:'shopData',b:newShop})
        },
        handleSelectionChange(){
            console.log(123)
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