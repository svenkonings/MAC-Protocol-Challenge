<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/Database.php';
include_once '../objects/Score.php';

$database = new Database();
$db = $database->getConnection();
$score = new Score($db);
http_response_code(200);

$level = $_GET['level'];
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$amount = 50;
$offset = ($page - 1) * $amount;
echo json_encode($score->read($level, $offset, $amount));