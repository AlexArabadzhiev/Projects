<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>edit</title>
    <link rel="stylesheet" href="../Style/style.css"/>
</head>
<body>
<div id="wrapper">
<?php
include '../includes/connect.php';
$id = $_GET['id'];

if(!isset($_POST['submit'])){
    $q = "SELECT * FROM info WHERE ID = $_GET[id]";
    $result = mysql_query($q);
    $company = mysql_fetch_array($result);

}

?>
<form action="" method="post">
    <table>
    <tr><td>Edit Name: <input type="text" name="name" value="<?php echo $company['Name']; ?>" /></td></tr>
    <tr><td>Edit Address: <input type="text" name="address" value="<?php echo $company['Address']; ?>" /></td></tr>
    <input type="hidden" name="id" value=$id/>
    </table>
    <input type="submit" name="submit" value="Edit"/>
</form>
<?php
if(isset($_POST['submit'])){
    $update = "UPDATE info SET Name='$_POST[name]', Address='$_POST[address]' WHERE ID=$id";
    mysql_query($update) or die(mysql_error());
    header('Location: ../Index.php');
}

?>
</div>
</body>
</html>
