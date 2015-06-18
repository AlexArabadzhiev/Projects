<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="Style/style.css"/>
</head>
<body>
<div id="wrapper">
    <?php
    include 'includes/connect.php';
    $query = 'SELECT * FROM info';
    $result = mysql_query($query);
    if($result) {
        echo '<table>';
        echo '<tr><td><strong>Company Name</strong></td><td><strong>Address</strong></td></tr>';
        while ($company = mysql_fetch_array($result)) {
            echo '<tr><td>' . $company['Name'] . '</td><td>' . $company['Address'] . '</td>';
            echo '<td><a href="includes/edit.php?id=' . $company['ID'] .'">EDIT</a></td>';
            echo '<td><a href="includes/delete.php?id=' . $company['ID']. '">DELETE</a></td>';
            echo '</tr>';
        }
    }
    echo '</table>';
    ?>
    <form action="includes/add.php">
        <input type="submit" value="Add Company Info"/>
    </form>
</div>
</body>
</html>




