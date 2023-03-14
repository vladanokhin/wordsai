<template>
    <PageTitle
        icon="pe-7s-note2"
        title="Lists"
        sub-title="Create your own word lists here."
    />
    <div class="row">
        <CardLists :user-lists="userLists"
                   @new-list="newList"
                   @delete-list="deleteList"
                   @click-edit-list="setSelectedList"
        />
        <CardWords :selected-list="selectedList"
                   @new-item-list="newItemList"
                   @delete-list-item="deleteListItem"
                   @update-list-items="updateListItems"
                   @change-list-name="(event) => this.selectedList.name = event.target.value"
                   @change-list-word="(event, index) => this.selectedList.words[index].word = event.target.value"
                   @change-list-sentence="(event, index) => this.selectedList.words[index].sentence = event.target.value"

        />
    </div>
</template>

<script>
import toastr from "toastr";
import store from "@src/store/";
import PageTitle from "@src/components/PageTitle.vue";
import CardLists from "@src/components/Lists/CardLists.vue";
import CardWords from "@src/components/Lists/CardWords.vue";

export default {
    name: "ListView",
    components: {
        PageTitle,
        CardWords,
        CardLists,
    },
    data() {
        return {
            userLists: {},
            selectedList: {},
        }
    },
    async mounted() {
        await this.getUserList();
        this.setSelectedList(this.userLists[0].id)
    },
    methods: {
        async getUserList () {
            await store.dispatch('list/getUserList');
            this.userLists = store.getters['list/userLists'];
        },
        setSelectedList(listId) {
            this.selectedList = store.getters['list/userListById'](listId);
        },
        async newList() {
            const list = {
                name: 'New list',
                user_id: this.selectedList.user_id,
            };
            await store.dispatch('list/createNewList', list)
                .then(response => {
                    this.userLists = store.getters['list/userLists'];
                    const lastIndex = Object.keys(this.userLists).pop();
                    this.selectedList = this.userLists[lastIndex];
                });

        },
         async deleteList(index) {
            const list = this.userLists[index];

            if(!list) {
                toastr.warning('Not found the list. Please reload a page!')
                return;
            }

            await store.dispatch('list/deleteListById', list.id)
                .then(response => {
                    toastr.success(`Deleted list ${list.name}`)
                    this.userLists = store.getters['list/userLists'];
                });
        },
        async updateListItems() {
            const list = this.selectedList;
            await store.dispatch('list/updateList', list)
                .then(response => {
                    this.setSelectedList(list.id)
                    toastr.success('Updated list');
                });
        },
        newItemList() {
            this.selectedList.words.push({
                list_id: this.selectedList.id,
                word: '',
                sentence: '',
            });
            this.selectedList.countWords++;
        },
        async deleteListItem(isExistsItem, index, listItemId) {
            const list = this.selectedList;

            if(isExistsItem) {
                await store.dispatch('list/deleteListItem', listItemId)
                    .then(response => {
                        this.setSelectedList(list.id);
                        toastr.success('Deleted list item');
                    })
            } else {
                this.selectedList.words.splice(index, 1);
                toastr.success('Deleted list item');
            }
        },
    }
}
</script>
