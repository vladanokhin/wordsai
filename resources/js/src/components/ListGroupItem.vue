<template>
    <div class="row" :class="divClass">
        <label :for="idEl" class="col-sm-2 col-form-label">
            <p :class="pClass">{{ pText }}:</p>
        </label>
        <div class="col-sm-10">
            <input :value="value"
                   @input="$emit('input', $event.target.value)"
                   :id="idEl"
                   :placeholder="inputPlaceholder"
                   :name="inputName"
                   class="form-control"
            >
        </div>
    </div>

</template>

<script>
export default {
    name: "ListGroupItem",
    props: {
        value: {
            type: String,
        },
        divClass: Object,
        idEl: String,
        pClass: String,
        pText: String,
        inputVal: String,
        inputPlaceholder: String,
        inputName: String,
    },
    mounted() {
        this.$emit('renderedItem');
    }
}
</script>

<style scoped>

</style>
