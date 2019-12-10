<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/Workspace.php';

$database = new Database();
$db = $database->getConnection();
$workspace = new Workspace($db);
$file = file_get_contents("php://input");
$json = json_decode($file);

if (!empty($json->version) && !empty($json->workspace)) {
    $workspace->version = $json->version;
    $workspace->workspace = $json->workspace;
    $workspace->generateId($file);

    if ($workspace->create()) {
        http_response_code(201);
        echo json_encode(array("id" => $workspace->id));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create workspace."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create workspace. Data is incomplete."));
}
