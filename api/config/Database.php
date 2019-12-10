<?php

include_once 'DatabaseCredentials.php';

class Database extends DatabaseCredentials
{
    public $conn;

    public function getConnection()
    {
        if ($this->conn == NULL) {
            $this->conn = new PDO($this->dsn, $this->username, $this->password);
        }
        return $this->conn;
    }
}
