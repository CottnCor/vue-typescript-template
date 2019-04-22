import Vue from 'vue';
import Router from 'vue-router';
import rootRouter from './modules/root-router';
import assistRouter from './modules/assist-router';
import footerRouter from './modules/footer-router';
import userRouter from './modules/user-router';
import { getToken } from '@/utils/common';
import { COOKIE_KEYS, NEED_LOGGED_PAGES, ASSIST_ROUTER } from '@/config';

Vue.use(Router);

const router = new Router({
    routes: [
        ...userRouter,
        ...assistRouter,
        ...footerRouter,
        ...rootRouter,
        {
            path: '/' + ASSIST_ROUTER.error.name,
            name: ASSIST_ROUTER.error.name,
            component: () => import('@/views/error-tips/ErrorTips.vue'),
            meta: {
                icon: '',
                keepAlive: true,
                navigable: false,
                title: ASSIST_ROUTER.error.title
            }
        },
        {
            path: '*',
            redirect: '/' + ASSIST_ROUTER.error.name
        }
    ],
    mode: 'history'
});

// XXXX
router.beforeEach((to: any, from: any, next: any) => {
    const token = getToken(COOKIE_KEYS.logged_in);
    if (!token && NEED_LOGGED_PAGES.includes(to.name)) {
        next({
            name: ASSIST_ROUTER.login.name
        });
    } else if (!token && !NEED_LOGGED_PAGES.includes(to.name)) {
        next();
    } else {
        if (token) {
            next();
        } else {
            next({
                name: ASSIST_ROUTER.login.name
            });
        }
    }
});

router.afterEach((to: any) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});

export default router;
