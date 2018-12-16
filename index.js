const Discord = require("discord.js");
const kes = new Discord.Client();
const config = require("./config.json");
const { Client, Attachment } = require('discord.js');

//const pref = "//";
//kes.login("NTEyMDEyMDI4MzcwNjE2MzYw.DszQGQ.c0serCnjqP2WV3N1U3NkV6Yqz7M");
kes.login(config.token);

kes.on("ready", () => {
    console.log("I am ready!");
  });



function showMessage(){
    message.channel.send("Sho kogo");
}   


// It's help command
kes.on("message",(message)=>{
  if(!message.content.startsWith(config.pref)) return;

  if((message.content)== config.pref+"help")
  {
    const attachment = new Attachment('https://pp.userapi.com/c851120/v851120505/39ccd/roAwnweg_1E.jpg');
  
    message.reply('I have this command now: ' 
                    + '\n //Darova(just hello)'
                    + '\n //hugerez(avtor link)'
                    + '\n //ping(u real ping)'
                    + '\n //server(can show how much people sitting here)'
                    ); 
    message.channel.send(attachment);                               
  }
});
  
// About avtor == hugerez
kes.on("message",(message)=>{
  if(!message.content.startsWith(config.pref)) return;

  if((message.content)==config.pref+"hugerez")
  {
      
    message.reply("Ссылки на автора =3");
    message.reply("YOUTUBE: https://www.youtube.com/channel/UCVikmm94xXIKc3MV_3L-yxw?view_as=subscriber"  
                     + "\nINSTAGRAM: https://www.instagram.com/vladveb/"
                     + "\nPATREON:  https://www.patreon.com/kesshite"
                     + "\nTWITCH: https://www.twitch.tv/nobodyxt");
      //message.reply("INSTAGRAM: https://www.instagram.com/vladveb/");
      //message.reply("PATREON:  https://www.patreon.com/kesshite");
      //message.reply("TWITCH: https://www.twitch.tv/nobodyxt");
  
    message.channel.send("Напомните, почему у него везде ники разные ? 0_о");
  } 
});
  
// == "Darova"
kes.on("message",(message)=>{
  if(!message.content.startsWith(config.pref)) return;

  if((message.content)==config.pref + "Darova"){
      const attachment = new Attachment('https://i.imgur.com/wfDHjIS.jpg');
      //showMessage();
      message.reply("Попу мыл?");
      message.channel.send(attachment);
      //message.channel.send(showMessage());
    }
  });
  
  // == ping
kes.on("message", (message) => { // EventEmitter
    if(!message.content.startsWith(config.pref)) return;

    if(message.content == config.pref + "ping"){ // Check if message is "!ping"
        message.channel.send("Pinging ...") // Placeholder for pinging ... 
        .then((msg) => { // Resolve promise
          msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
        });
      }
  });
    
  // == server
kes.on("message",(message) =>{
    if(!message.content.startsWith(config.pref)) return;

    if (message.content == `${config.pref}server`) {
      const attachment = new Attachment("https://i.imgur.com/7thshK2.png");
      
      message.reply(`This server's name is: ${message.guild.name}`);
      message.reply(`\nWe have: ${message.guild.memberCount} bruudas here`);
      message.channel.send(attachment);
    }
  });
/*  
// ku ku and dude
kes.on("message",(message)=>{
  if(!message.content.startsWith(config.pref)) return;
  
  if(message.content.startsWith(config.pref+"ku")){
    message.channel.send("ko");
  }else
  if(message.content.startsWith(config.pref+"oh")){
    message.channel.send("dude");
  }
  if(message.content.startsWith(config.pref+"Саня")){
    message.channel.send("хуй соси");
  }
  if(message.content.startsWith(config.pref+"Влад")){
    message.channel.send("пидор");
  }
});
*/
kes.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.pref) !== 0) return;
 
  const args = message.content.slice(config.pref.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'ku') {
    message.channel.send('Ku xD');
  } else
  if (command === 'oh') {
    message.channel.send('dude...');
  }
  if(message.content.startsWith(config.pref+"Саня")){
    message.channel.send("хуй соси");
  }
  if(message.content.startsWith(config.pref+"Влад")) {
    message.channel.send("пидор");
  }
});

kes.on("message",message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.pref) !== 0) return;
 
  const args = message.content.slice(config.pref.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Нужно создать отдельный файл, как конфиг, куда нужно будет закидывать данные каждого юзера
  if (command === "asl") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
});
//if(!message.content.startsWith(config.pref)) return; - Это оптимизирует код и позволит уменьшить затраты процессора

kes.on("message",message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.pref) !== 0) return;
 
  const args = message.content.slice(config.pref.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
});







































/*
Just example for creating all if commands


kes.on("message",message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.pref) !== 0) return;
 
  const args = message.content.slice(config.pref.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  //u're code here
});
*/