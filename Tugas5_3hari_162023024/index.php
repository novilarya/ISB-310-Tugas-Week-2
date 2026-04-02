<!DOCTYPE html>
<html lang="en">
<head>
    <title>Create Data</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="container">
        <h2>Create Data</h2>
        <form action="process/process_create.php" method="POST">
            <label>Name:</label>
            <input type="text" name="username" placeholder="Your name" required>
            <label>Email:</label>
            <input type="text" name="email" placeholder="Your email" required>
            <?php if (isset($_GET['status'])): ?>
                <?php 
                    $class = ($_GET['status'] == 'success') ? 'alert-success' : 'alert-danger'; 
                ?>
                
                <div class="alert <?php echo $class; ?>">
                    <?php
                        if ($_GET['status'] == 'success') echo "User has been successfully inserted.";
                        if ($_GET['status'] == 'empty') echo "Username and email cannot be empty!";
                        if ($_GET['status'] == 'exists') echo "This email is already registered. Please try another.";
                        if ($_GET['status'] == 'invalid_email') echo "Invalid email address.";
                    ?>
                </div>
            <?php endif; ?>
            <button type="submit" name="insert">Insert</button>
        </form>
        <div class="footer-nav">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>
</html>