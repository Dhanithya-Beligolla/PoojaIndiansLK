const express=require("express")


const salarymodel = require("../models/salarymodels");

const router = express.Router();

router.post("/create",async(req,res)=>{
    const data=new salarymodel(req.body);
    await data.save();
    res.send({success:true,message:"record added"})
})

router.get("/",async(req,res)=>{
    const data=await salarymodel.find({})
    res.json({success:true,message:"",data:data})
})

router.put("/update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await salarymodel.updateOne({_id:id},rest)
    res.json({success:true,message:"updated successfully",data:data})


})

router.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    const data=await salarymodel.deleteOne({_id:id})
    res.json({success:true,messsage:"record deleted"})
})

router.get("/salary/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await salarymodel.findById(id);

        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "record fetched successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});


router.get("/count_pay",async(req,res)=>{
    try{
        const users=await salarymodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"salary count successfully",data:data})
    }

})


module.exports = router;