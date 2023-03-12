<template>
    <div class="scroll-area-lg">
        <div :class="divClass"
             class="scrollbar-container ps--active-y ps">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ScrollArea",
    props: {
        divClass: String,
    },

}
</script>

<style scoped>

</style>
