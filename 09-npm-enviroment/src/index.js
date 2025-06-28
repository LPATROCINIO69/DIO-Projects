import connectToDatabase from "./database/data.js"; 


async function main(){
    console.log("📢 Teste de utilização de variáveis de ambiente armazenadas em .ENV");
    console.log(process.env.USERDATABASE);
//   await connectToDatabase("sache","dilitio");
    await connectToDatabase("naruto","uzumaki");
}

main(); 