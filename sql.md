### Create database
```sql
create database tushant_db;
```
### Use database
```sql
use tushant_db;
```
### Create table for users
```sql
create table users (id int primary key auto_increment,user_id int,unique(user_id),
name varchar(100),email
varchar(100) not null,password varchar(30) NOT NULL, role char(5),
unique (email),
check ( role in ('USER','ADMIN')),
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp
);
```
### Insert data into users table
```sql
insert into users (user_id, name , email,password,role) values (101,'Tushant','tushantgarg7g@gmail.com','pass123','USER');
insert into users(user_id, name, email,password, role) values(102,'garg','garg@gmail.com','pass123','ADMIN');
insert into users (user_id, name , email,password,role) values (103,'test','test@gmail.com','pass123','USER');
```
### Select the users table to get data
```sql
select *from users;
```
### To drop users table
```sql
drop table users;
```
### Create table for ticket
```sql
create table ticket(id bigint primary key auto_increment,user_id int,
title varchar(100),department char(50),
check ( department in ('Development','Sales','Networking','Csml')),
priority char(50), check ( priority in ('Low','Medium','High')),
description varchar(500),
mobile_number bigint, unique(mobile_number),
team_assign char(50),
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp
);
```
### Insert data into ticket table
```sql
insert into ticket (user_id, title , department,priority,description,mobile_number,team_assign) 
values (101,'Software','Development','Low','I want to install Mysql software',7508645003,'NULL');
insert into ticket (user_id, title , department,priority,description,mobile_number,team_assign) 
values (103,'Hardware','Networking','High','Router or Lan wire is not working',9855174503,'NULL');
```
### Select the ticket table to get data
```sql
select *from ticket;
```
### To drop ticket table
```sql
drop table ticket;
```
### Create table to assign team
```sql
create table team_assign(team char(50),
check ( team in ('Development Team','Sales Team','Networking Team','Csml Team','Hardware Team','Software Team')),
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp
);
```
### Update the ticket table to assign team
```sql
update ticket set team_assign ='Hardware Team',modified_date=NOW() where id = 1;
```
### To join the users and ticket table
```sql
select * from users u, ticket t where u.user_id = t.user_id;
```
### For Admin to see only all USER
```sql
select *from users where role='USER';
```
### For Admin to see which team assigned to USER
```sql
select *from ticket where team_assign='Hardware Team';
```
### For Admin to Group the ticket by assigned team
```sql
select team_assign,count(*) from ticket group by team_assign;
```
