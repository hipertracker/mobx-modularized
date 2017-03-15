import { computed } from 'mobx';
import { injectSubmodules } from '../../../../decorators';

@injectSubmodules()
export default class Child1 {
    @computed get toggleCount() {
        return `Clicked ${this.store.toggleCount}`;
    }
}
