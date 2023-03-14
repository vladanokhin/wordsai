<template>
    <div class="col-lg-4">
        <Card card-class="mb-3">
            <template #header> Lists </template>
            <ScrollArea div-class="scrlb-lists">
                <ul class="todo-list-wrapper list-group list-group-flush">
                    <li class="list-group-item"
                        v-for="(list, index) in userLists"
                    >
                        <div :class="{'bg-success': list.countWords > 4, 'bg-dark': list.countWords < 5 && list.countWords > 0, 'bg-warning': list.countWords === 0 }"
                             class="todo-indicator"
                        >
                        </div>
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left widget-content-check mr-1">
                                    <div class="custom-checkbox custom-control">
                                        <input type="checkbox" :id="'list-' + index" class="custom-control-input">
                                        <label class="custom-control-label" :for="'list-' + index">&nbsp</label>
                                    </div>
                                </div>
                                <div class="widget-content-left">
                                    <div class="widget-heading">
                                        {{ list.name }}
                                    </div>
                                    <div class="widget-subheading">
                                        Words: {{ list.countWords }}
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button @click="clickEditList(list.id)"
                                            class="border-0 btn-transition btn btn-outline-success"
                                    >
                                        <i class="icofont-pencil-alt-5"></i>
                                    </button>
                                    <button @click="deleteList(index)"
                                            class="border-0 btn-transition btn btn-outline-danger"
                                    >
                                        <i class="icofont-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </ScrollArea>
            <div class="d-block text-right card-footer">
                <button class="btn btn-success btn-lg"
                        @click="addNewList"
                >
                    Add list
                </button>
            </div>
        </Card>
    </div>
</template>

<script>
import $ from 'jquery';
import Card from "@src/components/Card.vue";
import ScrollArea from "@src/components/ScrollArea.vue";
import {perfectScrollBarMixin} from "@src/mixins/perfectScrollBarMixin.js";
import {alertMixin} from "@src/mixins/alertMixin.js";

export default {
    name: "Lists",
    mixins: [perfectScrollBarMixin, alertMixin],
    props: {
        userLists: Object,
    },
    components: {
        Card,
        ScrollArea,
    },
    mounted() {
        this.initScrollBar('.scrlb-lists.scrollbar-container')
    },
    methods: {
        addNewList(){
            this.$emit('newList')
            this.scrollToEndBlock();
        },
        deleteList(index) {
            this.confirmDeleteElement()
                .then(result => {
                    if(result.isConfirmed) {
                        this.$emit('deleteList', index);
                    }
                })
        },
        clickEditList(listId) {
            this.$emit('clickEditList', listId);
        }
    }
}
</script>

<style scoped>

</style>
