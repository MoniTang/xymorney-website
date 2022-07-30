<template>
<layout class-prefix="layout"> 
<NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<Tabs :data-source="recordTypeList" :value.sync="record.type"/>
<div class="note">
    <FormItem @update:value="onUpdateNote" 
fieldName="备注" placeholder="在这里输入备注"/>
</div>
<Tags/>
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

    onUpdateNote(value:string){
        this.record.notes=value;
    }
    onUpdateAmount(value:string){
        this.record.amount=parseFloat(value);
    }
    saveRecord(){
     this.$store.commit('createRecord',this.record)
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
