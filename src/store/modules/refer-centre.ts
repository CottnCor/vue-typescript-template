import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface ReferCentre {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: ReferCentre = {
    state1: 'ReferCentre',
    state2: new Date().getTime()
};

const getters: GetterTree<ReferCentre, number> = {
    state1: (state: ReferCentre) => state.state1,
    state2: (state: ReferCentre) => state.state2
};

const actions: ActionTree<ReferCentre, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<ReferCentre> = {
    update_state1(state: ReferCentre, data: string) {
        state.state1 = data;
    },
    update_state2(state: ReferCentre, data: number) {
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
