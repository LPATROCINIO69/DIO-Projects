const databaseType = {
    userType: "admin",
    typeData: "dataLocal"
};

async function connectToDatabase(dataName){
    // TODO: lógica para conexão com banco de dados
    console.log("Conectado ao banco de dados " + dataName);
}

async function disconnectDatabase(){
    console.log("Desconectando o banco de dados.");
}

export {connectToDatabase, disconnectDatabase, databaseType};