exports.signup = async (req,res) => {
    const createNewUser = await userModel.create(req.body)
    return res.status(200).send({success:true,message:"You are all set",data:createNewUser})
}