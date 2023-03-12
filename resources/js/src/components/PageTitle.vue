<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="[icon, 'icon-gradient', 'bg-sunny-morning']"></i>
                </div>
                <div>
                    {{ title }}
                    <div class="page-title-subheading">
                        {{ subTitle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageTitle",
    props: {
        icon: String,
        title: String,
        subTitle: String,
    }
}
</script>

<style scoped>

</style>
