const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rec',
            group: 'simple',
            memberName: 'rec',
            description: 'Информация для Рекрута'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Гильдия «Б Р И З» [СД - Орда]")
            .addField("Мать", "Васятха", true)
            .addField("Совесть", "Совесть", true)
            .addField("Честь", "Афимида D:", true)
            .setDescription ("Бесполезная Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://cdn.discordapp.com/attachments/519132230010929153/521114484341997588/icon.png")
            .setURL("https://discord.gg/AytcyyC")
            .setFooter("(c) копирайт епт")

            message.channel.sendEmbed(myinfo);
            message.delete();
    }
}
module.exports = InfoCommand;
