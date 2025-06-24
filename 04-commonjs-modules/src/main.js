const { getFullName, getProductLabel } = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main(){
    // console.log('Olá meu nome é system.');
    getFullName("408","mousepad");
    getProductLabel("Teclado");

    // console.log("Production: "+ config.production);
    // console.log(product.productType.version);
    // console.log(product.productType.tax);

    database.connectToDatabase("DB_History");
    database.disconnectToDatabase("DB_History");

}


main();