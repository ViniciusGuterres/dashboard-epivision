drop database verifica;
create database if not exists verifica;
use verifica;
drop table if exists verifica.epidados;
create table if not exists verifica.epidados(
    datahora varchar(80),
    predicao varchar(128)
);
select * from verifica.epidados;