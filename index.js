const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
const config = require("./config.json");       //load the config.json file
const Enmap = require("enmap")                 //load the enmap library
const canvacord = require("canvacord")         //load the canvacord library
client.points = new Enmap({ name: "points" }); //For ranking system
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
const ranking = require("./ranking");         //load the ranking file
ranking(client);                              //call the ranking file with the client
client.login(config.TOKEN);                    //start the bot with the bot token
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.send("Pog Bot is Online!"));

app.listen(port, () => console.log(`Example app listening at http://local host:${port}`));