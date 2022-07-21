<template>
      <ul class="types">
        <li :class="value==='-'&& 'selected'" 
        @click="selectType('-')">支出</li>
        <li :class="value==='+'&& 'selected'" 
        @click="selectType('+')">收入</li>
    </ul>
</template>
<style lang="scss" scoped>
      .types{ 
        background: #c4c4c4;
        box-shadow:0 1px 4px #eeeeee;
        font-size:24px;
        display: flex;
        text-align: center;
        >li{
        height: 64px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #333;
        }
        }
    }
</style>
<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue{
  @Prop() readonly value!:string;
   selectType(value:string){ // type 只能是 '-' 和 '+' 中的一个
        if (value !== "-" && value !== "+") {
          throw  new Error("value is unknown");
        }
        this.$emit('update:value',value)
    }
}
</script>