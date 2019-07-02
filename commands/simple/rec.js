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
            .addField("Ум (~~`старая`~~)", "Васятха", true)
            .addField("Совесть", "Совесть🐾", true)
            .addField("Честь", "Афимида D:", true)
            .addField("Отвага", "Олдфаг'a", true)
            .addField("<3", "🌈 (Паладинов)", true)
            .setDescription ("Бесполезная Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://1eu.funnyjunk.com/thumbnails/comments/So+apparently+we+learnt+how+the+orcs+do+it+_cca58968f56f4601272ae9737036d3ea.jpg")
            .setURL("https://discord.gg/AytcyyC")
            .setFooter("(c) копирайт епт")

            message.channel.sendEmbed(myinfo);
            message.delete();
    }
}
module.exports = InfoCommand;
