import {action, makeObservable, observable} from 'mobx';
import products from '../data/products';

const newList = products.map(product => {
  return {
    ...product,
    id: Math.random(),
    count: 1,
    added: false,
  };
});

class ProductsList {
  list = newList;

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }

  refreshCount(id) {
    this.list.find(el => el.id === id).count = 1;
  }

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
      refreshCount: action,
    });
  }
}

const prod = new ProductsList();

export default prod;
