<template>
    <content-layout>
        <div slot="content" class="wapper">
            <p class="primary title center order-center">{{ this.state1 }}</p>
            <a-button class="order-center" type="dashed" @click="this.fun1">{{
                this.title
            }}</a-button>
        </div>
    </content-layout>
</template>

<script lang="ts" src="./PaperTreasure.ts"></script>

<style lang="scss" scoped>
@import './PaperTreasure.scss';
</style>

