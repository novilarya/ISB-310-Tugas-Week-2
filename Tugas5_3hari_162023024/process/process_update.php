<?php
include '../connection/connection.php';
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    mysqli_query($conn, "UPDATE users SET username='$username', email='$email' WHERE id=$id");
    header("Location: ../read.php?status=updated"); 
    exit();
}