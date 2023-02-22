let os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.freemem());
console.log(os.uptime());
console.log(`${os.cpus().length} Core`);

// x64
// win32
// 384884736 bytes
// 432911 seconds
// 8 Core
