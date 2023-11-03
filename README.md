# ✨ Discord.js v14 Template

A template for discord.js v14 bots.

## ➡️ Installation

1. Clone the repository

```sh
git clone https://github.com/turkwr/discord.js-v14-template-bot.git
```

2. Install NPM packages

```sh
npm install
```

3. Rename `config.example.js` to `config.js` and fill in the values in the file
4. Start the bot with the following command

```sh
npm run start
```

## 👻 Contributing

Pull Requests are always welcome, just edit the part you want to contribute and create a new PR. I will check it when I have time and update the parts that need to be changed.

## License

[ISC](https://choosealicense.com/licenses/isc/) © [turkwr](https://github.com/turkwr) [`(go to LICENSE file)`](LICENSE)

## 👀 Example config.js file

```js
module.exports = {
  General: {
    BotToken: "", // Discord bot token
    BotID: "", // Discord bot ID
  },

  Presence: {
    Activity: "", // activity that will appear: ex: Hello World
  },
};
```

## ⭐ Versions Used

- Node.js: v16.6.1 or higher
- Discord.js: v14.10.0 or higher
- Chalk: v4.0.0 or v4.1.2
