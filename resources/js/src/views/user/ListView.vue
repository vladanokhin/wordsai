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
            newWords: {},
            lastIdElement: null,
        }
    },
    async mounted() {
        await this.getUserList();
        this.clickEditList(this.userLists[0].id)
    },
    methods: {
        async getUserList () {
            await store.dispatch('list/getUserList');
            this.userLists = store.getters['list/userLists'];
        },
        clickEditList(listId) {
            this.selectedList = store.state.list.userLists.find(el => el.id === listId);
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
        newItemList() {
            this.selectedList.words.push({
                list_id: this.selectedList.id,
                word: '',
                sentence: '',
            });
            this.selectedList.countWords++;
        },
        deleteListItem(index) {
          this.selectedList.words.splice(index, 1)
        },
        async updateListItems() {
            await store.dispatch('list/updateList', this.selectedList)
                .then(response => {
                    this.selectedList = store.getters['list/userListById'](this.selectedList.id);
                    toastr.success('Updated list');
                })
        }
    }
}
</script>
