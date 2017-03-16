import { computed } from 'mobx';
import { connect } from '../../../../connect';

@connect()
export default class Child2 {
    @computed get toggleCount() {
        return `Clicked ${this.store.toggleCount}`;
    }
}
