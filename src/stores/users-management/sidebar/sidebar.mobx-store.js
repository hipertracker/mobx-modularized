import { action, computed, observable} from 'mobx';
import Child1 from './child1/child1.mobx-store';
import Child2 from './child2/child2.mobx-store';
import { injectStores } from '../../../decorators';

@injectStores(Child1, Child2)
export default class Sidebar {
    @observable name = 'Sidebar';

    @computed get message() {
        return `store.sidebar.message - computed for store.toggleCount: ${this.store.toggleCount}`;
    }

    @action setName(value) {
        this.name = value;
    }
}
