<template>
    <div class="col-lg-8">
        <Card card-class="mb-3">
            <template #header>
                Edit List: {{ this.selectedList.name }}
                <span class="badge badge-info ml-2"> {{ this.selectedList.countWords }}</span>
            </template>
            <template #default>
                <ScrollArea div-class="scrlb-words">
<!--                    <ul class="todo-list-wrapper list-group list-group-flush">-->
<!--                        <li class="list-group-item">-->
<!--                            <div class="row">-->
<!--                                <label for="listName" class="col-sm-2 col-form-label">-->
<!--                                    <p class="font-weight-bold">List name:</p>-->
<!--                                </label>-->
<!--                                <div class="col-sm-10">-->
<!--                                    <input v-model="selectedList.name"-->
<!--                                           id="listName"-->
<!--                                           placeholder="List name"-->
<!--                                           name="name"-->
<!--                                           class="form-control"-->
<!--                                    >-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </li>-->

<!--                        <li v-if="selectedList.words?.length > 0"-->
<!--                            class="list-group-item  position-relative"-->
<!--                            v-for="el in selectedList.words" :key="el.id"-->
<!--                        >-->
<!--                            <div class="row" :class="divClass">-->
<!--                                <label :for="idEl" class="col-sm-2 col-form-label">-->
<!--                                    <p :class="pClass">{{ pText }}:</p>-->
<!--                                </label>-->
<!--                                <div class="col-sm-10">-->
<!--                                    <input :value="value"-->
<!--                                           @input="$emit('input', $event.target.value)"-->
<!--                                           :id="idEl"-->
<!--                                           :placeholder="inputPlaceholder"-->
<!--                                           :name="inputName"-->
<!--                                           class="form-control"-->
<!--                                    >-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="row" :class="divClass">-->
<!--                                <label :for="idEl" class="col-sm-2 col-form-label">-->
<!--                                    <p :class="pClass">{{ pText }}:</p>-->
<!--                                </label>-->
<!--                                <div class="col-sm-10">-->
<!--                                    <input :value="value"-->
<!--                                           @input="$emit('input', $event.target.value)"-->
<!--                                           :id="idEl"-->
<!--                                           :placeholder="inputPlaceholder"-->
<!--                                           :name="inputName"-->
<!--                                           class="form-control"-->
<!--                                    >-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="position-absolute item-action">-->
<!--                                <button-->
<!--                                    class="border-0 btn-transition btn btn-outline-danger mr-3 mb-1"-->
<!--                                    @click="deleteListItem"-->
<!--                                >-->
<!--                                    <i class="icofont-trash"></i>-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
                </ScrollArea>
                <div class="d-block text-right card-footer">
                    <button @click="addNew"
                            class="btn btn-primary btn-lg mr-2"
                    >
                        Add new
                    </button>
                    <button @click="saveList"
                            class="btn btn-success btn-lg"
                    >
                        Save
                    </button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from "@src/components/Card.vue";
import ScrollArea from "@src/components/ScrollArea.vue";
import {perfectScrollBarMixin} from "@src/mixins/perfectScrollBarMixin.js";
import $ from "jquery";
import toastr from "toastr";

export default {
    name: "CardWords",
    components: {
        Card,
        ScrollArea,
    },
    mixins: [perfectScrollBarMixin],
    props: {
        selectedList: Object,
    },
    mounted() {
        this.initScrollBar('.scrlb-words.scrollbar-container')
    },
    methods: {
        deleteListItem(event) {
            const btn = $(event.currentTarget),
                parent = btn.closest('li'),
                type = parent.data('type') ?? '';

            if (type === 'new') {
                parent.remove();
            } else {
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        parent.remove();
                        // Swal.fire(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        // )
                    }
                })
            }
        },
        saveList() {
            axios.post('lists', this.selectedList)
                .then(responce => {
                    toastr.success('Saved')
                })
                .catch(response => {
                    toastr.error('Error')
                })
        }
    }
}
</script>

<style lang="scss">
ul.todo-list-wrapper {
    .list-group-item {
        .item-action {
            bottom: 0px;
            right: 1px;
            visibility: hidden;
            opacity: 0;
            transition: opacity .2s;
        }

        &:hover {
            .item-action {
                visibility: visible;
                opacity: 1;
            }
        }
    }

}
</style>

<!--let idx = this.categories.data.findIndex((category) => {&ndash;&gt;-->
<!--                                return category.id === response.data.data.id-->
<!--                            })-->
<!--                            this.$set(this.categories.data, idx, response.data.data)-->

