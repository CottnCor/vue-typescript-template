<template>
    <div class="main"></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class CourseCard extends Vue {
    @Prop(Number) public courseid!: number;

    private courseInfo!: any;

    private mounted() {}

    private activated() {}

    private beforeDestroy() {}
}
export default CourseCard;
</script>

<style lang='scss' scoped>
</style>