<template>
    <a-popover v-model="visible" trigger="click" placement="bottomRight">
        <template slot="content">
            <a-spin :spinning="!this.userMenu && this.loadding">
                <a-list>
                    <a-list-item v-for="(item, index) in this.userMenu" :key="item.key">
                        <a class="menu" @click="routerClick(item)">
                            <a-icon class="icon" theme="twoTone" :type="item.icon" />
                            <p class="primary strong">{{ item.label }}</p>
                        </a>
                    </a-list-item>
                </a-list>
            </a-spin>
        </template>
        <a @click="this.expandCard" class="avatar">
            <a-avatar v-if="this.userInfo.avatar" :src="this.userInfo.avatar" />
            <!-- <a-icon v-else class="icon" theme="twoTone" type="smile" /> -->
            <a-icon v-else class="icon" type="user" />
        </a>
    </a-popover>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { getUserMenu } from '@/api/_mock-data';

import { MOCK_TIMEOUT } from '@/config';

@Component({})
class UserAvatarCard extends Vue {
    @Prop(Number) public userid!: number;

    private loadding = false;

    private visible = false;

    private userMenu: any = null;

    private userInfo: any = {
        id: '',
        name: 'CottnCor',
        avatar: ''
    };

    private userMsg: any = [
        {
            id: '',
            type: '',
            content: 'hi, welcome to zyker!!!'
        }
    ];

    @Watch('visible', { immediate: true, deep: true })
    private onVisibleChanged(val: boolean, oldVal: boolean) {
        if (val) {
            this.refreshData();
        } else {
            setTimeout(() => {
                this.userMenu = null;
            }, MOCK_TIMEOUT);
        }
    }

    private expandCard() {
        if (!this.visible) {
            this.loadding = true;
        } else {
            this.loadding = false;
        }
        this.visible = !this.visible;
    }

    private refreshData() {
        getUserMenu({ userid: this.userid }).then((result) => {
            if (result) {
                setTimeout(() => {
                    this.userMenu = result;
                    this.loadding = false;
                }, MOCK_TIMEOUT);
            }
        });
    }

    private routerClick(arg: any) {
        if (arg && arg.key) {
            this.$router.push({ name: arg.key });
        }
    }
}
export default UserAvatarCard;
</script>

<style lang="scss" scoped>
a.avatar {
    margin: auto;
    display: flex;
    width: $size_36;
    height: $size_36;
    border-radius: $size_24;
    background-image: map-get($default, linear_primary_2);
    & * {
        background: map-get($default, none);
    }
    .icon {
        margin: auto;
        font-size: $size_18;
        color: map-get($default, pure);
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
