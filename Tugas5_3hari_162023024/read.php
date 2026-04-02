<?php include 'connection/connection.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Read Data</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="container">
        <h2>Read Data</h2>
        <div class="list-container">
            <?php
                $query = mysqli_query($conn, "SELECT * FROM users");
                while ($row = mysqli_fetch_assoc($query)): 
                ?>
                <div class="list-item">
                    <div class="info">
                        <strong><?php echo $row['username']; ?></strong><br>
                        <span><?php echo $row['email']; ?></span>
                    </div>
                    <div class="actions">
                        <a href="update.php?id=<?php echo $row['id']; ?>" class="btn-edit">Edit</a>
                        <a href="process/process_delete.php?id=<?php echo $row['id']; ?>" 
                        class="btn-delete" onclick="return confirm('Are you sure?')">Delete</a>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
        <div class="footer-nav">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>
</html>