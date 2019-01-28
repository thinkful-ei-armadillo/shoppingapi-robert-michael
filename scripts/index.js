/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

store.items.push(Item.create('apples'));

/*api.getItems()
  .then(res => res.json())
  .then(resJson => console.log(resJson));
console.log(api.BASE_URL);*/




