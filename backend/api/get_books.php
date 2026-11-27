
<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");
include 'db.php';

$sql = "SELECT * FROM books";

$result = mysqli_query($conn, $sql);

$books = [];

while ($row = mysqli_fetch_assoc($result)) {
    $books[] = $row;
}

header('Content-Type: application/json');

echo json_encode($books);

?>
