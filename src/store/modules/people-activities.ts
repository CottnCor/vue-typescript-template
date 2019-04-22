import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface PeopleActivities {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: PeopleActivities = {
    state1: 'PeopleActivities',
    state2: new Date().getTime()
};

const getters: GetterTree<PeopleActivities, number> = {
    state1: (state: PeopleActivities) => state.state1,
    state2: (state: PeopleActivities) => state.state2
};

const actions: ActionTree<PeopleActivities, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<PeopleActivities> = {
    update_state1(state: PeopleActivities, data: string) {
        state.state1 = data;
    },
    update_state2(state: PeopleActivities, data: number) {
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
