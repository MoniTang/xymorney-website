<template>
 <Layout>
<div>
    <Icon name="left"/>
    <span>编辑标签</span>
</div>
<Note @update:value="onUpdateNote" 
fieldName="标签名" placeholder="在这里输入标签名"/>
</Layout>
</template>
<script lang="ts">
import tagListModel from '@/models/tagListModel'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Note from '../components/Note.vue'
@Component({components:{Note}})
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
         onUpdateNote(){

         } 
    }
</script>

<style lang="scss" scoped>

</style>