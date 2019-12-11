<?php

class Score
{
    private $conn;
    private $exists;

    public $id;
    public $version;
    public $level;
    public $efficiency;
    public $fairness;
    public $score;
    public $queue;
    public $data;

    public function __construct(PDO $db)
    {
        $this->conn = $db;
        $this->exists = false;
    }

    public function create()
    {
        if ($this->exists) return true;
        $query = "INSERT INTO scores SET id=?, version=?, level=?, efficiency=?, fairness=?, score=?, queue=?, data=?;";
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute([$this->id, $this->version, $this->level, $this->efficiency, $this->fairness, $this->score, $this->queue, $this->data])) {
            $this->exists = true;
            return true;
        } else {
            return false;
        }
    }

    public function generateId($data)
    {
        $this->id = substr(hash("sha1", $data), 0, 6);
        $query = "SELECT * FROM scores WHERE id=?;";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$this->id]);
        $existing_score = $stmt->fetch(PDO::FETCH_OBJ);
        while ($existing_score != false && !$this->exists) {
            if (
                $this->level == $existing_score->level &&
                $this->version == $existing_score->version &&
                $this->efficiency == $existing_score->efficiency &&
                $this->fairness == $existing_score->fairness &&
                $this->score == $existing_score->score &&
                $this->queue == $existing_score->queue &&
                $this->data == $existing_score->data
            ) {
                $this->exists = true;
            } else {
                ++$this->id;
                $stmt->execute([$this->id]);
                $existing_score = $stmt->fetch(PDO::FETCH_OBJ);
            }
        }
    }

    public function read($level, $offset, $amount)
    {
        $query = "SELECT * FROM scores WHERE level=:level ORDER BY score DESC LIMIT :offset, :amount;";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":level", $level);
        $stmt->bindParam(":amount", $amount, PDO::PARAM_INT);
        $stmt->bindParam(":offset", $offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function read_one($id)
    {
        $query = "SELECT * FROM scores WHERE id=?;";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
