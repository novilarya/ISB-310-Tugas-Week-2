<?php 
    include 'connection/connection.php';
    $id = $_GET['id'];
    $user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM users WHERE id=$id"));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Update User</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="container">
        <h2>Update User</h2>
        <form action="process/process_update.php" method="POST">
            <input type="hidden" name="id" value="<?= $user['id'] ?>">
            <label>Name:</label>
            <input type="text" name="username" value="<?= $user['username'] ?>">
            <label>Email:</label>
            <input type="text" name="email" value="<?= $user['email'] ?>">
            <button type="submit" name="update">Update</button>
        </form>
        <div class="footer-nav">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>
</html>