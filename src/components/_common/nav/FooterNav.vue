<template>
    <a-layout-footer class="nav">
        <div class="main-box">
            <div class="left-box">
                <a class="logo-box">
                    <img class="logo" src="@/assets/img/logo/logo-1024.png" />
                </a>
                <div class="social"></div>
            </div>
            <div class="right-box">
                <div v-if="this.menu">
                    <ul class="menu" v-for="(item, index) in this.menu" :key="item.index">
                        <li class="menu-item menu-footer">
                            <p class="primary title hard_strong center">{{ item.label }}</p>
                        </li>
                        <li class="menu-item" v-for="child in item.children" :key="child.key">
                            <a class="text menu-link">
                                <p class="primary center">{{ child.label }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-box">
            <a-divider />
            <p class="primary secondary hard_strong">
                {{
                    '© ' +
                        this.appTitle +
                        ', ' +
                        (new Date().getFullYear() <= 2019
                            ? '2019'
                            : '2019' + '-' + new Date().getFullYear())
                }}
            </p>
            <p v-if="this.lawWorks" class="primary secondary center">
                {{ this.lawWorks.icp_office }} | {{ this.lawWorks.icp_id }} |
                {{ this.lawWorks.icp_date }}
            </p>
            <p v-if="this.lawWorks" class="primary secondary strong center">
                {{ this.lawWorks.company }} | {{ this.lawWorks.domain }} | {{ this.lawWorks.phone }}
            </p>
        </div>
    </a-layout-footer>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Mutation, Action } from 'vuex-class';

import { APP_PRAMS } from '@/config';

import { getFooterMenu, getLawWorks } from '@/api/_mock-data';

@Component({})
class FooterNav extends Vue {
    private menu: any = null;

    private lawWorks: any = null;

    private appTitle: string = APP_PRAMS.title;

    private mounted() {
        getFooterMenu().then((result) => {
            if (result) {
                this.menu = result;
            }
        });
        getLawWorks().then((result) => {
            if (result) {
                this.lawWorks = result;
            }
        });
    }
}
export default FooterNav;
</script>

<style lang='scss' scoped>
.nav {
    position: relative;
    text-align: center;
    background-color: map-get($default, pure);

    .main-box {
        padding: $size_48 $size_72;
        .left-box {
            float: left;
            display: flex;
            .logo-box {
                width: $size_96;
                margin: auto;
                font-size: 1em;
                display: inline-block;
                &:hover {
                    opacity: 0.8;
                    transform: $transform_base;
                }
                img {
                    width: 100%;
                }
            }
            .social {
                display: flex;
                margin: auto;
                .logo-box {
                    float: left;
                    width: $size_32;
                    margin-right: 0.2em;
                }
            }
        }
        .right-box {
            float: right;
            .menu {
                display: inline-block;
                vertical-align: top;
                padding: 0;
                margin: 0;
                margin-right: $size_64;
                list-style: none;
                .menu-item {
                    margin-bottom: $size_16;
                }
                .menu-footer {
                    margin-bottom: $size_24;
                }
                .bottom-box {
                    padding: $size_24 0;
                    p {
                        text-align: left;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: map-get($breakpoint, sm)) {
        .left-box {
            display: block;
            width: 100%;
            margin-bottom: $size_32;
        }
        .right-box {
            display: block;
            width: 100%;
        }
        .bottom-box {
            p {
                text-align: center;
            }
        }
    }

    @media only screen and (max-width: map-get($breakpoint, lg)) {
        .left-box {
            float: left;
        }
        .right-box {
            float: right;
        }
        .bottom-box {
            p {
                text-align: left;
            }
        }
    }
}
</style>
