import { Component, Emit, Vue } from 'vue-property-decorator';

const eventBus = (Vue) => {
    const bus = new Bus();
    Vue.prototype.$bus = bus;
};

/**
 * XXXXX
 */
@Component({})
class Bus extends Vue {
    /**
     * 'do' ？ (vue-property-decorator)EmitXXXXXXXXXX？ 【XXX】
     */
    @Emit('do')
    public do(...args) {}

    public emit(event, ...args) {
        this.do(args);
    }

    public on(event, callback) {
        this.do(callback);
    }

    public off(event, callback) {
        this.do(callback);
    }
}

export default eventBus;
