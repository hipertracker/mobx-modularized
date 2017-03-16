import autobind from 'autobind-decorator';
import { action } from 'mobx';

export function connect(...stores) {
    return function decorator(classDecorator) {
        const target = classDecorator.prototype;
        stores.forEach(Store => {
            const name = Store.name.toLowerCase();
            target[name] = new Store();
        });
        target._setStore = autobind(action(value => {
            target.store = value;
            stores.forEach(store => {
                const name = store.name.toLowerCase();
                target[name]._setStore(value);
            });
        }));
    };
}
