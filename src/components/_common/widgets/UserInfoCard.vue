<template>
    <div class="main"></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class UserInfoCard extends Vue {
    @Prop(Number) public userid!: number;

    private userInfo!: any;

    private mounted() {}

    private activated() {}

    private beforeDestroy() {}
}
export default UserInfoCard;
</script>

<style lang='scss' scoped>
</style>