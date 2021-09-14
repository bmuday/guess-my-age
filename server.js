const isMyAge = (arg) => {

    const yearInMs = 3.15576e+10 // 365.25 * 24 * 60 * 60 * 1000 : Using a year of 365.25 days (because leap years)
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate)) / yearInMs)
    
    return arg == getAge("1994-08-05")

}

const guessMyAge = () => {

  if (isMyAge(process.argv[2])) {
    console.log("Yeah!!! I'm a 27 fullstack JS developer from France. Nice to m>
  } else {
      console.log("Bruh")
  }

}

module.exports = guessMyAge;
