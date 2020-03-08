<template>
    <div id="app">
        <basic-layout>
            <keep-alive slot="header">
                <header-nav v-show="this.$route.meta.navigable" />
            </keep-alive>
            <keep-alive slot="body">
                <transition name="slide-fade">
                    <router-view v-if="this.$route.meta.keepAlive" />
                </transition>
            </keep-alive>
            <transition slot="body" name="slide-fade">
                <router-view v-if="!this.$route.meta.keepAlive" />
            </transition>
            <keep-alive slot="footer">
                <footer-nav v-show="this.$route.meta.navigable" />
            </keep-alive>
        </basic-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BasicLayout } from '@/layout';
import { HeaderNav, FooterNav } from '@/components';
@Component({
    components: {
        BasicLayout,
        HeaderNav,
        FooterNav
    }
})
export default class App extends Vue {}
</script>

<style lang="scss" scope>
#app {
    width: 100%;
}
</style>
