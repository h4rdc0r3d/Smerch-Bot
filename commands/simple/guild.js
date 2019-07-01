const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'guild',
            group: 'simple',
            memberName: 'guild',
            description: 'Информация о Гильдии'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("!!!!")
            .setDescription ("Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://1eu.funnyjunk.com/thumbnails/comments/So+apparently+we+learnt+how+the+orcs+do+it+_cca58968f56f4601272ae9737036d3ea.jpg")
            .setURL("")
            .setFooter("(c)")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = InfoCommand;
