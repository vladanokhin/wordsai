<template>
    <div class="d-flex">
        <h1 v-if="count >= 3">Dashboard </h1>
        <button :class="['c-' + count, 'btn', 'btn-outline-info', 'ms-3']"
                @click="toTitleDate()"
                :[someAttr]="count"
        >
            {{ count}}
        </button>
    </div>
</template>

<script>

    export default {
        name: 'Dashboard',
        data()  {
            return {
                count: 0,
                someAttr: 'data-all'
            }
        },
        methods: {
            toTitleDate() {
                this.count ++;
                console.log('clicked')
            }
        }
    };
</script>
