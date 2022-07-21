<template>
<layout class-prefix="layout">
<NumberPad @update:value="onUpdateAmount"/>
<Types  :value.sync="record.type"/>
<Note @update:value="onUpdateNote"/>
<Tags :dataSource.sync="tags" @update:value="onUpdateTag"/>
{{record}}
</layout>
</template>
<script lang="ts">
import Tags from "@/components/Tags.vue";
import Note from "@/components/Note.vue";
import Types from "../components/Types.vue";
import NumberPad from "../components/numberPad.vue";
import vue from 'vue';
import {Component} from 'vue-property-decorator';
type Record={
    tags:string[],
    notes:string,
    type:string,
    amount:number,
}
@Component({components:{Tags, Note, Types, NumberPad}})
   export default  class Money extends vue{
    tags=['衣','食','住','行','玩'];
    record:Record={tags:[],notes:'',type:'-',amount:0};
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