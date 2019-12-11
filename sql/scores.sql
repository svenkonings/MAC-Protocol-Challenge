DROP TABLE IF EXISTS scores;
CREATE TABLE scores (
                        id VARCHAR(6) PRIMARY KEY,
                        ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        version INTEGER,
                        level INTEGER,
                        efficiency DECIMAL(5,2),
                        fairness DECIMAL(5,2),
                        score DECIMAL(6,2),
                        queue JSON,
                        data JSON
);
