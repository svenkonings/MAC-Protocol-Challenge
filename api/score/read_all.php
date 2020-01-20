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
echo json_encode($score->read($level));
