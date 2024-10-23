const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=WzpzQRxL#4gHa6fH2R60jDo-6PWmSENv3l8Vb7EP-BaMmDEC7GNs",
MONGODB: process.env.MONGODB || "mongodb+srv://hasamg:xlwPPyGX6GedR9xD@cluster0.9qiarq4.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
