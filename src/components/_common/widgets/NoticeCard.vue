<template>
    <a-popover v-model="visible" trigger="click" placement="bottomRight">
        <template slot="content">
            <a-spin :spinning="!this.noticeOverview && this.loadding">
                <a-tabs>
                    <a-tab-pane tab="XX" key="1">
                        <a-list>
                            <a-list-item
                                v-for="(item, index) in this.noticeOverview"
                                :key="item.key"
                            >
                                <a-list-item-meta :title="item.title" :description="item.describe">
                                    <a-avatar
                                        style="background-color: white"
                                        slot="avatar"
                                        :src="item.avatar"
                                    />
                                </a-list-item-meta>
                            </a-list-item>
                        </a-list>
                    </a-tab-pane>
                    <a-tab-pane tab="XX" key="2">
                        XX
                    </a-tab-pane>
                    <a-tab-pane tab="XX" key="3">
                        XX
                    </a-tab-pane>
                </a-tabs>
            </a-spin>
        </template>
        <a
            @click="this.expandCard"
            :class="this.noticeCount > 0 ? 'has-notice' : ''"
            class="hover header-itself"
        >
            <a-badge v-if="this.noticeCount > 0" :count="this.noticeCount" class="badge">
                <a-icon class="icon" theme="twoTone" type="bell" />
            </a-badge>
            <a-icon v-else class="icon" theme="twoTone" type="bell" />
        </a>
    </a-popover>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { getNoticeOverview } from '@/api/people-profile';

import { MOCK_TIMEOUT } from '@/config';

@Component({})
class NoticeCard extends Vue {
    @Prop(Number) public userid!: number;

    private loadding = false;

    private visible = false;

    private noticeCount = 12;

    private noticeOverview: any = null;

    @Watch('visible', { immediate: true, deep: true })
    private onVisibleChanged(val: boolean, oldVal: boolean) {
        if (val) {
            this.refreshData();
        } else {
            setTimeout(() => {
                this.noticeOverview = null;
            }, MOCK_TIMEOUT);
        }
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
        getNoticeOverview({ userid: this.userid }).then((result) => {
            if (result) {
                setTimeout(() => {
                    this.noticeOverview = result;
                    this.loadding = false;
                }, MOCK_TIMEOUT);
            }
        });
    }
}
export default NoticeCard;
</script>

<style lang="scss" scoped>
a.header-itself {
    &.has-notice {
        padding: 1.286rem;
        padding-top: 0.643rem;
        padding-left: 0.286rem;
        padding-bottom: 0;
    }
    span {
        vertical-align: initial;
    }
    .icon {
        font-size: $size_18;
        padding: $size_4;
    }
}
</style>
