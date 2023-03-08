<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-note2 icon-gradient bg-sunny-morning">
                    </i>
                </div>
                <div>Lists
                    <div class="page-title-subheading">
                        Create your own word lists here.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">Lists</div>
                <div class="scroll-area-lg">
                    <div class="scrollbar-container ps--active-y ps">
                        <ul class="todo-list-wrapper list-group list-group-flush">
                            <li class="list-group-item" v-for="list in userLists">
                                <div :class="{'bg-success': list.countWords > 4, 'bg-dark': list.countWords < 5 && list.countWords > 0, 'bg-warning': list.countWords === 0 }"
                                    class="todo-indicator"
                                >
                                </div>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left widget-content-check mr-1">
                                            <div class="custom-checkbox custom-control">
                                                <input type="checkbox" :id="'list-' + list.id" class="custom-control-input">
                                                <label class="custom-control-label" :for="'list-' + list.id">&nbsp</label>
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
                                            <button class="border-0 btn-transition btn btn-outline-success">
                                                <i class="icofont-pencil-alt-5"></i>
                                            </button>
                                            <button class="border-0 btn-transition btn btn-outline-danger">
                                                <i class="icofont-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="d-block text-right card-footer">
                    <button class="btn btn-success btn-lg">Add list</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card mb-3">
                <div class="card-header">Edit list</div>
                <div class="scroll-area-lg">
                    <div class="scrollbar-container ps--active-y ps">
                    </div>
                </div>
                <div class="d-block text-right card-footer">
                    <button class="btn btn-success btn-lg">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@src/store/index.js";
import $ from 'jquery';
import PerfectScrollbar from "perfect-scrollbar";

export default {
    name: "ListView",
    data() {
        return {
            userLists: [],
        }
    },
    async mounted() {
        this.getUserList();
        this.initScrollBar();
    },
    methods: {
        async getUserList () {
            await store.dispatch('list/getUserList');
            this.userLists = store.getters['list/userList'];
        },
        initScrollBar() {
            $('.scrollbar-container').each(function () {
                const ps = new PerfectScrollbar($(this)[0], {
                    wheelSpeed: 2,
                    wheelPropagation: false,
                    minScrollbarLength: 20
                });
            });
        }
    }
}
</script>

