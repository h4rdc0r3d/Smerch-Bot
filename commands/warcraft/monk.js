const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monk', 
            group: 'warcraft',
            memberName: 'monk', 
            description: 'класс монах' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Монах")
            .addField("<:tank:567647267171991564> **Brewmaster**", "[ссылка на гайд](https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide)", true)
            .addField("<:heal:567647266962276352> **Mistweaver**", "[ссылка на гайд](https://www.icy-veins.com/wow/mistweaver-monk-pve-healing-guide)", true) 
            .addField("<:dd:567647267578707988> **Windwalker**", "[ссылка на гайд](https://www.icy-veins.com/wow/windwalker-monk-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#03ff8b")
            .setThumbnail("https://media.discordapp.net/attachments/521105677234601995/567640466183421973/9_3_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = MonkCommand;