<template>
    <div :class="['card', cardClass]">
        <div class="card-header">
            <slot name="header"/>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        cardClass: String,
    }
}
</script>

<style scoped>

</style>
