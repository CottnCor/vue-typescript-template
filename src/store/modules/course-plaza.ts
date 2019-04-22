import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface CoursePlaza {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: CoursePlaza = {
    state1: 'CoursePlaza',
    state2: new Date().getTime()
};

const getters: GetterTree<CoursePlaza, number> = {
    state1: (state: CoursePlaza) => state.state1,
    state2: (state: CoursePlaza) => state.state2
};

const actions: ActionTree<CoursePlaza, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<CoursePlaza> = {
    update_state1(state: CoursePlaza, data: string) {
        state.state1 = data;
    },
    update_state2(state: CoursePlaza, data: number) {
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
