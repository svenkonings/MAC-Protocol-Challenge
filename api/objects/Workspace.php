<?php

class Workspace
{
    private $conn;
    private $exists;

    public $id;
    public $version;
    public $workspace;

    public function __construct(PDO $db)
    {
        $this->conn = $db;
        $this->exists = false;
    }

    public function create()
    {
        if ($this->exists) return true;
        $query = "INSERT INTO workspaces (id, version, workspace) VALUES (?, ?, ?);";
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute([$this->id, $this->version, $this->workspace])) {
            $this->exists = true;
            return true;
        } else {
            return false;
        }
    }

    public function generateId($data)
    {
        $this->id = substr(hash("sha1", $data), 0, 6);
        $query = "SELECT * FROM workspaces WHERE id=?;";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$this->id]);
        $existing_workspace = $stmt->fetch(PDO::FETCH_OBJ);
        while ($existing_workspace != false && !$this->exists) {
            if ($this->workspace == $existing_workspace->workspace) {
                $this->exists = true;
            } else {
                $this->id = str_increment($this->id);
                $stmt->execute([$this->id]);
                $existing_workspace = $stmt->fetch(PDO::FETCH_OBJ);
            }
        }
    }

    public function read_one($id)
    {
        $query = "SELECT * FROM workspaces WHERE id=?;";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
