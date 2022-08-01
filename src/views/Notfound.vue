<template>
    <div>
        <div class="content">
             <H1>404</H1>
        <p>当前页面不存在,请检查网址是否正确</p>
        <router-link to="/">点击返回首页</router-link>

        </div>
       
    </div>
</template>

<script lang="ts">
    export default {
        name:'NotFound'
    }
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

</style>



  