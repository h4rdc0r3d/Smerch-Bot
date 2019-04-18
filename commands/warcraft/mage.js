const commando = require('discord.js-commando');
const discord = require('discord.js');

class MageCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mage', 
            group: 'warcraft',
            memberName: 'mage', 
            description: 'класс маг' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Маг")
            .addField("<:dd:567647267578707988> **Arcane**", "[ссылка на гайд](https://www.icy-veins.com/wow/arcane-mage-pve-dps-guide)", true)
            .addField("<:dd:567647267578707988> **Fire**", "[ссылка на гайд](https://www.icy-veins.com/wow/fire-mage-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988> **Frost**", "[ссылка на гайд](https://www.icy-veins.com/wow/frost-mage-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#5ec5ee")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417783084351491/7_6_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = MageCommand;
