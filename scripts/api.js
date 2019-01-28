/* global $, Headers */


const api = function (){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/bob';
    function getItems(){
        return fetch (`${BASE_URL}/items`);
           
        
    }
    function createItem(name){
        const newItem = JSON.stringify({
            "name": name
        });
        
        return fetch (`${BASE_URL}/items`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            body: newItem 
        })
    }

    function updateItem(id, updateData){
        const updatedItem = JSON.stringify(updateData);

        return fetch(`${BASE_URL}/items/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: updatedItem
        })
    }

    return {getItems, createItem, updateItem};
}();

