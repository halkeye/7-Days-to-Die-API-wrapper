/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const ipInt = require('ip-to-int');
const fs = require('fs');
const path = require('path');
const JSON5 = require("json5");

const maxIP = ipInt('255.255.255.255').toInt();

const tapesDir = path.join(__dirname, '..', 'test', 'tapes');
const files = fs.readdirSync(tapesDir);

const replaceIP = (obj) => {
    if (typeof obj !== 'object') {
        return;
    }
    if (obj.ip) {
        obj.ip = ipInt(obj.steamid % maxIP).toIP();
    }
    for (const subObj of Object.values(obj)) {
        replaceIP(subObj);
    }
};

for (const file of files) {
    const fullFilename = path.join(tapesDir, file);
    if (fs.readFileSync(fullFilename).toString().includes('ip:')) {
        const data = JSON5.parse(fs.readFileSync(fullFilename).toString());
        replaceIP(data);
        fs.writeFileSync(fullFilename, JSON5.stringify(data, null, 4));
    }
}

