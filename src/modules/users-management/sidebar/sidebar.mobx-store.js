import autobind from 'autobind-decorator';
import { action, computed, observable} from 'mobx';
import Child1 from './child1/child1.mobx-store';
import Child2 from './child2/child2.mobx-store';

export default class SidebarStore {
    @observable store;
    @observable name = 'Sidebar';
    @computed get toggleCount() {
        return `Clicked ${this.store.toggleCount}`;
    }

    // TODO: move it into decorator
    @observable child1 = new Child1();
    @observable child2 = new Child2();
    @autobind @action setStore(value) {
        this.store = value;
        this.child1.setStore(value);
        this.child2.setStore(value);
    }
}
