/*Cart.js
Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя 
покупательскую корзину. Интерфейс:

addItem(item, count) – добавляет в корзину товары и их количество. 
Товар это объект у которого два свойства: name – имя и price – стоимость.
getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как
 стоимость всех добавленных товаров с учетом их количества.
getCount – возвращает количество товаров в корзине
Примеры
*/
const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35



// BEGIN
export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return _.sumBy(this.getItems(), (goods) => goods.count);
  }

  getCost() {
    return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
  }
}
// END