<template>
<Layout class-prefix="label">
    <div class="navBar">
        <span class="title">标签管理</span>
    </div>
    <div class="createTag-wrapper">
    <Button class="createTag" 
    @click="createTag">
    新建标签
    </Button>
</div>
<div class="tags" >
    <router-link class="tag"
    v-for="tag in tags" :key="tag.id"
    :to="`/label/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
        </router-link>
</div>

</Layout>
</template>
<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import { mixins } from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
@Component({components:{Button}})
    export default class Label extends mixins(TagHelper){
        get tags(){
            return this.$store.state.tagList;
        }
        beforeCreate(){
            this.$store.commit('fetchTags');
            }

};
</script>
<style lang="scss">
.label-content{
    display: flex;
    flex-direction: column;
}
</style>
<style lang="scss" scoped>
.navBar{
    text-align: center;
    padding: 12px 16px;
    background:rgb(248,210,197);
    display: flex;
    align-items: center;
    justify-content: center;
}
.tags{
    margin-top: 8px;
    font-size: 16px;
    overflow: auto;
    flex-grow: 1;
    >.tag{
    padding-left: 16px;
    background: white;
        min-height: 44px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        svg{
            color: #333;
            margin-right: 16px;
        }
    }
}
.createTag{
    background: green;
    color: white; 
    border: none;
    padding: 0 16px;
    &-wrapper{
    text-align: center;
    margin-top: 8px;
    }
}

</style>