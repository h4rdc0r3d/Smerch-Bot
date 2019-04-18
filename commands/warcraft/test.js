const commando = require('discord.js-commando');
const discord = require('discord.js');

class Demonhunter1Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'test', 
            group: 'warcraft',
            memberName: 'test', 
            description: 'класс demon hunter' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Demon Hunter")
            .addField(":dd: Unholy", "[ссылка на гайд](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-guide)", "[Ссылка на блудмаллет](https://bloodmallet.com/index.html#death_knight_unholy)", true)  
            .setDescription ("Выберите спек")
            .setColor("#992bc2")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417794732064768/7_10_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = Demonhunter1Command;
