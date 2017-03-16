import { computed } from 'mobx';
import { connect } from '../../../../connect';

@connect()
export default class Child1 {
    @computed get message() {
        return `store.sidebar.child1.message - computed for store.toggleCount: ${this.store.toggleCount}`;
    }
}
