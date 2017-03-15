import { computed } from 'mobx';
import { injectStores } from '../../../../decorators';

@injectStores()
export default class Child1 {
    @computed get message() {        
        return `CHILD1 Clicked ${this.store.toggleCount}`;
    }
}
