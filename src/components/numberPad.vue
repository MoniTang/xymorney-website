<template>   
<div class="numberPad">
    <div  class="output">{{output||'0'}}</div>
    <div class="buttons" >
    <button @click="inputContent">1</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">3</button>
    <button @click="remove">删除</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">6</button>
    <button @click="clear">清空</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">9</button>
    <button class="ok" @click="ok">确认</button>
    <button @click="inputContent" class="zero">0</button>  
    <button @click="inputContent">.</button>
    </div>
    </div>
</template>
<script lang="ts">
import vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
    export default class NumberPad extends vue{
        @Prop(Number) readonly value!:number
        output:string='';
        inputContent(event:MouseEvent ){
            const buttons=(event.target as HTMLButtonElement);
            let input=buttons.textContent as string;
            if(this.output.length===16){return}
            if(this.output.length===0 && input==='.'){this.output='0'+input}
            if(this.output==='0'){
                if('0123456789'.indexOf(input)>=0){this.output=input
                }else{this.output+=input;}
                return;
            }
            if(this.output.indexOf('.')>=0 && input==='.'){return;}
                this.output+=input; 
        };
        remove(){
            this.output=this.output.slice(0,-1)
        };
        clear(){
            this.output='0'
         }
        ok(){   
            const number=parseFloat(this.output);
            this.$emit('update:value',number);
            this.$emit('submit',number);
            this.output='0'
            
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.numberPad{
    .output{
        @extend %clearFix;    
        @extend %insetShadow;
        width: 100%;
        text-align: right;
        font-size: 36px;
        font-family: Consolas,monospace;
        padding: 9px 16px;
    }
    .buttons{
        @extend %clearFix;    
        >button{
            width: 25%;
            height: 52px;
            float:left;
            background: transparent;
            border:none;
            box-shadow: inset 0 0 0.15px;
            &.ok{
                height: 52px*2; 
                float: right;
                background:rgb(254,150,3);
                color: #fff;
            }
            &.zero{
                width: 25%*2;
            }
            $bg:#FBFBFB;
             &:nth-child(1){
                background: darken($bg,1%);
             }
            &:nth-child(2),&:nth-child(5){
                background: darken($bg,2%);
            }
            &:nth-child(3),&:nth-child(6),&:nth-child(9){
                background: darken($bg,2*2%);
            }
            &:nth-child(4),&:nth-child(7),&:nth-child(10),
            &:nth-child(13){
                background: darken($bg,3*2%);
            }
            &:nth-child(8),&:nth-child(11){
                background: darken($bg,4*2%);
            }
            &:nth-child(14){
                background: darken($bg,5*2%);
            }
        }
    }

}

</style>