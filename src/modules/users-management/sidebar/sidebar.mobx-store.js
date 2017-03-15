import { computed, observable} from 'mobx';
import Child1 from './child1/child1.mobx-store';
import Child2 from './child2/child2.mobx-store';

import { injectSubmodules } from '../../../decorators';


@injectSubmodules(Child1, Child2)
export default class Sidebar {
    @observable name = 'Sidebar';
    @computed get toggleCount() {
        return `Clicked ${this.store.toggleCount}`;
    }
}
