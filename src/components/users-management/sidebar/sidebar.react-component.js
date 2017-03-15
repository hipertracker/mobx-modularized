import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('store')
export default class Sidebar extends Component {
    render() {
        const { toggleIsLoading, toggleCount } = this.props.store;
        const { name } = this.props.store.sidebar;
        return (
            <div>
                <ul>
                    <li>Sidebar.name: <b>{ name }</b></li>
                </ul>
                <button onClick={ toggleIsLoading }>Toggle isLoading</button>
                <div>{toggleCount}</div>
            </div>
        )
    }
}
