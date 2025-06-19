import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import chalk from "chalk";

const filename = fileURLToPath(import.meta.url);

// console.log("Base File Name:", path.basename(filename));
// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());
// console.log("Free memory:", os.freemem());
// console.log("Total memory:", os.totalmem());
// console.log("Uptime:", os.uptime(), "seconds");
console.log(chalk.blue("Hello, World!"));
console.log(chalk.red("This is an error message."));