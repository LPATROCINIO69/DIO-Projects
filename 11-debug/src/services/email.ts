async function getBaseEmail(senderName:string):Promise<string> {
    let base = `Olá ${senderName}, gostaria de me candidatar a vaga de emprego.`;
    base += "\nEstou deixando o meu currículo.";
    return base;
}

export {getBaseEmail};