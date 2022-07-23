<template>
<layout class-prefix="layout"> 
<NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<Types  :value.sync="record.type"/>
<Note @update:value="onUpdateNote"/>
<Tags :dataSource.sync="tags" @update:value="onUpdateTag"/>
{{recordList}}
</layout>
</template>
<script lang="ts">
import Tags from "@/components/Tags.vue";
import Note from "@/components/Note.vue";
import Types from "../components/Types.vue";
import NumberPad from "../components/numberPad.vue";
import vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {model} from '@/model';
const recordList:RecordItem[]=model.fetch();

@Component({components:{Tags, Note, Types, NumberPad}})
   export default  class Money extends vue{
    tags=['衣','食','住','行','玩'];
    record:RecordItem={tags:[],notes:'',type:'-',amount:0};
    recordList: RecordItem[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
    onUpdateTag(value:string[]){
        this.record.tags=value;
        console.log(value);
    }
    onUpdateNote(value:string){
        this.record.notes=value;
        console.log(value);
    }
    onUpdateAmount(value:string){
        this.record.amount=parseFloat(value);
        console.log(value);
    }
    saveRecord(){
        const record2:RecordItem=JSON.parse(JSON.stringify(this.record))
        record2.createdAt=new Date()
        this.recordList.push(record2);
        console.log(this.recordList);
        
    }
    @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
}
</script>
<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}

</style>

<style lang="scss" scoped>

</style>