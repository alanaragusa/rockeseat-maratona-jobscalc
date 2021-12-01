const Database = require('./config')

/* estrutura de função para o async e await */
const initDb = {
    async init(){

    /* iniciando a conexão com o banco de dados */
    const db = await Database()

    /* primary key - numero identificador da informação que nao se repete 
    toda tabela precisa ter id 
    int e integer - numero inteiro */
    await db.exec(`CREATE TABLE profile(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        value_hour INT
    )`);

    await db.exec(`CREATE TABLE jobs(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT,
        daily_hours INT,
        total_hours INT,
        created_at DATETIME
    )`);

    /* inserindo um dado nas tabelas */
    await db.run(`INSERT INTO profile(
        name,
        avatar,
        monthly_budget,
        days_per_week,
        hours_per_day,
        vacation_per_year
    ) VALUES (
        "Alana",
        "https://github.com/alanaragusa.png",
         3000,
        5,
        5,
        4
    );`)

    await db.run(`INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
    ) VALUES (
        "Pizzaria Guloso",
        2 ,
        1 ,
        1617514376018
    );`)

    await db.run(`INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
    ) VALUES (
        "OneTwo Project",
        3 ,
        47 ,
        1617514376018
    );`)

    /* finalizando conexao com o banco de dados */
    await db.close()

    } 
}

initDb.init()