import { ActionTree, GetterTree, MutationTree } from 'vuex';

interface AskMarket {
    state1: string;
    state2: number;
}

const namespaced = true;

const state: AskMarket = {
    state1: 'AskMarket',
    state2: new Date().getTime()
};

const getters: GetterTree<AskMarket, number> = {
    state1: (state: AskMarket) => state.state1,
    state2: (state: AskMarket) => state.state2
};

const actions: ActionTree<AskMarket, any> = {
    set_state1({ commit }, data: string) {
        commit('update_state1', data);
    },
    set_state2({ commit }, data: number) {
        commit('update_state2', data);
    }
};

const mutations: MutationTree<AskMarket> = {
    update_state1(state: AskMarket, data: string) {
        state.state1 = data;
    },
    update_state2(state: AskMarket, data: number) {
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
