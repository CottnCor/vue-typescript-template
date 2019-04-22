import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface PeopleAsks {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: PeopleAsks = {
    state1: 'PeopleAsks',
    state2: new Date().getTime()
};

const getters: GetterTree<PeopleAsks, number> = {
    state1: (state: PeopleAsks) => state.state1,
    state2: (state: PeopleAsks) => state.state2
};

const actions: ActionTree<PeopleAsks, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<PeopleAsks> = {
    update_state1(state: PeopleAsks, data: string) {
        state.state1 = data;
    },
    update_state2(state: PeopleAsks, data: number) {
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
