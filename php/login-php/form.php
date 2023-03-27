<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "react-login";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if the form data was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = json_decode(file_get_contents("php://input"));
  $name = $data->name;
  $email = $data->email;
  $text = $data->text;

  // Insert the data into the database
  $sql = "INSERT INTO form (name, email, text)
  VALUES ('$name', '$email', '$text')";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Record created successfully']);
  } else {
    echo json_encode(['message' => 'Error: ' . $conn->error]);
  }
}

$conn->close();
?>
