import { ASSIST_ROUTER } from '@/config';

/**
 * meta XXXXX
 * @param {boolean} icon XXicon
 * @param {boolean} keepAlive XXXXXX
 * @param {string} title XXXX
 */
const assistRouter = [
    {
        path: '/',
        redirect: '/' + ASSIST_ROUTER.portal.name
    },
    {
        path: '/' + ASSIST_ROUTER.login.name,
        name: ASSIST_ROUTER.login.name,
        component: () => import('@/views/verify-pass/VerifyPass.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ASSIST_ROUTER.login.title
        }
    },
    {
        path: '/' + ASSIST_ROUTER.portal.name,
        name: ASSIST_ROUTER.portal.name,
        component: () => import('@/views/home-page/HomePage.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ASSIST_ROUTER.portal.title
        }
    },
    {
        path: '/' + ASSIST_ROUTER.people.name,
        name: ASSIST_ROUTER.people.name,
        component: () => import('@/views/people-profile/PeopleProfile.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ASSIST_ROUTER.people.title
        }
    },
    {
        path: '/' + ASSIST_ROUTER.setting.name,
        name: ASSIST_ROUTER.setting.name,
        component: () => import('@/views/people-profile/PeopleProfile.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ASSIST_ROUTER.setting.title
        }
    },
    {
        path: '/' + ASSIST_ROUTER.help.name,
        name: ASSIST_ROUTER.help.name,
        component: () => import('@/views/people-profile/PeopleProfile.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ASSIST_ROUTER.help.title
        }
    },
    {
        path: '/' + ASSIST_ROUTER.search.name,
        name: ASSIST_ROUTER.search.name,
        component: () => import('@/views/refer-centre/ReferCentre.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ASSIST_ROUTER.search.title
        }
    }
];

export default assistRouter;
