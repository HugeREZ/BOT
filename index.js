const Discord = require("discord.js");
const kes = new Discord.Client();
const { Client, Attachment } = require('discord.js');

var pref = "//";
kes.login("NTEyMDEyMDI4MzcwNjE2MzYw.DszQGQ.c0serCnjqP2WV3N1U3NkV6Yqz7M");

kes.on("ready", () => {
    console.log("I am ready!");
  });

kes.on('message', function(message){
    console.log(message.content)
});

