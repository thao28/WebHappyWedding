import axios from 'axios';

interface State {
    data: any[] | null;
}

const state:State = {
  data: null,
}

const actions = {
    getAllWishItems: ({ commit }) => {
      axios
        .get('https://sheet.best/api/sheets/c0acd53c-4d9c-4477-a4b4-0f8e0047bfd7')
        .then((res) => commit('setData', res.data))
        .catch((e) => console.log(e));
    },
  
    postWishItem: ({ commit }, data:any) => {
      axios
        .post('https://sheet.best/api/sheets/c0acd53c-4d9c-4477-a4b4-0f8e0047bfd7', data)
        .then((res) => commit('addWishItem', data))
        .catch((e) => console.log(e));
    },
}    

const getters = {
    wishList: (state:State) => state.data,
};

const mutations = {
    setData: (state, data:any) => {
        state.data = data;
      },
      
      addWishItem: (state, data:any) => {
        state.data.push(data);
      },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}