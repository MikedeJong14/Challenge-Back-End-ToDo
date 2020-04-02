<?php

require 'db.php';

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
	$query = $conn->prepare("SELECT $columns FROM $table WHERE $column = $value");
	$query->execute();
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

