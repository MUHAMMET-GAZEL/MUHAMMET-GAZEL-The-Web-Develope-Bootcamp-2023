const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];

try {
    const langCode = franc(input);
    if (langCode === "und") {
        console.log("Language could not be determined.");
    } else {
        const language = langs.where("3", langCode);
        if (language) {
            console.log(`Our best guess is: ${language.name}.`.green);
        } else {
            console.log("Language not found in database.".red);
        }
    }
} catch (error) {
    console.error("Error:", error.message);
}
