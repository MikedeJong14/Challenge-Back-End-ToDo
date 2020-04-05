<?php

require 'model/logic.php';

if (!empty($_POST["taskDescription"])) {
	addTaskToList($_GET['list'], $_POST['taskDescription']);
	header('Location: index.php?openList=' . $_GET['list']);
}