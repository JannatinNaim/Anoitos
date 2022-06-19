require("dotenv").config({ path: "../.env" });
const { Client, Intents } = require("discord.js");

const discordClient = new Client({
  intents: Object.values(Intents.FLAGS),
});

const DEBUG_MODE = process.env.DEBUG_MODE;
const DISCORD_BOT_TOKEN = DEBUG_MODE ? process.env.DEBUG_MODE_DISCORD_BOT_TOKEN : process.env.DISCORD_BOT_TOKEN;

discordClient.login(DISCORD_BOT_TOKEN).then((TOKEN) => {
  console.log(`logged in with ${TOKEN.slice(0, 32)}*** !`);
});

discordClient.once("ready", (client) => {
  console.log(`Ready! USERNAME: ${client.user.username}`);
});
