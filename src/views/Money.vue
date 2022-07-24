<template>
<layout class-prefix="layout"> 
<NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<Types  :value.sync="record.type"/>
<div class="note">
    <FormItem @update:value="onUpdateNote" 
fieldName="备注" placeholder="在这里输入备注"/>
</div>
<Tags :dataSource.sync="tags" @update:value="onUpdateTag"/>

</layout>
</template>
<script lang="ts">
import Tags from "@/components/Tags.vue";
import FormItem from "@/components/FormItem.vue";
import Types from "../components/Types.vue";
import NumberPad from '@/components/NumberPad.vue';
import vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
const recordList=recordListModel.fetch();
const tagList=tagListModel.fetch();

@Component({components:{Tags, FormItem, Types, NumberPad}})
   export default  class Money extends vue{
    tags=tagList;
    record:RecordItem={tags:[],notes:'',type:'-',amount:0};
    recordList: RecordItem[]=recordList;
    onUpdateTag(value:string[]){
        this.record.tags=value;
    }
    onUpdateNote(value:string){
        this.record.notes=value;
    }
    onUpdateAmount(value:string){
        this.record.amount=parseFloat(value);
    }
    saveRecord(){
        const record2:RecordItem=recordListModel.clone(this.record);
        record2.createdAt=new Date()
        this.recordList.push(record2);        
    }
    @Watch('recordList')
        onRecordListChange(){
            recordListModel.save(this.recordList)
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
