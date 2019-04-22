import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface ExplorePlace {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: ExplorePlace = {
    state1: 'ExplorePlace',
    state2: new Date().getTime()
};

const getters: GetterTree<ExplorePlace, number> = {
    state1: (state: ExplorePlace) => state.state1,
    state2: (state: ExplorePlace) => state.state2
};

const actions: ActionTree<ExplorePlace, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<ExplorePlace> = {
    update_state1(state: ExplorePlace, data: string) {
        state.state1 = data;
    },
    update_state2(state: ExplorePlace, data: number) {
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
