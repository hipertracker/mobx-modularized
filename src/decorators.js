import autobind from 'autobind-decorator';
import { action, observable} from 'mobx';

export function injectStores(...stores) {
    return function decorator(classDecorator) {
        const target = classDecorator.prototype;
        stores.forEach(store => {
            const name = store.name.toLowerCase();
            target[name] = observable(new store());
        })
        target._setStore = autobind(action((value) => {
            target.store = observable(value);
            stores.forEach(store => {
                const name = store.name.toLowerCase();
                target[name]._setStore(value);
            });
        }))
    }
}
