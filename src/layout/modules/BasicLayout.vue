<template>
    <div class="wapper">
        <div class="header">
            <div class="container">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
        <div class="footer">
            <div class="container">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
class BasicLayout extends Vue {}
export default BasicLayout;
</script>

<style lang='scss' scoped>
.wapper {
    width: 100%;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    background: map-get($default, grey_2);
}

.header,
.body,
.footer {
    width: 100%;
    display: flex;
}

.body {
    flex: 1;
}

.header {
    z-index: $zindex_back-top;
    background-color: map-get($default, glass);
}

.footer {
    background-color: map-get($default, pure);
}

.header {
    top: 0;
    position: sticky;
    box-shadow: $shadow_strong;

    &::after {
        position: absolute;
        top: $size_64;
        height: $size_2;
        left: 0;
        width: 100%;
        content: '';
        background-image: map-get($default, linear_primary_1);
    }
}

.container {
    margin-left: auto;
    margin-right: auto;
    min-width: map-get($breakpoint, md) - $size_18;
}

@media only screen and (min-width: map-get($breakpoint, md)) {
    .container {
        width: map-get($breakpoint, md) - $size_18;
    }
}

@media only screen and (min-width: map-get($breakpoint, lg)) {
    .container {
        width: map-get($breakpoint, lg) - $size_24;
    }
}

@media only screen and (min-width: map-get($breakpoint, xl)) {
    .container {
        width: map-get($breakpoint, xl) - $size_30;
    }
}
</style>