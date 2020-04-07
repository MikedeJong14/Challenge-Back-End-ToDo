function showAddListForm() {
    document.getElementById("addListForm").style.display = "block";
    document.getElementById("annuleerAddList").style.display = "inline-block";
}
function hideAddListForm() {
    document.getElementById("addListForm").style.display = "none";
    document.getElementById("annuleerAddList").style.display = "none";
}
function showAddItemForm(id) {
    document.getElementById("addItemForm" + id).style.display = "block";
}
function hideAddItemForm(id) {
    document.getElementById("addItemForm" + id).style.display = "none";
}
function showEditListForm(id) {
    document.getElementById("editListForm" + id).style.display = "block";
}
function hideEditListForm(id) {
    document.getElementById("editListForm" + id).style.display = "none";
}
function confirmDeleteList(listId, listName) {
    let confirmDelete = confirm("Weet je zeker dat je de lijst met de naam '" + listName + "' wilt verwijderen?");
    if (confirmDelete) {
        window.location.href = ("deleteList.php?listId=" + listId);
    }
}