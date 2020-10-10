const Category = require('../models/category-model');
const mongoose= require('mongoose')

const createCategory = (req,res) => {
    const body = req.body;
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a categoty'
        })
    }
    const category = new Category(body);

    if(!category){
        return res.status(400).json( {
            success: false,
            error: err
        })
    }

    category.save()
        .then(() => {
            return res.status(201).json({
                success:true,
                id:category._id,
                message: 'category created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'category not created!'
            })
        })
}
const getCategories = (req,res) => {
   Category.find()
        .then(categories => {
                return res.status(200).json({ success:true,data:categories});
        })
        .catch(error => {
            return res.status(400).json({
                success:false,
                error: error,
                message: 'Could not get categories!'
            })
        })
}
const updateCategory = (req, res) => {
    const body = req.body 
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update', 

        })
    }
    Category.findOne({ _id: req.params.id})
    .then(Category => {
        Category.name = body.name
        Category.save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: Category._id,
                message: 'category updated!',
            })
        })
        .catch(error => {
           return res.status(500).json({
               error: error.message,
               message: 'category could not be updated!'
           })
        })


    })
    .catch(error => {
        return res.status(404).json({
            error: error.message,
            message: 'category not found!',
        })
    })
}  
// const deleteCategory = (req,res)=>{
//          Category.findOneAndDelete({ _id:req.params.id},(err,user)=>{
//             if(err){return res.status(400).json({success:false,error:err.message})}
//             if(!user){
//                 return res.status(400).json({success:false,error:err.message})}
//                 return res.status(200).json({success:true,data:user})
//                     }).catch(err=>console.log(err))
// }
const deleteCategory = (req,res)=>{
    Category.findOneAndDelete({ _id:req.params.id}).then(category =>{
        if(!category){
        return res.status(400).json({success:false,error:'Category not found'})}
        return res.status(200).json({success:true,data:category})  
    }).catch(err=>console.log(err))
}
const getCategorybyid = (req,res)=>{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({success:false,message:'Id not valid'})}
         Category.findOne({_id:req.params.id}).then(user=>{
            if(!user){
                return res.status(404).json({success:false,message:'category not found'})}
                
                return res.status(200).json({success:true,data:user})
            }).catch(err =>res.status(400).json({success:false,message:'category request',error:err.message}))
} 
module.exports ={ getCategories,createCategory,updateCategory,deleteCategory,getCategorybyid}