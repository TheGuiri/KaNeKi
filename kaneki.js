const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

let prefix = config.prefix;

client.on("ready", () => {
  console.log("Quiero protegerlos a todos.");
 });
 
 client.on("message", (message) => {
  if(message.content.startsWith("eren")) {
    message.channel.send("sigue vivo, hazte zoofilico");
  }

 });
 
 client.on("message", (message) => {
  if(message.content.startsWith("puta")) {
    message.channel.send("maldigo el aceite con el que se engrasan las visagras del ataud de tus putos muertos, desgraciao");
  }

 });


 client.on("message", (message) => {
    if(message.content.startsWith("irene")) {
      message.channel.send("hablabas de cristina?");
    }
  
   });
   


 client.login(config.token);



