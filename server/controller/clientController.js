const asyncHandler = require("express-async-handler")
const Client = require("../models/clientsModel")

const addClient = asyncHandler(async(req, res)=>{

    const {client_general_branch,
        client_general_name,
        client_general_type,
        client_general_sic,
        client_general_group,
        client_general_beds,
        client_general_facs,
        client_general_national, 
        client_general_gpo, 
        client_general_accountManager,
        client_general_rating,
        client_general_branchVisibility,
        client_general_notes,
        client_general_disciplinesServiced} = req.body

    const alreadyExist =  await Client.findOne({client_general_name})

    if(alreadyExist){
        res.status(400)
        throw new Error("Client Already Exist")
    }

    const client = await Client.create(req.body)

    res.status(200).json(client)
})

const getSingleClient = asyncHandler(async(req, res)=>{
    const client = await Client.findById(req.params.id)

    if(client){
        res.status(200).json(client)
    }else{
        res.status(401)
        throw new Error("Client Not Found")
    }
})

const getAllClients = asyncHandler(async(req, res)=>{

    const clients = await Client.find()

    if(clients.length > 0){
        res.status(200).json(clients)
    }else{
        res.status(401)
        throw new Error("Clients Collection Empty")
    }
})


const updateClient = asyncHandler(async(req, res)=>{
    const client = await Client.findById(req.params.id)

    if(!client){
        throw new Error("Client Not Found!...")
    }
    
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {new:true})
    // const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedClient)
})

const deleteClient = asyncHandler(async(req, res)=>{
    const client = await Client.findById(req.params.id)

    if(!client){
        throw new Error("Client Not Found!...")
    }
    client.remove()
    // const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json({message:"Client Deleted Successfully!..."})
})
module.exports = {getAllClients, addClient, getSingleClient, updateClient, deleteClient}
