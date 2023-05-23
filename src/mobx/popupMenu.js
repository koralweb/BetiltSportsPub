import {action, makeObservable, observable} from 'mobx';

class PopupMenu {
  show = false;

  change() {
    this.show = !this.show;
  }

  constructor() {
    makeObservable(this, {
      show: observable,
      change: action,
    });
  }
}

const menu = new PopupMenu();

export default menu;
