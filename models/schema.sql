DROP DATABASE IF EXISTS movie_chats_db;
CREATE DATABASE movie_chats_db;

USE movie_chats_db;

CREATE TABLE user_
(
    user_id CHAR(32),
    user_login VARCHAR(255),
    user_password CHAR(64),
    user_email VARCHAR(400),
    PRIMARY KEY (user_id)
);

CREATE TABLE message
(
    message_id CHAR(32),
    message_datetime DATETIME,
    message_text TEXT,
    message_chat_id CHAR(32),
    message_user_id CHAR(32),
    PRIMARY KEY (message_id)
);

CREATE TABLE user_chat
(
    user_chat_chat_id CHAR(32),
    user_chat_user_id CHAR(32),
    PRIMARY KEY (user_chat_chat_id,user_chat_user_id)
);

CREATE TABLE chat
(
    chat_id CHAR(32),
    chat_topic VARCHAR(32),
    chat_password CHAR(64),
    user_chat_user_id CHAR(32),
    PRIMARY KEY (chat_id)
);