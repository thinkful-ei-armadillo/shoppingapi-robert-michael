/* global shoppingList, store, api */

'use strict'

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });



  

});

/*api.getItems()
  .then(res => res.json())
  .then(resJson => console.log(resJson));
console.log(api.BASE_URL);*/




