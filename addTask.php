<?php

require 'model/logic.php';

if (!empty($_POST['taskDescription'])) {
	addTaskToList($_GET['listId'], $_POST['taskDescription']);
	header('Location: index.php?openList=' . $_GET['listId']);
}