const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let qs_list = [ //survey questions list
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let profile = {};
//---------------------------------------------------------

rl.question(qs_list[0] , (answer) => {
  profile["Name"] = answer;
  rl.question(qs_list[1] , (answer) => {
    profile["favouriteActivity"] = answer;
    rl.question(qs_list[2] , (answer) => {
      profile["favouriteAtivityMusic"] = answer;
      rl.question(qs_list[3] , (answer) => {
        profile["favouriteMeal"] = answer;
        rl.question(qs_list[4] , (answer) => {
          profile["favouriteMealFood"] = answer;
          rl.question(qs_list[5] , (answer) => {
            profile["absouteFavouriteSports"] = answer;
            rl.question(qs_list[6] , (answer) => {
              profile["Superpower"] = answer;
              const ak_list = Object.keys(profile); // profile(answers) keys list
              console.log(profile);
              console.log(
                `\n${profile[ak_list[0]]} likes doing ${profile[ak_list[1]]} while listenig to ${profile[ak_list[2]]}. 
                \nFavourite meal is ${profile[ak_list[3]]} and favourtie food is ${profile[ak_list[4]]}. 
                \nAbsolute favourite sports is ${profile[ak_list[5]]} and superpower is: ${profile[ak_list[6]]}\n`
              );
              rl.close();
            });
            // rl.close();
          });
          // rl.close();
        });
        // rl.close();
      });
      // rl.close();
    });
    // rl.close();
  });
  // rl.close();
});

//---------------------------------------------------
// *** falty : but with a lesson - don't miss it ***
/*
  let outPut = "";

  rl.question(qs_list[0] , (answer) => {
    outPut += qs_list[0] + ": " + answer + "\n";
  
    rl.close();
  });
  rl.question(qs_list[1] , (answer) => {
    outPut += qs_list[1] + ": " + answer + "\n";
  
    rl.close();
  });
  rl.question(qs_list[2] , (answer) => {
    outPut += qs_list[2] + ": " + answer + "\n";
  
    rl.close();
  });
  rl.question(qs_list[3] , (answer) => {
    outPut += qs_list[3] + ": " + answer + "\n";
  
    rl.close();
  });
  rl.question(qs_list[4] , (answer) => {
    outPut += qs_list[4] + ": " + answer + "\n";
  
    rl.close();
  });
  rl.question(qs_list[5] , (answer) => {
    outPut += qs_list[5] + ": " + answer + "\n";
  
    rl.close();
  });
  rl.question(qs_list[6] , (answer) => {
    outPut += qs_list[6] + ": " + answer;
  
    rl.close();
  });
*/
