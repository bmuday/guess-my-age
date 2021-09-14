const guessMyAge = require('guess-my-age')

if (guessMyAge(process.argv[2])) {
    console.log("Yeah!!! I'm a 27 fullstack JS developer from France. Nice to meet you buddy.")
} else {
    console.log("Bruh")
}