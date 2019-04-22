import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface PeopleAnswers {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: PeopleAnswers = {
    state1: 'PeopleAnswers',
    state2: new Date().getTime()
};

const getters: GetterTree<PeopleAnswers, number> = {
    state1: (state: PeopleAnswers) => state.state1,
    state2: (state: PeopleAnswers) => state.state2
};

const actions: ActionTree<PeopleAnswers, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<PeopleAnswers> = {
    update_state1(state: PeopleAnswers, data: string) {
        state.state1 = data;
    },
    update_state2(state: PeopleAnswers, data: number) {
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
