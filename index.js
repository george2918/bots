const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

//spectramodz#0623
var T1 = 0;
var S1 = 0;
//xD0M1Nx#6407
var T2 = 0;
var S2 = 0;
//charizard22#2920
var T3 = 0;
var S3 = 0;
//varo259#6605
var T4 = 0;
var S4 = 0;
//TheCreed#5188
var T5 = 0;
var S5 = 0;
//DarknessDraco#3179
var T6 = 0;
var S6 = 0;
//NachixxxVila#5545
var T7 = 0;
var S7 = 0;
//Zeidon/Noahiri#8309
var T8 = 0;
var S8 = 0;
//JoseantonioGamer#3596
var T9 = 0;
var S9 = 0;
//iFran_10#6627
var T10 = 0;
var S10 = 0;
//javicuevas#9500
var T11 = 0;
var S11 = 0;


client.on('ready', () => {
    console.log(`El bot esta listo como ${client.user.tag}`)
    client.user.setStatus('online');
});

client.on('message', message => {
    console.log(message.content);

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'add') {
        if (message.member.user.tag == 'spectramodz#0623') {
            if(args[0] == 'tortugas') {
                T1= T1 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T1} tortugas y ${S1} tiburones`);
            } else if (args[0] == 'tiburones') {
                S1= S1 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T1} tortugas y ${S1} tiburones`);
            }
        }

        if (message.member.user.tag == 'xD0M1Nx#6407') {
            if(args[0] == 'tortugas') {
                T2= T2 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T2} tortugas y ${S2} tiburones`);
            } else if (args[0] == 'tiburones') {
                S2= S2 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T2} tortugas y ${S2} tiburones`);
            }
        }

        if (message.member.user.tag == 'charizard22#2920') {
            if(args[0] == 'tortugas') {
                T3= T3 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T3} tortugas y ${S3} tiburones`);
            } else if (args[0] == 'tiburones') {
                S3= S3 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T3} tortugas y ${S3} tiburones`);
            }
        }

        if (message.member.user.tag == 'cvaro259#6605') {
            if(args[0] == 'tortugas') {
                T4= T4 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T4} tortugas y ${S4} tiburones`);
            } else if (args[0] == 'tiburones') {
                S4= S4 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T4} tortugas y ${S4} tiburones`);
            }
        }

        if (message.member.user.tag == 'TheCreed#5188') {
            if(args[0] == 'tortugas') {
                T5= T5 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T5} tortugas y ${S5} tiburones`);
            } else if (args[0] == 'tiburones') {
                S5= S5 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T5} tortugas y ${S5} tiburones`);
            }
        }
        if (message.member.user.tag == 'DarknessDraco#3179') {
            if(args[0] == 'tortugas') {
                T6= T6 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T6} tortugas y ${S6} tiburones`);
            } else if (args[0] == 'tiburones') {
                S6= S6 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T6} tortugas y ${S6} tiburones`);
            }
        }
        if (message.member.user.tag == 'NachixxxVila#5545') {
            if(args[0] == 'tortugas') {
                T7= T7 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T7} tortugas y ${S7} tiburones`);
            } else if (args[0] == 'tiburones') {
                S7= S7 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T7} tortugas y ${S7} tiburones`);
            }
        }
        if (message.member.user.tag == 'Zeidon/Noahiri#8309') {
            if(args[0] == 'tortugas') {
                T8= T8 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T8} tortugas y ${S8} tiburones`);
            } else if (args[0] == 'tiburones') {
                S8= S8 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T8} tortugas y ${S8} tiburones`);
            }
        }
        if (message.member.user.tag == 'JoseantonioGamer#3596') {
            if(args[0] == 'tortugas') {
                T9= T9 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T9} tortugas y ${S9} tiburones`);
            } else if (args[0] == 'tiburones') {
                S9= S9 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T9} tortugas y ${S9} tiburones`);
            }
        }
        if (message.member.user.tag == 'iFran_10#6627') {
            if(args[0] == 'tortugas') {
                T10= T10 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T10} tortugas y ${S10} tiburones`);
            } else if (args[0] == 'tiburones') {
                S10= S10 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T10} tortugas y ${S10} tiburones`);
            }
        }
        if (message.member.user.tag == 'javicuevas#9500') {
            if(args[0] == 'tortugas') {
                T11= T11 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T11} tortugas y ${S11} tiburones`);
            } else if (args[0] == 'tiburones') {
                S11= S11 + parseInt(args[1]);
                message.channel.send(`Has pescado ${T11} tortugas y ${S11} tiburones`);
            }
        }
    }

    if (command == 'resultados') {
        const Pedro = new Discord.MessageEmbed()
        .setColor('#0099ff')
	    .setTitle('Resultados de la pesca')
	    .setAuthor('Bot de Pesca', 'https://i.imgur.com/t0NaSOz.jpg')
	    .setDescription('Fishing planet')
	    .setThumbnail('https://i.imgur.com/t0NaSOz.jpg')
	    .addFields(
            { name: 'Pedro', value: `Tortugas = ${T1}         Tiburones = ${S1}` },
            { name: 'Casimiro', value: `Tortugas = ${T2}         Tiburones = ${S2}` },
            { name: 'Ricardo', value: `Tortugas = ${T3}         Tiburones = ${S3}` },
            { name: 'Alvaro', value: `Tortugas = ${T4}         Tiburones = ${S4}` },
            { name: 'Roni', value: `Tortugas = ${T5}         Tiburones = ${S5}` },
            { name: 'Jhon', value: `Tortugas = ${T6}         Tiburones = ${S6}` },
            { name: 'Juampa', value: `Tortugas = ${T7}         Tiburones = ${S7}` },
            { name: 'Noah', value: `Tortugas = ${T8}         Tiburones = ${S8}` },
            { name: 'Andresito', value: `Tortugas = ${T9}         Tiburones = ${S9}` },
            { name: 'Rodolfo', value: `Tortugas = ${T10}         Tiburones = ${S10}` },
            { name: 'Conbe', value: `Tortugas = ${T11}         Tiburones = ${S11}` },
		    { name: '\u200B', value: '\u200B' },
	    )
	    .setTimestamp()
	    .setFooter('Created by spectramodz', 'https://i.imgur.com/t0NaSOz.jpg');

        message.channel.send(Pedro);
    }


    if (command == 'reset4037') {
        T1 = 0;
        S1 = 0;
        T2 = 0;
        S2 = 0;
        T3 = 0;
        S3 = 0;
    }
})


client.login(token);
