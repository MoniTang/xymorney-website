<template>
<Layout>
    <div class="navBar">
        <span class="title">统计</span>
    </div>
     <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
<div>
    <ol>
        <Li v-for="(group,index) in result" :key="index">
        <h3>{{group.title}}</h3>
        <ol>
            <li v-for="(item,index) in group.items" :key="index">
            {{item.amount}}  {{item.createdAt}}
            </li>
        </ol>
        
        </Li>
    </ol>
</div>
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
.navBar{
    text-align: center;
    padding: 12px 16px;
    background:rgb(248,210,197);
    display: flex;
    align-items: center;
    justify-content: center;
}
 ::v-deep ul{
    margin-bottom: 8px;
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
        &.selected{
        background: #c4c4c4;
        &::after{
            display: none;
          }
        }
    }   
}

</style>