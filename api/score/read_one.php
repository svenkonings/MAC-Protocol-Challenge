<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(array("message" => "Id is not set."));
    return;
}

include_once '../config/Database.php';
include_once '../objects/Score.php';

$database = new Database();
$db = $database->getConnection();
$score = new Score($db);
http_response_code(200);

$id = $_GET['id'];
echo json_encode($score->read_one($id));
