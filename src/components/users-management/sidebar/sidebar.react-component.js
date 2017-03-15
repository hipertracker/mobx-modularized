import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('store')
export default class Sidebar extends Component {
    render() {
        const { store } = this.props;
        return (
            <div>
                Sidebar:
                <ul>
                    <li>UsersManagement.toggleCount: <b>{ store.toggleCount }</b></li>
                    <li>Sidebar.name: <b>{ store.sidebar.name }</b></li>
                    <li>Sidebar.message: <b>{ store.sidebar.message }</b></li>
                    <li>Child1.message: <b>{ store.sidebar.child1.message }</b></li>
                </ul>
                <button onClick={ this.props.store.toggleIsLoading }>Toggle isLoading</button>
            </div>
        )
    }
}
