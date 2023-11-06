import { createStore } from 'vuex';
// import actions from './actions';
// import states from './states'
// import getters from './getters';
// import mutations from './mutations';
import wishList from './modules/wishList'

// const store = createStore({ actions, states, getters, mutations });
const store = createStore({ 
    modules: {
        wishList
    },
 });

export default store;
