DROP TABLE IF EXISTS scores;
CREATE TABLE scores (
                        id VARCHAR(6) PRIMARY KEY,
                        ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        score DECIMAL(6,2),
                        queue JSON,
                        data JSON
);
