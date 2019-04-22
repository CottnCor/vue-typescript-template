import { ASSIST_ROUTER, USER_ROUTER } from '@/config';

const parentRoute = '/' + ASSIST_ROUTER.people.name + '/';

/**
 * meta XXXXX
 * @param {boolean} icon XXicon
 * @param {boolean} keepAlive XXXXXX
 * @param {string} title XXXX
 */
const userRouter = [
    {
        path: parentRoute + USER_ROUTER.activities.name,
        name: USER_ROUTER.activities.name,
        component: () => import('@/views/people-activities/PeopleActivities.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: USER_ROUTER.activities.title
        }
    },
    {
        path: parentRoute + USER_ROUTER.answers.name,
        name: USER_ROUTER.answers.name,
        component: () => import('@/views/people-answers/PeopleAnswers.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: USER_ROUTER.answers.title
        }
    },
    {
        path: parentRoute + USER_ROUTER.asks.name,
        name: USER_ROUTER.asks.name,
        component: () => import('@/views/people-asks/PeopleAsks.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: USER_ROUTER.asks.title
        }
    }
];

export default userRouter;
