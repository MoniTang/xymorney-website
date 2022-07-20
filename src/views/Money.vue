<template>
<layout class-prefix="layout">
<NumberPad/>
<Types/>
<Note/>
<Tags/>
</layout>
</template>

<script lang="ts">
import Tags from "@/components/Tags.vue";
import Note from "@/components/Note.vue";
import Types from "../components/Types.vue";
import NumberPad from "../components/numberPad.vue";
   export default {
    name: "Money",
    components: { Tags, Note, Types, NumberPad }
}
</script>
<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}

</style>

<style lang="scss" scoped>

</style>