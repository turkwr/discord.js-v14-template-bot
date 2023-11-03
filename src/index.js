const { ShardingManager } = require("discord.js");
const logger = require("./functions/logger.js");
const config = require("../config.js");

const shard = new ShardingManager("src/bot.js", {
  token: config.General.BotToken,
  totalShards: "auto", // 'auto' or number
  respawn: true, // whether to respawn a shard when it encounters an error
  mode: "process", // process or worker
});

shard.on("shardCreate", (shard) => {
  logger.info({ type: "Shard", message: `Launched shard ${shard.id}` });
});

shard.spawn({
  amount: shard.totalShards,
  delay: 5500,
  timeout: 30000,
});
