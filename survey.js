const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  let a1 = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    let a2 = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      let a3 = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        let a4 = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          let a5 = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            let a6 = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              let a7 = answer;
              console.log(`${a1} loves listening to ${a3} while ${a2}, devouring ${a5} for ${a4}, prefers ${a6} over any other sport, and is amazing at ${a7}`)
              rl.close();
            })
          })
        })
      })
    })
  })
});