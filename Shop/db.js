import { Sequelize } from "sequelize";

const {PG_ADMIN_PASSWORD,  PG_ADMIN_USER , PG_DB_NAME , PG_HOST ,  PG_PORT} = process.env

const shopping = new Sequelize(PG_DB_NAME, PG_ADMIN_USER, PG_ADMIN_PASSWORD, 
    {
        host:PG_HOST,
        port:PG_PORT,
        dialect:"postgres"
    }
)



export const  shoppingConnect = async () => {
    try{
        await shopping.authenticate()
        console.log("Succesfully connected to POstgres");
    } catch (error){
        console.log(error);
        process.exit(1)
    }
}
export const shoppingSync = async () => {
    await shopping.sync({alter:true})
    console.log("All tables Sucessfully");
}
export default shopping