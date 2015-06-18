<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../Style/style.css"/>
</head>
<body>
<div id="wrapper">
<?php
include '../includes/connect.php';
if(isset($_POST['submit'])){
    mysql_query("INSERT INTO info (ID, Name, Address)
                  VALUES (NULL, '$_POST[name]', '$_POST[address]')") or die(mysql_error());

    header('Location: ../Index.php');
}
?>
<form method="post">
    <table>
    <tr><td>Insert Company Name: <input type="text" name="name"/></td></tr>
    <tr><td>Insert Company Address: <input type="text" name="address" /></td></tr>
    </table>
    <input type="submit" name="submit" value="Add"/>

</form>
</div>
</body>
</html>
