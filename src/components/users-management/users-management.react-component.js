import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Sidebar from './sidebar/sidebar.react-component';

@inject('store')
@observer
export default class UsersManagement extends Component {
    render() {
        const {store} = this.props;
        return (
            <div>
                UsersManagement:
                <ul>
                    <li>UsersManagement.name: <b>{ store.name }</b></li>
                    <li>UsersManagement.isLoading: <b>{ store.isLoading ? 'true' : 'false'}</b></li>
                    <li>UsersManagement.toggleCount: { store.toggleCount }</li>
                </ul>
                <hr/>
                <Sidebar/>
                <hr/>
                <p>
                    Update <tt>store.name</tt> -
                    <input
                        value={store.name}
                        onChange={e => store.setName(e.target.value)}
                    />
                </p>
                <p>Update <tt>store.sidebar.name</tt> -
                    <input
                        value={store.sidebar.name}
                        onChange={e => store.sidebar.setName(e.target.value)}
                    />
                </p>
            </div>
        )
    }
}
