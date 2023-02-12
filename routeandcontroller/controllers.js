const documentModel = require('../model.js')

const setHome = async (req,res)=>{
    res.send(`<a href = "/roblox">Roblox </a>`)
}

const enterData = async (req,res)=>{
    try {
        console.log(req.body)
        const {name:playerName,cash:playerCash} = req.body
        console.log(`player name is ${playerName} and they have ${playerCash} in cash`)
        res.send(playerCash,playerName)
       
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const getreq = async (req,res)=>{
    res.send("Hello World")
};

module.exports = {
    getreq,
    setHome,
    enterData,
};