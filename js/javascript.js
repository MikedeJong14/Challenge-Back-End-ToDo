//haal alle child elementen op van een parent element d.m.v. een classnaam
function getChildrenFrom(parentId, childClassName) {
    return document.getElementById(parentId).getElementsByClassName(childClassName);
}

function childrenIdsInArray(children) {
    let childrenIDs = [];
    for (let i = 0; i < children.length; i++) {
        childrenIDs[i] = children[i].id;
    }
    return childrenIDs;
}

//voegt CSS toe aan elke taak zodat het op een knop lijkt, veranderd de onclick van elke taak om die taak te verwijderen
function showDeleteItem(listId) {
    let deleteItem = document.getElementById("deleteItem" + listId);
    let children = getChildrenFrom("list" + listId, "tasks");
    let childrenIds = childrenIdsInArray(children);
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        let itemName = element.textContent.replace(/[^a-zA-Z0-9 ]/g, "");
        element.onclick = function() {confirmDeleteItem(childrenIds[i], itemName);};
        element.classList.add("clickableButton");
    }
    deleteItem.classList.remove("invisible");
}

function hideDeleteItem(listId) {
    let deleteItem = document.getElementById("deleteItem" + listId);
    let children = getChildrenFrom("list" + listId, "tasks");
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        element.onclick = null;
        element.classList.remove("clickableButton");
    }
    deleteItem.classList.add("invisible");
}

//hetzelde als 'showDeleteItem' alleen de naam en duur van een taak zijn elk apart een knop
function showEditItem(listId) {
    let editItem = document.getElementById("editItem" + listId);
    let children = getChildrenFrom("list" + listId, "tasks");
    let childrenIds = childrenIdsInArray(children);
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        let childContent = getChildrenFrom(element.id, "taskContent");
        childContent[0].onclick = function() {showEditItemNameForm(childrenIds[i]);};
        childContent[0].classList.add("clickableButton");
        childContent[1].onclick = function() {showEditItemDurationForm(childrenIds[i]);};
        childContent[1].classList.add("clickableButton");
    }
    editItem.classList.remove("invisible");
}

function hideEditItem(listId) {
    let editItem = document.getElementById("editItem" + listId);
    let children = getChildrenFrom("list" + listId, "tasks");
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        let childContent = getChildrenFrom(element.id, "taskContent");
        let childForms = getChildrenFrom(element.id, "taskForm");
        for (let j = 0; j < childContent.length; j++) {
            childContent[j].classList.remove("clickableButton");
            childContent[j].classList.remove("invisible");
            childContent[j].onclick = null;
            childForms[j].classList.add("invisible");
        }
    }
    editItem.classList.add("invisible");
}

function showEditItemNameForm(itemId) {
    let editItemNameForm = document.getElementById("editItemNameForm" + itemId);
    let itemName = document.getElementById("itemName" + itemId);
    let inputEditItemName = document.getElementById("inputEditItemName" + itemId);
    editItemNameForm.classList.remove("invisible");
    itemName.classList.add("invisible");
    inputEditItemName.focus();
}

function showEditItemDurationForm(itemId) {
    let editItemDurationForm = document.getElementById("editItemDurationForm" + itemId);
    let itemDuration = document.getElementById("itemDuration" + itemId);
    let inputEditItemDuration = document.getElementById("inputEditItemDuration" + itemId);
    editItemDurationForm.classList.remove("invisible");
    itemDuration.classList.add("invisible");
    inputEditItemDuration.focus();
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

function tickStatus(itemId) {
    window.location.href = ("tickStatus.php?taskId=" + itemId);
}

function sortList(listId) {
    window.location.href = ("index.php?sortList=" + listId + "&openList=" + listId);
}

function filterList(listId) {
    window.location.href = ("index.php?filterList=" + listId + "&openList=" + listId);
}

function standardLayout(listId) {
    window.location.href = ("index.php?openList=" + listId);
}