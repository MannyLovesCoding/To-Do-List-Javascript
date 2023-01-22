console.log('Running');

let itemNumber = 0;
let counter = 0; // Check if function already ran once
function addItem() {
    console.log('Trying to add the item');
    const itemInput = document.getElementById('itemInput').value; // What item is to be added
    if (itemInput.length == 0 || itemInput == ' ') { // If input is empty
        return;
    }
    for (let i = 0; i < document.getElementsByTagName('p').length; i++) { // If Input is a copy of another input
        const otherElements = document.getElementsByTagName('p');
        if (otherElements[i].innerHTML == itemInput) {
            return;
        }
    }
    itemNumber++;
    // Figure out how to make a variable thats instead of the function that can be set to the deleteItem Attribute
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    item.id = `item${itemNumber}`; 
    const itemText = document.createElement('p');
    itemText.innerHTML = itemInput; // Sets the innerHTML to the input
    const completedText = document.createElement('button');
    completedText.innerHTML = 'Done';
    completedText.setAttribute('class', 'firstButton');
    completedText.setAttribute('onclick', `doneItem(${itemNumber})`);
    completedText.style.cursor = 'pointer';
    const deleteText = document.createElement('button');
    deleteText.innerHTML = 'Delete';
    deleteText.setAttribute('onclick', `deleteItem(${itemNumber})`);
    deleteText.style.cursor = 'pointer';
    item.appendChild(itemText);
    item.appendChild(completedText);
    item.appendChild(deleteText);
    document.getElementsByClassName('container')[0].appendChild(item);
}   


function deleteItem(itemNum) {
    console.log(document.getElementById(`item${itemNum}`));
    document.getElementById(`item${itemNum}`).remove();
}

function doneItem(itemNum) {
    console.log(document.getElementById(`item${itemNum}`));
    document.getElementById(`item${itemNum}`).style.backgroundColor = '#90ee90';
}
// Add done function 
// Add CSS