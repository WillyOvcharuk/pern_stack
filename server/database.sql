CREATE DATABASE todo;

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);