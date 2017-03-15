import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Sidebar from './sidebar/sidebar.react-component';

@inject('store')
@observer
export default class UsersManagement extends Component {
    render() {
        const { isLoading, name, toggleCount, setName } = this.props.store;
        return (
            <div>
                <ul>
                    <li>UsersManagement.name: <b>{ name }</b></li>
                    <li>UsersManagement.isLoading: <b>{ isLoading ? 'true' : 'false'}</b></li>
                    <li>Clicked: { toggleCount }</li>
                </ul>
                <hr/>
                <Sidebar/>
                <hr/>
                <input value={name} onChange={e => setName(e.target.value)}/>
            </div>
        )
    }
}
