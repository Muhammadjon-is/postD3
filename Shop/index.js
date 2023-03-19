import express from "express"
import createHttpError from "http-errors"
 import { Op } from "sequelize"
import ShoppingCart from "./model.js"


 const shoppingRouter = express.Router()

//  !Post
 shoppingRouter.post("/", async (req, res, next) => {
    try {
        const {_id} = await   ShoppingCart.create(req.body)
        res.send(201).send({_id})
    } catch (error) {
        next (error)
    }
  })
  
//   !get
  shoppingRouter.get("/", async (req, res, next) => {
    try{
  const query = {}
  if(req.query.name) query.name = {[Op.iLike]: `${req.query.name} %`}
  const products  = await ShoppingCart.findAll({
    where:{...query},
    attributes:["name", "category"]
  })
   res.send(products)
    }catch(error){
        console.log(error);
    }
  })

//   !getById
  shoppingRouter.get("/:productID", async (req, res, next) => {
    try{
  const  product = await ShoppingCart.findByPk(req.params.productID ,  {
    attributes:{exclude:["createdAt", "updatedAt"]},
  })
  if(product){
    res.send(product)
  } else {
    next(createHttpError(404, `Product with id ${req.params.productID} not found!`))
  }
    }catch(error){
        console.log(error);
    }
  })
//   !Put
  shoppingRouter.put("/:productID", async (req, res, next) => {
    try{
   const [ProductUpdate, ProductUpdatedRecords] = await ShoppingCart.update(req.body, {
    where :{id:req.params.productID},
    returning:true,
   })
    if(ProductUpdate === 1) {
        res.send(ProductUpdatedRecords[0])
    } else {
        next(createHttpError(404, `Product not found with id ${req.params.productID}`))
    }
    }catch(error){
        console.log(error);
    }
  })

//   !Delete
  shoppingRouter.delete("/:productID", async (req, res, next) => {
    try{
   const deletedProducts = await ShoppingCart.destroy({where:{id: req.params.productID}})
   if(deletedProducts === 1){
  res.send(200).send()
  } else {
    next(createHttpError(404, `Product not found with id ${req.params.productID}`))
  }
    }catch(error){
        console.log(error);
    }
    
  })



export default shoppingRouter




