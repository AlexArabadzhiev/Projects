<?php
include '../includes/connect.php';

$id = $_GET['id'];

mysql_query("DELETE FROM info WHERE ID = $id") or die(mysql_error());
header('Location: ../Index.php');