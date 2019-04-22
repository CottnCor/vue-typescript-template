import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface IndexPage {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: IndexPage = {
    state1: 'IndexPage',
    state2: new Date().getTime()
};

const getters: GetterTree<IndexPage, number> = {
    state1: (state: IndexPage) => state.state1,
    state2: (state: IndexPage) => state.state2
};

const actions: ActionTree<IndexPage, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<IndexPage> = {
    update_state1(state: IndexPage, data: string) {
        state.state1 = data;
    },
    update_state2(state: IndexPage, data: number) {
        state.state2 = data;
    }
};

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced
};
