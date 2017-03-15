import mobx from 'mobx';
mobx.useStrict(true);
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { render } from 'react-dom';
import UsersManagement from './components/users-management/users-management.react-component';
import Store from './modules/users-management/users-management.mobx-store';

export class App extends Component {
    constructor(props) {
        super(props);
        const {organizationId} = props;
        this.store = new Store({ organizationId });
        this.store._setStore(this.store);
    }

    render() {
        return (
            <Provider store={ this.store }>
                <UsersManagement />
            </Provider>
        )
    }
}

render(<App organizationId={9}/>, document.getElementById('root'));
