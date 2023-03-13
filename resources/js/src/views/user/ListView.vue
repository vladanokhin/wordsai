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
            userLists: [],
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
            this.userLists = store.getters['list/userList']
                                    .sort((a,b) => b.countWords - a.countWords);
        },
        clickEditList(listId) {
            this.selectedList = store.state.list.userList.find(el => el.id === listId);
            if(this.selectedList.words.length === 0)
                this.newWords = {
                    'list_id': this.selectedList.id,
                    'word': '',
                    'sentence': '',
                };
            else
                this.newWords = {};
        },
        newList() {
            this.userLists.push({
                name: 'New list',
                user_id: this.selectedList.user_id,
                words: {},
                countWords: 0,
                type: 'new',
            });
        },
        async deleteList(index) {
            const list = this.userLists[index],
                  isNewList = 'type' in list && list.type === 'new';

            if(!list) {
                toastr.warning('Not found the list. Please reload a page!')
                return;
            }

            if(!isNewList)
                await store.dispatch('list/deleteListById', list.id);

            if(store.getters['list/isDeletedList'] || isNewList) {
                this.userLists.splice(index, 1);
            }
        },
        newItemList() {
            // TODO BUG with updating created elements
            this.selectedList.words.push({
                id: 0,  // set id 0, for correct creating in db
                list_id: this.selectedList.id,
                word: '',
                sentence: '',
            });
            this.selectedList.countWords++;
        },
        async updateListItems() {
            await store.dispatch('list/updateList', this.selectedList)

        }
    }
}
</script>
