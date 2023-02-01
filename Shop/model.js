
import {  DataTypes } from "sequelize";
import shopping  from "./db.js";
 const ShoppingCart = shopping.define(
    "shopping",
     {
     id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
     },
     name:{
        type:DataTypes.STRING,
        allowNull:false
     },
     category:{
        type:DataTypes.STRING,
        allowNull:false
     },
     description:{
        type:DataTypes.STRING,
        allowNull:false
     },
     image:{
        type:DataTypes.STRING,
        allowNull:false
     },
     price:{
        type:DataTypes.NUMBER,
        allowNull:false
     }
    }
 )

 export default ShoppingCart
//  {
//     "id": 1,
//     "name": STRING,
//     "category": STRING, 
//     "description": TEXT, 
//     "image":"url(IMAGE LINK)",
//     "price":FLOAT,
//     "createdAt": "DATE",
//     "updatedAt": "DATE",   
// }

