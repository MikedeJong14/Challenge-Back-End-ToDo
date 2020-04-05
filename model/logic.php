<?php

require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

}

function getDataById ($columns, $table, $id) {

	$conn = OpenCon();
	$query = $conn->prepare("SELECT $columns FROM $table WHERE id = $id");
	$query->execute();
	$query->setFetchMode(PDO::FETCH_ASSOC);
	$result = $query->fetch();
	$conn = null;
	return $result;
}

function getDataByColumn ($columns, $table, $column, $value) {

	$conn = OpenCon();
	$query = $conn->prepare("SELECT $columns FROM $table WHERE $column = :value");
	$query->execute([':value'=>$value]);
	$query->setFetchMode(PDO::FETCH_ASSOC);
	$result = $query->fetchAll();
	$conn = null;
	return $result;
}

function getData ($columns, $table) {

	$conn = OpenCon();
	$query = $conn->prepare("SELECT $columns FROM $table");
	$query->execute();
	$query->setFetchMode(PDO::FETCH_ASSOC);
	$result = $query->fetchAll();
	$conn = null;
	return $result;
}

function getAllDataSorted ($columns, $table, $sortedBy) {

	$conn = OpenCon();
	$query = $conn->prepare("SELECT $columns FROM $table ORDER BY $sortedBy ASC");
	$query->execute();
	$query->setFetchMode(PDO::FETCH_ASSOC);
	$result = $query->fetchAll();
	$conn = null;
	return $result;
}

function addTaskToList ($listId, $taskDescription) {

	$conn = OpenCon();
	$query = $conn->prepare("INSERT INTO tasks (description, list_id) VALUES (:description, :listId)");
	$query->execute([':description'=>$taskDescription, ':listId'=>$listId]);
	$conn = null;
}

function addNewList ($listName) {

	$conn = OpenCon();
	$query = $conn->prepare("INSERT INTO lists (name) VALUES (:name)");
	$query->execute([':name'=>$listName]);
	$conn = null;
}

