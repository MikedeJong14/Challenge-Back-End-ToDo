function getChildrenFromList(listId) {
    return document.getElementById("list" + listId).getElementsByClassName("tasks");
}

function childrenIdsInArray(children) {
    let childrenIDs = [];
    for (let i = 0; i < children.length; i++) {
        childrenIDs[i] = children[i].id;
    }
    return childrenIDs;
}

function makeClickableButton(listId) {
    let children = getChildrenFromList(listId);
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        element.classList.add("clickableButton");
    }
}

function disableClickableButton(listId) {
    let children = getChildrenFromList(listId);
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        element.classList.remove("clickableButton");
        element.onclick = null;
    }
}

function showDeleteItem(listId) {
    let deleteItem = document.getElementById("deleteItem" + listId);
    let children = getChildrenFromList(listId);
    let childrenIds = childrenIdsInArray(children);
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        let itemName = element.textContent.replace(/[^a-zA-Z0-9 ]/g, "");
        element.onclick = function() {confirmDeleteItem(childrenIds[i], itemName);};
    }
    deleteItem.classList.remove("invisible");
    makeClickableButton(listId);
}

function hideDeleteItem(listId) {
    let deleteItem = document.getElementById("deleteItem" + listId);
    deleteItem.classList.add("invisible");
    disableClickableButton(listId);
}


function showEditItemName(listId) {
    let editItemName = document.getElementById("editItemName" + listId);
    let children = getChildrenFromList(listId);
    let childrenIds = childrenIdsInArray(children);
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        element.onclick = function() {showEditItemNameForm(childrenIds[i]);};
    }
    editItemName.classList.remove("invisible");
    makeClickableButton(listId);
}

function hideEditItemName(listId) {
    let editItemName = document.getElementById("editItemName" + listId);
    let children = getChildrenFromList(listId);
    let childrenIds = childrenIdsInArray(children);
    for (let i = 0; i < children.length; i++) {
        let editItemNameForm = document.getElementById("editItemNameForm" + childrenIds[i]);
        let itemName = document.getElementById("itemName" + childrenIds[i]);
        itemName.classList.remove("invisible");
        editItemNameForm.classList.add("invisible");
    }
    editItemName.classList.add("invisible");
    disableClickableButton(listId);
}

function showEditItemNameForm(itemId) {
    let editItemNameForm = document.getElementById("editItemNameForm" + itemId);
    let itemName = document.getElementById("itemName" + itemId);
    let inputEditItemName = document.getElementById("inputEditItemName" + itemId);
    editItemNameForm.classList.remove("invisible");
    itemName.classList.add("invisible");
    inputEditItemName.focus();
}

function showAddListForm() {
    let addListForm = document.getElementById("addListForm");
    let annuleerAddList = document.getElementById("annuleerAddList");
    addListForm.classList.remove("invisible");
    annuleerAddList.classList.remove("invisible");
}
function hideAddListForm() {
    let addListForm = document.getElementById("addListForm");
    let annuleerAddList = document.getElementById("annuleerAddList");
    addListForm.classList.add("invisible");
    annuleerAddList.classList.add("invisible");
}
function showAddItemForm(id) {
    let addItemForm = document.getElementById("addItemForm" + id);
    addItemForm.classList.remove("invisible");
}
function hideAddItemForm(id) {
    let addItemForm = document.getElementById("addItemForm" + id);
    addItemForm.classList.add("invisible");
}
function showEditListForm(id) {
    let editListForm = document.getElementById("editListForm" + id);
    editListForm.classList.remove("invisible");
}
function hideEditListForm(id) {
    let editListForm = document.getElementById("editListForm" + id);
    editListForm.classList.add("invisible");
}
function confirmDeleteList(listId, listName) {
    let confirmDelete = confirm("Weet je zeker dat je '" + listName + "' wilt verwijderen?");
    if (confirmDelete) {
        window.location.href = ("deleteList.php?listId=" + listId);
    }
}
function confirmDeleteItem(itemId, itemName) {
    let confirmDelete = confirm("Weet je zeker dat je '" + itemName + "' wilt verwijderen?");
    if (confirmDelete) {
        window.location.href = ("deleteTask.php?taskId=" + itemId);
    }
}