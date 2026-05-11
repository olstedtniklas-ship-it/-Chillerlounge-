import { logger } from "../utils/logger.js";

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",
    activities: [
      {
        name: "👋 New members",
        type: 0, // Playing
      },
    ],
  },

  // =========================
  // WELCOME SYSTEM
  // =========================
  welcome: {
    // Nachricht (Platzhalter!)
    message: "👋 Welcome {user} to **{server}**! 🎉",

    // Channel-ID für Willkommensnachricht
    channelId: process.env.WELCOME_CHANNEL_ID || null,
  },

  // =========================
  // AUTO ROLE
  // =========================
  autoRole: {
    // Rolle, die neue Mitglieder bekommen
    roleId: process.env.AUTO_ROLE_ID || null,
  },

  // =========================
  // FEATURES (NUR DAS NOCH)
  // =========================
  features: {
    welcome: true,
    autoRole: true,
  },
};

// =========================
// CONFIG VALIDATION
// =========================
export function validateConfig() {
  const errors = [];

  if (!process.env.DISCORD_TOKEN) {
    errors.push("DISCORD_TOKEN fehlt");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("CLIENT_ID fehlt");
  }

  return errors;
}

const errors = validateConfig();
if (errors.length > 0) {
  logger.error("Config Fehler:\n" + errors.join("\n"));
  process.exit(1);
}

export default botConfig;




