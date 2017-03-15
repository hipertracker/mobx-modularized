import { computed } from 'mobx';
import { injectStores } from '../../../../decorators';

@injectStores()
export default class Child1 {
    @computed get message() {
        console.log('@STORE', this.store);
        console.log('@STORE.toggleCount', this.store.toggleCount);
        return `CHILD1 message computed from store.toggleCount: ${this.store.toggleCount}`;
    }
}
