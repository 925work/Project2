USE movie_chats_db;

CREATE TABLE post
(
    post_id CHAR(32),
    post_datetime DATETIME,
    post_text TEXT,
    post_chat_id CHAR(32),
    post_userName CHAR(32),
    PRIMARY KEY (post_id)
);
CREATE TABLE movie_title
(
    movie_id CHAR(32),
    PRIMARY KEY (movie_id)
);