<?php
session_start();
$con = mysqli_connect("localhost","root","","php");

if(isset($_POST['save_date']))
{
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];

    $query = "INSERT INTO info (name,number,email) VALUES ('$name','$number','$email')";
    $query_run = mysqli_query($conn, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Date values Inserted";
        header("Location: index.php");
    }
    else
    {
        $_SESSION['status'] = "Date values Inserting Failed";
        header("Location: index.php");
    }
}
?>
