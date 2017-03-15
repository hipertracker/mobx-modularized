import autobind from 'autobind-decorator';
import { action, observable } from 'mobx';
import Sidebar from './sidebar/sidebar.mobx-store';
import { injectSubmodules } from '../../decorators';

@injectSubmodules(Sidebar)
export default class UsersManagementStore {
    constructor(props) {
        this.organizationId = props.organizationId;
    }
    @observable name = 'UsersManagement';
    @observable isLoading = false;
    @observable toggleCount = 0;

    @autobind @action toggleIsLoading() {
        this.isLoading = !this.isLoading;
        this.toggleCount += 1;
    }

    @autobind @action setName(value) {
        this.name = value;
    }
}
