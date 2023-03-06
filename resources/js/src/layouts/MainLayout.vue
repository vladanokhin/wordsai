<template>
    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        <HeaderLayout/>
        <div class="app-main">
            <SidebarLayout/>
            <div class="app-main__outer">
                <router-view/>
<!--                <FooterLayout/>-->
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarLayout from "@src/layouts/SidebarLayout.vue";
    import HeaderLayout from "@src/layouts/HeaderLayout.vue";
    import FooterLayout from "@src/layouts/FooterLayout.vue";

    export default {
        components: {
            SidebarLayout,
            HeaderLayout,
            FooterLayout,
        }
    }
</script>
