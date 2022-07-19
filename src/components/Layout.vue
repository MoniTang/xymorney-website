<template>
<div class="app" :class="classPrefix && `${classPrefix}-app`">
</div>

</template>
<script lang="ts">
import Nav from "./Nav.vue";
    export default {
    props: ["classPrefix"],
    name: "Layout",
    components: { Nav }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.app{
    display: flex;
    flex-direction: column;
    height:100vh ;
    >.content{
    overflow: auto;
    flex-grow: 1;
}
}
</style>