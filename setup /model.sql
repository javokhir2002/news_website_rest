create database news_website;

create type status as enum('super','admin','not active');

create type gender as enum('male','female');

create table admins(
    admin_id serial primary key,
    name text not null,
    password text not null UNIQUE,
    status status default 'admin'
);

create table users(
    user_id serial primary key,
    first_name text not null,
    last_name text not  null,
    password text not null,
    email text not null,
    gender gender not null
);

create table languages(
    lang_id serial primary key,
    name varchar(30) not null
);

create table categories(
    category_id serial primary key,
    name text not null,
    lang_id int not null references languages (lang_id)
);

create table news (
    news_id serial primary key,
    lang_id int not null references languages (lang_id),
    category_id int not null references categories (category_id),
    title text not null,
    body text not null,
    img_link text not null,
    time timestamptz default current_timestamp
);

create table coments(
coment_id  serial primary key,
news_id int not null references news (news_id),
user_id int not null references users (user_id),
body text not null
);
