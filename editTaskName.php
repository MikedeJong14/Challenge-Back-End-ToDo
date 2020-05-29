<?php

require 'model/logic.php';

if (!empty($_POST['newTaskName'])) {
	$listId = getDataById('list_id', 'tasks', $_GET['taskId']);
	editTaskName($_GET['taskId'], $_POST['newTaskName']);
}
header('Location: index.php?openList=' . $listId['list_id']);