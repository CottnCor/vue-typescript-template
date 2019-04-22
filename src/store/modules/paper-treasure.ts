import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface PaperTreasure {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: PaperTreasure = {
    state1: 'PaperTreasure',
    state2: new Date().getTime()
};

const getters: GetterTree<PaperTreasure, number> = {
    state1: (state: PaperTreasure) => state.state1,
    state2: (state: PaperTreasure) => state.state2
};

const actions: ActionTree<PaperTreasure, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<PaperTreasure> = {
    update_state1(state: PaperTreasure, data: string) {
        state.state1 = data;
    },
    update_state2(state: PaperTreasure, data: number) {
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
