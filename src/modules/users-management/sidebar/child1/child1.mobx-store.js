import autobind from 'autobind-decorator';
import { action, computed, observable} from 'mobx';

export default class Child1Store {
    @computed get toggleCount() {
        return `Clicked ${this.store.toggleCount}`;
    }

    // TODO: move it into decorator
    @observable store;
    @autobind @action setStore(value) {
        this.store = value;
    }
}
