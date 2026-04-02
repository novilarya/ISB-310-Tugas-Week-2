<?php
include '../connection/connection.php';

if (isset($_POST['insert'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    if (empty($username) || empty($email)) {
        header("Location: ../index.php?status=empty");
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../index.php?status=invalid_email");
    } else {
        $check = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' OR email='$email'");
        if (mysqli_num_rows($check) > 0) {
            header("Location: ../index.php?status=exists");
        } else {
            mysqli_query($conn, "INSERT INTO users (username, email) VALUES ('$username', '$email')");
            header("Location: ../index.php?status=success");
        }
    }
    exit();
}