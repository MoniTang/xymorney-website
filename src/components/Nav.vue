<template>
    <nav>

  <router-link to="/money" class="item" active-class="selected">
    <Icon name="money"/>
    记账
    </router-link>
     <router-link  to="/label" class="item" active-class="selected">
<Icon name="label"/>
    账单
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
        <Icon name="statistics"/>
        统计
    </router-link>
    </nav>
</template>

<script  lang="ts">
    export default {
    name: "Nav",
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
nav{
    display: flex;
    box-shadow:0 0 4px rgb(0,0,0,0.25);
    background: $background-nav;
    flex-direction: row;
    font-size: 12px;
    >.item{
        padding: 2px 0;
        width: 33.3333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &.selected{
            color: red;
        }
        >.icon{
        width: 28px;
        height:28px;
    }
} 
}
</style>