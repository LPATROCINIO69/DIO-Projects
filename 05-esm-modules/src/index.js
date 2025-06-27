import { connectToDatabase, disconnectDatabase,databaseType } from "./utils/database.js"; 
import {getDataFromApi,key} from "./utils/api.js";
//console.log("Hello Word!");
connectToDatabase("meuDatabase");
disconnectDatabase();

getDataFromApi();