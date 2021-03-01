DROP TABLE IF EXISTS workspaces;
CREATE TABLE workspaces (
    id VARCHAR(6) PRIMARY KEY,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    version INTEGER,
    workspace XML
);
