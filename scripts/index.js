/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

/*api.getItems()
  .then(res => res.json())
  .then(resJson => console.log(resJson));
console.log(api.BASE_URL);*/