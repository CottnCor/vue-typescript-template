import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface PeopleProfile {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: PeopleProfile = {
    state1: 'PeopleProfile',
    state2: new Date().getTime()
};

const getters: GetterTree<PeopleProfile, number> = {
    state1: (state: PeopleProfile) => state.state1,
    state2: (state: PeopleProfile) => state.state2
};

const actions: ActionTree<PeopleProfile, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<PeopleProfile> = {
    update_state1(state: PeopleProfile, data: string) {
        state.state1 = data;
    },
    update_state2(state: PeopleProfile, data: number) {
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
