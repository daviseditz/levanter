const { bot } = require('../lib');

class DiceUtility {
  constructor() {
    this.diceUrls = [
      'https://tinyurl.com/gdd01',
      'https://tinyurl.com/gdd02',
      'https://tinyurl.com/gdd003',
      'https://tinyurl.com/gdd004',
      'https://tinyurl.com/gdd05',
      'https://tinyurl.com/gdd006'
    ];
  }

  async getRandomDiceBuffer() {
    const url = this.diceUrls[Math.floor(Math.random() * this.diceUrls.length)];
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }
}

const diceUtility = new DiceUtility();

bot(
  {
    pattern: 'dado ?(.*)',
    fromMe: true,
    desc: 'Send a random dice',
    type: 'game',
  },
  async (message, match) => {
    try {
      const diceBuffer = await diceUtility.getRandomDiceBuffer();
      await message.send(
        diceBuffer,
        { 
          quoted: message.data,
        },
        'sticker'
      );
    } catch (error) {
      console.error('Error en comando dado:', error);
      await message.send('❌' + error.message);
    }
  }
);

module.exports = { DiceUtility: diceUtility };