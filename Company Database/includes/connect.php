<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$db = 'companies';

$conn = mysql_connect($dbhost, $dbuser, $dbpass, $db);

mysql_select_db($db);
