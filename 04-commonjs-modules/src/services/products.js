// Trabalha com todas as funções relativas a produtos

const productType ={
    version: "digital",
    tax: "x1"
}

async function getFullName(codeId, productName){
    console.log("Product: " + codeId + "--" + productName);
}

// hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("Product: " + productName);
}

module.exports ={
    getFullName,
    getProductLabel,
    productType
}