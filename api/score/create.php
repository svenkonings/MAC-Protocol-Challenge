<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/Score.php';

$database = new Database();
$db = $database->getConnection();
$score = new Score($db);
$file = file_get_contents("php://input");
$json = json_decode($file);

if (
    !empty($json->score) &&
    !empty($json->queue) &&
    !empty($json->data)
) {
    $score->score = $json->score;
    $score->queue = json_encode($json->queue);
    $score->data = json_encode($json->data);
    $score->generateId($file);

    if ($score->create()) {
        http_response_code(201);
        echo json_encode(array("id" => $score->id));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create score."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create score. Data is incomplete."));
}
