import chalk from "chalk";
import chalkAnimation from "chalk-animation";


import figlet from "figlet";

console.log("Surya");
console.log(chalk.blue("Hello, World!"));
console.log(chalk.red("Error"));
console.log(chalk.green("Success"));
console.log(chalk.yellow("Warning"));

figlet("SURYA",
    {
        font: "Ghost",
    }
    , function(err, data) {
  if (err) {
	console.log("Something went wrong");
	return;
  }
  console.log(chalk.greenBright(data));
});


figlet("SURYA",
    {
        font: "alphabet",
    }
    , function(err, data) {
  if (err) {
	console.log("Something went wrong");
	return;
  }
  console.log(chalk.yellow(data));
});

figlet("SURYA",
    {
        font: "Slant",
    }
    , function(err, data) {
  if (err) {
	console.log("Something went wrong");
	return;
  }
  console.log(chalk.bgBlack(data));
});


figlet("SURYA",
    {
        font: "3-D",
    }
    , function(err, data) {
  if (err) {
	console.log("Something went wrong");
	return;
  }
  console.log(chalk.bgBlack(data));
});

	
figlet("SURYA",
    {
        font: "Star Wars",
    }
    , function(err, data) {
  if (err) {
    console.log("Something went wrong");
    return;
  }
  const rainbow = chalkAnimation.rainbow(data);
  setTimeout(() => {
    rainbow.stop();
    console.log(data);
  }, 5000);
});


figlet("SURYA",
    {
        font: "Computer",
    }
    , function(err, data) {
  if (err) {
	console.log("Something went wrong");
    return;
  }
  console.log(chalk.red(data));
});