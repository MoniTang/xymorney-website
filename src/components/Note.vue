<template>
    <div>
    <Label  class="notes">
        <span class="name">{{fieldName}}</span>
        <input type="text" v-model="value" :placeholder=placeholder >
    </Label>
    </div>
</template>

<script lang="ts">
import vue from 'vue';
import {Component,Prop,Watch} from 'vue-property-decorator';
@Component
    export default class Note extends vue{
@Prop({required:true}) fieldName!:string;
@Prop() placeholder?:string;
        value=''; 
        @Watch('value') 
        onValueChanged(){
            this.$emit('update:value',this.value);
        }
    }
</script>

<style lang="scss" scoped>
.notes{
    background: #f5f5f5;
    display: flex;
    font-size: 14px;
    padding-left:16px;
    align-items: center;
    .name{
        padding-right:16px;
    }
    input{
        height: 64px;
        flex-grow: 1;
        border: none;
        background: transparent;
        padding-right:16px;
    }
}
</style>