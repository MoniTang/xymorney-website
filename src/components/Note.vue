<template>
    <div>
    <Label  class="notes">
        {{value}}
        <span class="name">备注</span>
        <input type="text" v-model="value" placeholder="在这里输入备注" >
    </Label>
    </div>
</template>

<script lang="ts">
import vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
    export default class Note extends vue{
        value='';
        onInput(event:KeyboardEvent){
            const input=event.target as HTMLInputElement;
            this.value=input.value;
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