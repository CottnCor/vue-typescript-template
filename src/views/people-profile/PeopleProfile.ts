import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';

const store = namespace('PeopleProfile');

import { ContentLayout } from '@/layout';

@Component({
    components: { ContentLayout }
    })
class PeopleProfile extends Vue {
    @Prop(String) public prop1!: string;

    @Prop(Number) public prop2!: number;

    @store.Getter('state1')
    private state1!: string;

    @store.Action('set_state1')
    private setState1!: (val: string) => void;

    private get timestamp(): number {
        return new Date().getTime();
    }

    private title!: string;

    @Emit('reverseTitle')
    private do() {
        this.title = this.title
            .split('')
            .reverse()
            .join('');
    }

    @Watch('state1', { immediate: true, deep: true })
    private onState1Changed(val: string, oldVal: string) {
        this.fun2(val);
    }

    private activated() {}

    private mounted() {}

    private beforeDestroy() {}

    private fun1() {
        this.title = this.title
            .split('')
            .reverse()
            .join('');
        this.setState1(this.title);
    }

    private fun2(val: string) {
        if (this.title !== val) {
            this.title = val;
        }
    }
}

export default PeopleProfile;

