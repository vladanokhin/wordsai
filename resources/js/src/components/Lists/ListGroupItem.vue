<template>
    <div class="row" :class="divClass">
        <label :for="idEl" class="col-sm-2 col-form-label">
            <p :class="pClass">{{ pText }}:</p>
        </label>
        <div class="col-sm-10">
            <input :value="inputVal"
                   @input="$emit(eventName, $event)"
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
        divClass: String,
        idEl: String,
        pClass: String,
        pText: String,
        inputVal: String,
        eventName: String,
        inputPlaceholder: String,
        inputName: String,
    },
}
</script>

<style scoped>

</style>
