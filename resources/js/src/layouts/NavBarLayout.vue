<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Admin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :class="['nav-item', 'nav-link']" :to="{'name': 'admin.dashboard'}">Dashboard</router-link>
                    <router-link :class="['nav-item', 'nav-link']" :to="{'name': 'admin.list'}">List</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBarLayout"
}
</script>

<style scoped>

</style>
