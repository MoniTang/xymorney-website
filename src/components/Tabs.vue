<template>
      <ul class="tabs">
     <li v-for="item in dataSource" :key="item.value"
     class="tabs-item" :class="liClass(item)"
     @click="select(item)">{{item.text}}</li>
    </ul>
</template>
<style lang="scss" scoped>
      .tabs{ 
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
type DataSourceItem={ text:string,value:string}
@Component
export default class Types extends Vue{
    @Prop({required:true,type:Array}) dataSource!:DataSourceItem[];
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;


    liClass(item: DataSourceItem) {
    return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: item.value === this.value
      };
    }

     select(item:DataSourceItem){
    this.$emit('update:value',item.value)
  }
}
 
</script>