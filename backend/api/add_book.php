<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

include 'db.php';

$title = $_POST['title'];
$author = $_POST['author'];
$category = $_POST['category'];
$description = $_POST['description'];
$book_type = $_POST['book_type'];
$price = $_POST['price'];
$user_id = 1;


if (!isset($_FILES['image']) || $_FILES['image']['error'] !== 0) {
    echo json_encode([
        "success" => false,
        "message" => "Please upload a book cover image."
    ]);
    exit;
}

// Check image type
$file_type = mime_content_type($_FILES['image']['tmp_name']);

$allowed_types = [
    'image/jpeg',
    'image/png',
    'image/webp'
];

if (!in_array($file_type, $allowed_types)) {
    echo json_encode([
        "success" => false,
        "message" => "Only JPG, PNG and WEBP images are allowed."
    ]);
    exit;
}

// Check image size
if ($_FILES['image']['size'] > 5 * 1024 * 1024) {
    echo json_encode([
        "success" => false,
        "message" => "Image size must be less than 5 MB."
    ]);
    exit;
}

// Generate unique filename
$extensions = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/webp' => 'webp'
];

$new_image_name = uniqid() . "." . $extensions[$file_type];

// Save image path
$upload_folder = "../uploads/";
$image = "uploads/" . $new_image_name;

// Move image into uploads folder
if (!move_uploaded_file(
    $_FILES['image']['tmp_name'],
    $upload_folder . $new_image_name
)) {
    echo json_encode([
        "success" => false,
        "message" => "Image upload failed."
    ]);
    exit;
}

$sql = "INSERT INTO books 
(user_id, title, author, category, description, book_type, price, image)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";


$stmt = mysqli_prepare($conn, $sql);
?>