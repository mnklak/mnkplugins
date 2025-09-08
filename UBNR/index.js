/**
 * UBNR Plugin
 * URL: https://mnklak.github.io/mnkplugins/UBNR
 */

let commandId;
let intervalId;

export const onLoad = () => {
  console.log("[UBNR] Plugin loaded");

  // Comando: /ubnr
  commandId = powercord.api.commands.registerCommand({
    command: "ubnr",
    description: "Exibe uma mensagem personalizada",
    usage: "{c}ubnr",
    executor: () => ({
      send: false,
      result: "UBNR plugin está ativo e funcionando!"
    })
  });

  // Evento: Mensagem automática a cada 60 segundos
  intervalId = setInterval(() => {
    const channel = getCurrentChannel();
    if (channel) {
      sendMessage(channel.id, { content: "Mensagem automática do UBNR plugin." });
    }
  }, 60000);
};

export const onUnload = () => {
  console.log("[UBNR] Plugin unloaded");

  // Remover comando
  if (commandId) {
    powercord.api.commands.unregisterCommand("ubnr");
  }

  // Parar evento automático
  if (intervalId) {
    clearInterval(intervalId);
  }
};

// Utilitários internos
function getCurrentChannel() {
  const { getChannelId } = await import("powercord/api/commands");
  const { getChannel } = await import("powercord/entities/ChannelStore");
  const channelId = getChannelId?.();
  return channelId ? getChannel(channelId) : null;
}

function sendMessage(channelId, message) {
  const { sendMessage } = await import("powercord/entities/MessageActions");
  sendMessage(channelId, message);
}
