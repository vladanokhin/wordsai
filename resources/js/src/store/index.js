import { createStore } from 'vuex'

import auth from './authStore'
import list from './listStore'

const store = createStore({
    modules: {
        auth,
        list,
    }
});

export default store;
