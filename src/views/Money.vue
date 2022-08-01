<template>
<layout class-prefix="layout"> 
<NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<Tabs :data-source="recordTypeList" :value.sync="record.type"/>
<div class="note">
    <FormItem :value.sync="record.notes"
fieldName="备注" placeholder="在这里输入备注"/>
</div>
<Tags @update:value="record.tags=$event"/>
</layout>
</template>
<script lang="ts">
import Tags from "@/components/Tags.vue";
import FormItem from "@/components/FormItem.vue";
import Tabs from "../components/Tabs.vue";
import NumberPad from '@/components/NumberPad.vue';
import vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
 import recordTypeList from '@/constants/recordTypeList';

@Component({components:{Tags, FormItem, Tabs, NumberPad}})
   export default  class Money extends vue{
   get recordList(){
            return this.$store.state.recordList;
        }
    recordTypeList = recordTypeList;
    record:RecordItem={tags:[],notes:'',type:'-',amount:0};
    created(){
        this.$store.commit('fetchRecords')
    }
    onUpdateAmount(value:string){
        this.record.amount=parseFloat(value);
    }
    saveRecord(){

        if(!this.record.tags||this.record.tags.length===0){
            return window.alert('请选择一个标签')}
        if(!this.record.amount||this.record.amount===0||this.record.amount===null){
            return window.alert('金额不能为空')}
            
        this.$store.commit('createRecord',this.record)
        if(this.$store.state.createRecordError===null){
            window.alert('已保存');
            this.record.notes=''
        }
    }
}
</script>
<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
.note{
    padding: 12px 0;
}
</style>
