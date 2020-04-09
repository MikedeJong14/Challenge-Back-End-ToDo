function deleteItemFromList(listId) {
    var children = document.getElementById('list' + listId).getElementsByClassName('tasks');
    var childArray = [];
    for (let i = 0; i < children.length; i++) {
        childArray[i] = children[i].id;
    }
    for (let i = 0; i < children.length; i++) {
        var element = children[i];
        element.classList.add("clickableButton");
        element.onclick = function() {confirmDeleteItem(childArray[i]);};
    }
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
function confirmDeleteItem(itemId) {
    let confirmDelete = confirm("Weet je zeker dat je '" + itemId + "' wilt verwijderen?");
    if (confirmDelete) {
        window.location.href = ("deleteTask.php?taskId=" + itemId);
    }
}