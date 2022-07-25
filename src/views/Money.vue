<template>
<layout class-prefix="layout"> 
<NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<Types  :value.sync="record.type"/>
<div class="note">
    <FormItem @update:value="onUpdateNote" 
fieldName="备注" placeholder="在这里输入备注"/>
</div>
<Tags :dataSource.sync="tags" @update:value="onUpdateTag"/>
{{record}}
</layout>
</template>
<script lang="ts">
import Tags from "@/components/Tags.vue";
import FormItem from "@/components/FormItem.vue";
import Types from "../components/Types.vue";
import NumberPad from '@/components/NumberPad.vue';
import vue from 'vue';
import store from "@/store/index2";
import {Component, Watch} from 'vue-property-decorator';

@Component({components:{Tags, FormItem, Types, NumberPad}})
   export default  class Money extends vue{
    tags=store.tagList;
    recordList=store.recordList;
    record:RecordItem={tags:[],notes:'',type:'-',amount:0};
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
     store.createRecord(this.record)   
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
