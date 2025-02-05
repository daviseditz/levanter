const { bot } = require('../lib');

bot(
  {
    pattern: 'hack ?(.*)',
    desc: 'Fun and cool hacking simulation',
    type: 'fun',
  },
  async (message, match) => {
    const target = match || 'target';

    await message.send('*💻 Initializing hack sequence...*');
    await new Promise(resolve => setTimeout(resolve, 1500));

    await message.send('*🔌 Establishing secure connection to the server...*');
    await new Promise(resolve => setTimeout(resolve, 1500));

    await message.send('*🛡 Bypassing firewalls and security protocols...*');
    await displayProgressBar(message, 'Bypassing firewalls', 4);

    await message.send('*🔐 Gaining access to encrypted database...*');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await message.send('*🔑 Cracking encryption keys...*');
    await displayProgressBar(message, 'Cracking encryption', 6);

    await message.send('*📥 Downloading sensitive data from server...*');
    await displayProgressBar(message, 'Downloading files', 5);

    await message.send('*🔒 Planting a backdoor for future access...*');
    await new Promise(resolve => setTimeout(resolve, 2500));

    await message.send(`*💥 Hack complete! 🎯 Target "${target}" successfully compromised.*`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.send('*🤖 Mission accomplished. Logging off...*');
  }
);

const displayProgressBar = async (message, taskName, steps) => {
  const progressBarLength = 20;
  for (let i = 1; i <= steps; i++) {
    const progress = Math.round((i / steps) * progressBarLength);
    const progressBar = '█'.repeat(progress) + '░'.repeat(progressBarLength - progress);
    await message.send(`*${taskName}:* [${progressBar}]`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
