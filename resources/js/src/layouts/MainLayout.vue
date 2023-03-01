<template>
    <div class="app-container app-theme-white body-tabs-shadow">
        <router-view></router-view>
    </div>
</template>

<script>
import HeadLayout from "@src/layouts/HeadLayout.vue"

export default {
    components: {
        HeadLayout
    }
}
</script>
