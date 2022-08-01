<template>
<div class="layout-wrapper">
<div class=content :class="`classPrefix && ${classPrefix}-content`">
    <slot />

</div>
<Nav/>
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
.layout-wrapper{
    display:flex;
    flex-direction: column;
    height: 100vh;
.content{
    overflow: hidden;
    flex-grow: 1;
}
}

</style>