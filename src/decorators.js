import autobind from 'autobind-decorator';
import { action, observable} from 'mobx';

export function injectStores(...stores) {
    return function decorator(classDecorator) {
        const target = classDecorator.prototype;
        stores.forEach(store => {
            const name = store.name.toLowerCase();
            target[name] = new store();
            // target[name] = observable(target[name]);
        })
        target._setStore = autobind(action(function _setStore (value) {
            target.store = observable(target.store);
            stores.forEach(store => {
                const name = store.name.toLowerCase();
                target[name]._setStore(value);
            });
        }))
    }
}
