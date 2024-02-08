import express from "express"

const routes = express.Router()

let lista = ["leticia","maria","eduardo","joao"]

routes.get("/nomes/:nome", (req,res)=>{
   const {nome} = req.params
    if(nome == lista.find(item => item === nome)){
        return res.status(200).json(`${nome} esta na lista`)
    }
    else{ 
        return res.status(200).json(`${nome} nao encontrado`)
    }

})

export default routes

    // try{
    //     const {nome} = req.params
    //     return res.status(200).json(`ola  ${nome}`)
    // }
    // catch(error){
    //     return res.status(500).json("erro ao se apresentar")
    // }