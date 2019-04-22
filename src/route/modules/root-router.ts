import { ROOT_ROUTER } from '@/config';

/**
 * meta XXXXX
 * @param {boolean} icon XXicon
 * @param {boolean} keepAlive XXXXXX
 * @param {string} title XXXX
 */
const rootRouter = [

    {
        path: '/' + ROOT_ROUTER.ask.name,
        name: ROOT_ROUTER.ask.name,
        component: () => import('@/views/ask-market/AskMarket.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ROOT_ROUTER.ask.title
        }
    },
    {
        path: '/' + ROOT_ROUTER.course.name,
        name: ROOT_ROUTER.course.name,
        component: () => import('@/views/course-plaza/CoursePlaza.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ROOT_ROUTER.course.title
        }
    },
    {
        path: '/' + ROOT_ROUTER.paper.name,
        name: ROOT_ROUTER.paper.name,
        component: () => import('@/views/paper-treasure/PaperTreasure.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ROOT_ROUTER.course.title
        }
    },
    {
        path: '/' + ROOT_ROUTER.explore.name,
        name: ROOT_ROUTER.explore.name,
        component: () => import('@/views/explore-place/ExplorePlace.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            navigable: true,
            title: ROOT_ROUTER.explore.title
        }
    }
];

export default rootRouter;
