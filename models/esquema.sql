-- Rafaela Ferreira Dos Santos RA 23538

CREATE SCHEMA consultorioMedico;

CREATE TABLE consultorioMedico.Usuarios (
    ID_Usuario INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Nome_Usuario VARCHAR(255) NOT NULL,
    Senha VARCHAR(255) NOT NULL
);

CREATE TABLE consultorioMedico.Especialidades (
    ID_Especialidade INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Nome_Especialidade VARCHAR(255) NOT NULL
);

CREATE TABLE consultorioMedico.Medicos (
    ID_Medico INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Nome_Medico NVARCHAR(255) NOT NULL,
    ID_Especialidade INT,
    FOREIGN KEY (ID_Especialidade) REFERENCES consultorioMedico.Especialidades(ID_Especialidade)
);

CREATE TABLE consultorioMedico.Pacientes (
    ID_Paciente INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Nome_Paciente NVARCHAR(255) NOT NULL
);

CREATE TABLE consultorioMedico.TiposConsulta (
    ID_TipoConsulta INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Nome_TipoConsulta NVARCHAR(255) NOT NULL
);

CREATE TABLE consultorioMedico.StatusConsulta (
    ID_StatusConsulta INT PRIMARY KEY IDENTITY(1,1)NOT NULL,
    Nome_StatusConsulta NVARCHAR(255) NOT NULL
);

CREATE TABLE consultorioMedico.Consultas (
    ID_Consulta INT PRIMARY KEY IDENTITY(1,1)NOT NULL,
    Data DATE,
    Hora TIME,
    ID_Medico INT,
    ID_Paciente INT,
    ID_TipoConsulta INT,
    ID_StatusConsulta INT,
    FOREIGN KEY (ID_Medico) REFERENCES consultorioMedico.Medicos(ID_Medico),
    FOREIGN KEY (ID_Paciente) REFERENCES consultorioMedico.Pacientes(ID_Paciente),
    FOREIGN KEY (ID_TipoConsulta) REFERENCES consultorioMedico.TiposConsulta(ID_TipoConsulta),
    FOREIGN KEY (ID_StatusConsulta) REFERENCES consultorioMedico.StatusConsulta(ID_StatusConsulta)
);

CREATE TABLE Email (
    ID_Email INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Email_Paciente NVARCHAR(255) NOT NULL,
    ID_Consulta INT,
    FOREIGN KEY (ID_Consulta) REFERENCES consultorioMedico.Consultas(ID_Consulta)
);


CREATE TABLE Login (
    ID_Login INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);