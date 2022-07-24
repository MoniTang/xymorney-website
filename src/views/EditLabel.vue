<template>
 <Layout>
<div class="navBar">
    <Icon class="leftIcon" name="left"/>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
</div>
<div class="form-wrapper">
    <FormItem fieldName="标签名" placeholder="在这里输入标签名"/>
</div>
<div class="button-wrapper">
    <Button>删除标签</Button>
</div>
</Layout>
</template>
<script lang="ts">
import tagListModel from '@/models/tagListModel'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import FormItem from '../components/FormItem.vue'
import Button from '../components/Button.vue'
@Component({components:{FormItem,Button}})
    export default class EditLabel extends Vue{
        created(){
            const id=this.$route.params.id;
            console.log(id);     
            tagListModel.fetch();
            const tags=tagListModel.data;
            console.log(tags)
            const tag=tags.filter(t=>t.id===id)[0]
            console.log(tag);
            if(tag){
            console.log(tag);
            }else{
            this.$router.replace('/404')
            }
         }
    }
</script>

<style lang="scss" scoped> 
.navBar{
    text-align: center;
    padding: 12px 16px;
    background:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form-wrapper{
    background: white;
    margin-top: 8px;
}
.button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
    >Button{
    background: red;
    }
}

</style>