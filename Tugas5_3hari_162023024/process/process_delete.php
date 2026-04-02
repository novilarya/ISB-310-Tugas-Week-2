<?php
include '../connection/connection.php';
$id = $_GET['id'];
if (isset($id)) {
    mysqli_query($conn, "DELETE FROM users WHERE id=$id");
    header("Location: ../read.php?status=deleted");
    exit();
}