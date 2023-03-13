<template>
    <div class="col-lg-8">
        <Card card-class="mb-3">
            <template #header>
                Edit List: {{ this.selectedList.name }}
                <span class="badge badge-info ml-2"> {{ this.selectedList.countWords }}</span>
            </template>
            <template #default>
                <ScrollArea div-class="scrlb-words">
                    <ul class="todo-list-wrapper list-group list-group-flush">
                        <li class="list-group-item">
                            <ListGroupItem :input-val="this.selectedList.name"
                                           input-placeholder="list name"
                                           input-name="name"
                                           id-el="listName"
                                           p-class="font-weight-bold"
                                           p-text="Name"
                                           event-name="changeListName"
                                           @change-list-name="this.$emit('changeListName', $event)"
                            />
                        </li>

                        <li v-if="selectedList.words?.length > 0"
                            class="list-group-item  position-relative"
                            v-for="(el, index) in selectedList.words" :key="el.id"
                        >
                            <ListGroupItem :input-val="el.word"
                                           :id-el="'list-word-' + index"
                                           input-placeholder="word"
                                           input-name="words[]"
                                           p-class="font-weight-light"
                                           p-text="Word"
                                           event-name="changeListWord"
                                           @change-list-word="this.$emit('changeListWord', $event, index)"
                            />
                            <ListGroupItem :input-val="el.sentence"
                                           :id-el="'list-sentence-' + index"
                                           div-class="mb-3"
                                           input-placeholder="sentence"
                                           input-name="sentences[]"
                                           p-class="font-weight-light"
                                           p-text="Sentence"
                                           event-name="changeListSentence"
                                           @change-list-sentence="this.$emit('changeListSentence', $event, index)"
                            />
                            <div class="position-absolute item-action">
                                <button
                                    class="border-0 btn-transition btn btn-outline-danger mr-3 mb-1"
                                    @click="deleteListItem(index)"
                                >
                                    <i class="icofont-trash"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </ScrollArea>
                <div class="d-block text-right card-footer">
                    <button @click="addNewItemToList"
                            class="btn btn-primary btn-lg mr-2"
                    >
                        Add new
                    </button>
                    <button @click="updateList"
                            class="btn btn-success btn-lg"
                    >
                        Update
                    </button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import $ from "jquery";
import toastr from "toastr";
import Card from "@src/components/Card.vue";
import ScrollArea from "@src/components/ScrollArea.vue";
import ListGroupItem from "@src/components/Lists/ListGroupItem.vue";
import {perfectScrollBarMixin} from "@src/mixins/perfectScrollBarMixin.js";
import {alertMixin} from "@src/mixins/alertMixin.js";

export default {
    name: "CardWords",
    components: {
        Card,
        ScrollArea,
        ListGroupItem,
    },
    mixins: [perfectScrollBarMixin, alertMixin],
    emits: ['changeListName', 'changeListWord', 'changeListSentence', 'newItemList', 'updateListItems'],
    props: {
        selectedList: Object,
    },
    mounted() {
        this.initScrollBar('.scrlb-words.scrollbar-container')
    },
    methods: {
        deleteListItem(index) {
            const btn = $(event.currentTarget),
                parent = btn.closest('li'),
                type = parent.data('type') ?? '';

            if (type === 'new') {
                parent.remove();
            } else {
                this.confirmDeleteElement()
                    .then((result) => {
                        if (!result.isConfirmed)
                            return;
                        axios.delete(`lists/${this.selectedList.id}`)
                        parent.remove();
                    })
            }
        },
        updateList() {
            this.$emit('updateListItems');
            toastr.success('Updated');
        },
        addNewItemToList() {
            this.$emit('newItemList');
            this.scrollToEndBlock();
        },
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

