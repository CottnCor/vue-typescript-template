<template>
    <a-popover v-model="visible" trigger="click" placement="bottomLeft">
        <template slot="content">
            <a-spin :spinning="!this.menu && this.loadding">
                <a-list>
                    <a-list-item v-for="(item, index) in this.menu" :key="item.key">
                        <a class="menu" @click="routerClick(item)">
                            <a-icon class="icon" theme="twoTone" :type="item.icon" />
                            <p class="primary strong">{{ item.label }}</p>
                        </a>
                    </a-list-item>
                </a-list>
            </a-spin>
        </template>
        <a @click="this.expandCard" class="hover header-itself">
            <a-icon class="icon" theme="twoTone" type="appstore" />
        </a>
    </a-popover>
</template>

<script lang='tsx'>
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Mutation, Action } from 'vuex-class';

import { VNode, CreateElement } from 'vue';

@Component({})
class AlternativeMenu extends Vue {
    @Prop() public menu!: any;

    private loadding = false;

    private visible = false;

    private noticeCount = 12;

    private noticeOverview: any = null;

    @Watch('visible', { immediate: true, deep: true })
    private onVisibleChanged(val: boolean, oldVal: boolean) {
        this.refreshData();
    }

    private expandCard() {
        if (!this.visible) {
            this.loadding = true;
            this.refreshData();
        } else {
            this.loadding = false;
        }
        this.visible = !this.visible;
    }

    private refreshData() {
        if (this.menu) {
            this.loadding = false;
        }
    }

    private routerClick(arg: any) {
        if (arg && arg.key) {
            this.$router.push({ name: arg.key });
        }
    }
}
export default AlternativeMenu;
</script>

<style lang="scss" scoped>
a.header-itself {
    span {
        vertical-align: initial;
    }
    .icon {
        font-size: $size_18;
        padding: $size_4;
    }
}
a.menu {
    .icon {
        font-size: $size_18;
        padding: $size_7;
        margin-right: $size_7;
    }
}
</style>
