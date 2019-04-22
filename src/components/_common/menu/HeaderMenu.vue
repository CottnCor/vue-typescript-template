<script lang='tsx'>
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Mutation, Action } from 'vuex-class';

import { VNode, CreateElement } from 'vue';

@Component({})
class HeaderNav extends Vue {
    @Prop() public menu!: any;

    private routerClick(arg: any) {
        if (arg && arg.key) {
            this.$router.push({ name: arg.key });
        }
    }

    private render(h: CreateElement): VNode {
        if (this.menu) {
            return (
                <a-menu class="menu" mode="horizontal">
                    {(this.menu as any).map((item) => {
                        if (item.children && item.children.length > 0) {
                            return (
                                <a-sub-menu>
                                    <span slot="title">
                                        <span class="primary title hard_strong">{item.label}</span>
                                    </span>
                                    {item.children.map((child) => {
                                        if (child.children && child.children.length > 0) {
                                            return (
                                                <a-sub-menu class="menu-item">
                                                    <span class="menu-item-wapper" slot="title">
                                                        <a-icon theme="twoTone" type={child.icon} />
                                                        <span class="primary hard_strong">
                                                            {child.label}
                                                        </span>
                                                    </span>
                                                    {child.children.map((son) => {
                                                        return (
                                                            <a-menu-item
                                                                class="menu-item"
                                                                key={son.key}
                                                            >
                                                                <span class="menu-item-wapper">
                                                                    <a-icon
                                                                        theme="twoTone"
                                                                        type={son.icon}
                                                                    />
                                                                    <span class="primary hard_strong">
                                                                        {son.label}
                                                                    </span>
                                                                </span>
                                                            </a-menu-item>
                                                        );
                                                    })}
                                                </a-sub-menu>
                                            );
                                        } else {
                                            return (
                                                <a-menu-item
                                                    class="menu-item"
                                                    key={child.key}
                                                    onClick={this.routerClick}
                                                >
                                                    <span class="menu-item-wapper">
                                                        <a-icon theme="twoTone" type={child.icon} />
                                                        <span class="primary hard_strong">
                                                            {child.label}
                                                        </span>
                                                    </span>
                                                </a-menu-item>
                                            );
                                        }
                                    })}
                                </a-sub-menu>
                            );
                        } else {
                            return (
                                <a-menu-item key={item.key} onClick={this.routerClick}>
                                    <span class="primary title hard_strong">{item.label}</span>
                                </a-menu-item>
                            );
                        }
                    })}
                </a-menu>
            );
        } else {
            return <a-menu class="menu" mode="horizontal" />;
        }
    }
}
export default HeaderNav;
</script>

<style lang='scss' scoped>
.menu {
    border: none;
    background: transparent;
    &::after {
        border: none;
        background: transparent;
    }
}

.menu-item {
    display: flex;
    .menu-item-wapper {
        display: flex;
        margin: auto 0;
        i,
        span {
            margin: auto 0;
            display: inline-block;
        }
        i {
            margin: auto 0.5em auto 0;
        }
    }
    .ant-menu-submenu-selected {
        border: none;
        border-top: $size_2 solid map-get($default, primary);
    }
}
</style>
