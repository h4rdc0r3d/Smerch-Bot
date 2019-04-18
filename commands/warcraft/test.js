const commando = require('discord.js-commando');
const discord = require('discord.js');

class DemonCommand extends commando.Command
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
            .setTitle("Класс Death Knight")
            .addField("<:tank:567647267171991564> **Most**", "[ссылка на гайд](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide)" + "[Blood](https://bloodmallet.com/index.html#death_knight_blood")), true)
            .addField ("bloodmalet" , "[Blood](https://bloodmallet.com/index.html#death_knight_blood)", false)
            .addField("<:dd:567647267578707988> **Frost**", "[ссылка на гайд](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide)", true)
            .addField ("bloodmalet" , "[Frost](https://bloodmallet.com/index.html#death_knight_frost)", false)
            .addField("<:dd:567647267578707988> **Lost**", "[ссылка на гайд](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide)", true)
            .addField ("bloodmalet" , "[Unholy](https://bloodmallet.com/index.html#death_knight_unholy)", false)
            .setDescription ("Выберите спек")
            .setColor("#bc1c34")
            .setFooter("(c) Smerch Bot")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417827917266971/9_7_.png")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = DemonCommand;
