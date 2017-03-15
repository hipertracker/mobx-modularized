import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('store')
export default class Sidebar extends Component {
    render() {
        const { store } = this.props;
        const { toggleIsLoading, toggleCount } = store;
        const message = store.sidebar.child1.message;
        console.log('@store:', store.sidebar.child1.message)
        return (
            <div>
                <ul>
                    <li>message: <b>{ store.sidebar.child1.message }</b></li>
                </ul>
                <button onClick={ toggleIsLoading }>Toggle isLoading</button>
                <div>{ toggleCount }</div>
            </div>
        )
    }
}
