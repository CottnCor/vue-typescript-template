import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

import _commonStore from './modules/_common-store';
import errorTipsStore from './modules/error-tips';
import verifyPassStore from './modules/verify-pass';
import homePageStore from './modules/home-page';
import peopleProfileStore from './modules/people-profile';
import askMarketStore from './modules/ask-market';
import coursePlazaStore from './modules/course-plaza';
import paperTreasureStore from './modules/paper-treasure';
import explorePlaceStore from './modules/explore-place';
import referCentreStore from './modules/refer-centre';

export default new Vuex.Store({
    modules: {
        Common: _commonStore,
        ErrorTips: errorTipsStore,
        VerifyPass: verifyPassStore,
        HomePage: homePageStore,
        PeopleProfile: peopleProfileStore,
        AskMarket: askMarketStore,
        CoursePlaza: coursePlazaStore,
        PaperTreasure: paperTreasureStore,
        ExplorePlace: explorePlaceStore,
        ReferCentre: referCentreStore
    }
});
