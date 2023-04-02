CREATE DATABASE PomodoroTimer

CREATE TABLE PomodoroTimer.dbo.usuario (
	id int IDENTITY(1,1) NOT NULL,
	nome varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	email varchar(40) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	senha varchar(40) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK_usuario PRIMARY KEY (id)
);

CREATE TABLE PomodoroTimer.dbo.tarefa (
	id int IDENTITY(1,1) NOT NULL,
	nome varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	duracao int NOT NULL,
	usuario_id int NOT NULL,
	ativa bit NULL,
	CONSTRAINT PK_tarefa PRIMARY KEY (id)
);

ALTER TABLE PomodoroTimer.dbo.tarefa ADD CONSTRAINT FK_usuario_id FOREIGN KEY (usuario_id) REFERENCES PomodoroTimer.dbo.usuario(id);