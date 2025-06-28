async function connectToDatabase(user, password){
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("✔ Conexão com banco de dados estabelecida com sucesso.");
    } else {
        console.log("🤮 Falha de login/senha. Não foi possível fazer a conexão com o banco de dados.");
    }
}

export default connectToDatabase;