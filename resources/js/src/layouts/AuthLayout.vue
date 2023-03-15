<template>
    <div class="app-container app-theme-white body-tabs-shadow">
        <div class="app-container">
            <div class="h-100">
                <div class="h-100 no-gutters row">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style scoped>

</style>
