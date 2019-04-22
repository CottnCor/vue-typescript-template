<template>
    <sketch-layout>
        <div slot="content" class="wapper" v-if="appInfo">
            <div class="home-page-wrapper">
                <div class="banner-bg"></div>
                <div class="banner page">
                    <div class="text-wrapper">
                        <a class="logo"
                            ><p class="primary hard_strong pure h1">{{ appInfo.title }}</p></a
                        >
                        <p class="primary total">
                            {{ appInfo.slogan }}
                        </p>
                        <div class="sign">
                            <a class="tips sign-in"
                                ><p class="primary title center strong">XXAPP</p></a
                            >
                            <a class="tips sign-up"
                                ><p class="primary title center strong">XXXX</p></a
                            >
                        </div>
                    </div>
                    <div class="img-wrapper"></div>
                </div>
            </div>
            <div class="home-page-wrapper page1">
                <div class="page">
                    <p class="primary center strong pure h2">XX&amp;XX</p>
                    <div class="row">
                        <div class="topic radius" v-for="item in 4">
                            <a class="img">
                                <a-icon class="icon" type="user" />
                            </a>
                            <p class="primary center hard_strong total">XX&amp;XX</p>
                            <p class="primary center title">{{ appInfo.slogan }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-page-wrapper page2">
                <div class="page">
                    <p class="primary center strong h2">XX&amp;XX</p>
                    <div class="page2-content">
                        <div class="page2-components"></div>
                        <div class="page2-product"></div>
                    </div>
                </div>
            </div>
            <div class="home-page-wrapper page3">
                <div class="page">
                    <p class="primary center strong h2">XX&amp;XX</p>
                    <div class="row">
                        <div class="topic radius" v-for="item in 4">
                            <a class="img">
                                <a-icon class="icon" type="user" />
                            </a>
                            <p class="primary center hard_strong total">XX&amp;XX</p>
                            <p class="primary center title">{{ appInfo.slogan }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </sketch-layout>
</template>

<script lang="ts" src="./HomePage.ts"></script>

<style lang="scss" scoped>
@import './HomePage.scss';
</style>

