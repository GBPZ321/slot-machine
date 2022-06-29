import {Icon} from './icon/icon';

export default class StaticIconProvider {
    get icons():Icon[] {
        return Array.from({length: 20}, (x, i) => i).map(i => new Icon(i.toString(), i + ".jpg"));
    }
}