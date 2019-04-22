<template>
    <a-layout-header class="nav">
        <div class="keep-back-menu-wapper">
            <alternative-menu :menu="this.menu" />
        </div>
        <a class="logo" @click="this.routerClick">
            <p class="primary title strong">{{ this.appTitle }}</p></a
        >
        <div class="menu-wapper">
            <div v-if="this.menu">
                <header-menu :menu="this.menu" />
            </div>
        </div>
        <div v-if="this.signState" class="search-wapper">
            <search-tool placeholder="XXXXX" />
        </div>
        <div v-if="this.signState" class="notice-wapper">
            <notice-card />
        </div>
        <div class="sign-wapper" :class="[this.signState ? 'signed' : '']">
            <div class="sign" v-if="this.signState">
                <user-avatar-card />
            </div>
            <div class="sign" v-else>
                <a class="tips sign-in"><p class="primary title center strong">XX</p></a>
                <a class="tips sign-up"><p class="primary title center strong">XX</p></a>
            </div>
        </div>
    </a-layout-header>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Mutation, Action } from 'vuex-class';

import { APP_PRAMS, ROOT_ROUTER, ASSIST_ROUTER } from '@/config';

import SearchTool from '../widgets/SearchTool.vue';
import NoticeCard from '../widgets/NoticeCard.vue';
import UserAvatarCard from '../widgets/UserAvatarCard.vue';
import HeaderMenu from '../menu/HeaderMenu.vue';
import AlternativeMenu from '../menu/AlternativeMenu.vue';

import { getHeaderMenu } from '@/api/_mock-data';

@Component({
    components: { SearchTool, NoticeCard, UserAvatarCard, HeaderMenu, AlternativeMenu }
})
class HeaderNav extends Vue {
    private menu: any = null;

    private appTitle: string = APP_PRAMS.title;

    private signState = true;

    @Watch('signState', { immediate: true, deep: true })
    private onSignStateChanged(val: boolean, oldVal: boolean) {}

    private mounted() {
        getHeaderMenu().then((result) => {
            if (result) {
                this.menu = result;
            }
        });
    }

    private routerClick(arg: any) {
        this.$router.push({ name: ASSIST_ROUTER.portal.name });
    }
}
export default HeaderNav;
</script>

<style lang='scss' scoped>
.nav {
    display: flex;
    background-color: map-get($default, none);

    .logo,
    .signed,
    .sign-in,
    .sign-up,
    .sign-wapper,
    .search-wapper,
    .notice-wapper,
    .keep-back-menu-wapper {
        margin: auto $size_7;
    }

    .logo {
        height: $size_30;
        padding: 0 1em;
        border-radius: $size_3;
        background-image: map-get($default, linear_primary);
        &:hover {
            transform: $transform_base;
        }
        p {
            color: map-get($default, pure);
        }
    }

    .menu-wapper {
        margin: auto;
        transition: opacity $ease_in;
    }

    .keep-back-menu-wapper {
        display: none;
    }

    @media only screen and (max-width: map-get($breakpoint, lg)) {
        .menu-wapper {
            display: none;
        }
        .keep-back-menu-wapper {
            display: inline;
        }
        .search-wapper {
            display: none;
        }
    }

    .sign-wapper {
        display: flex;
        &.signed {
            &:hover {
                background-color: map-get($default, grey_2);
            }
        }
        .sign {
            display: flex;
            .sign-in {
                &:hover {
                    background-color: map-get($default, grey_2);
                }
                p {
                    color: map-get($default, primary);
                }
            }
            .sign-up {
                background-image: map-get($default, linear_primary);
                p {
                    color: map-get($default, pure);
                }
            }
        }
    }
}
</style>
