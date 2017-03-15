import { computed } from 'mobx';
import { injectStores } from '../../../../decorators';

@injectStores()
export default class Child2 {
    @computed get toggleCount() {
        return `Clicked ${this.store.toggleCount}`;
    }
}
