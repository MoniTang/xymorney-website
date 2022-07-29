<template>
<Layout>
    <!-- <div class="navBar">
        <span class="title">统计</span>
    </div> -->
     <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <ol class="statistics-List">
        <li v-for="(group,index) in result" :key="index">
        <h3 class="group-title">{{group.title}}</h3>
        <ol>
            <li v-for="(item,index) in group.items" :key="index"
            class="record">
            <span>{{tagString(item.tags )}}</span>
            <span class="item-notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
            </li>
        </ol>
        </li>
          <li v-for="(group,index) in result" :key="index">
        <h3 class="group-title">{{group.title}}</h3>
        <ol>
            <li v-for="(item,index) in group.items" :key="index"
            class="record">
            <span>{{tagString(item.tags )}}</span>
            <span class="item-notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
            </li>
        </ol>
        </li>
    </ol>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import Tabs from '../components/Tabs.vue';
import recordTypeList from "@/constants/recordTypeList";
import intervalList from '@/constants/intervalList'

@Component({components:{Tabs}})
    export default class Statistics extends Vue{
        tagString(tags:string[]){
            return tags.length===0?'无':tags.join(',')
        }
        get recordList(){
            return (this.$store.state as RootState).recordList;
        }
        get result(){
            const {recordList}=this;
            const hashTable:{[key:string]:{title:string,items:RecordItem[]}}={};
            for(let i=0;i<recordList.length;i++){
                const [date,item]=recordList[i].createdAt!.split('T');
                hashTable[date]=hashTable[date]||{title:date,items:[]};
                hashTable[date].items.push(recordList[i])
            }
            return hashTable;
        }
        beforeCreate(){
             this.$store.commit('fetchRecords');
        }
        type='-'
        recordTypeList=recordTypeList;
        interval='day'
        intervalList=intervalList;

    
}
</script>

<style lang="scss" scoped>
%item{
   padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.statistics-List{
    overflow:auto;
    .group-title{
    @extend %item;
}
.record{ 
    background: white;
    @extend %item
}
.item-notes{
    margin-right:auto ;
    margin-left: 16px;
    color: #999;
}

}

.navBar{
    text-align: center;
    padding: 12px 16px;
    background:rgb(248,210,197);
    display: flex;
    align-items: center;
    justify-content: center;
}
 ::v-deep ul{
    background: #eee !important;
    .type-tabs-item{
        height: 40px;
        background: white;
        &.selected{
        background: #c4c4c4;
        &::after{
            display: none;
        }
    }
}
    .interval-tabs-item {
        font-size:16px;
        height:28px;
        background: white;
        margin: 0 4px;
        margin-top: 8px;
        &.selected{
        background: #c4c4c4;
        &::after{
            display: none;
          }
        }
    }   
}

</style>