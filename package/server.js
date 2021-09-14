const isMyAge = (arg) => {

    const yearInMs = 3.15576e+10 // 365.25 * 24 * 60 * 60 * 1000 : Using a year of 365.25 days (because leap years)
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate)) / yearInMs)
    
    return arg == getAge("1994-08-05")
}

module.exports = isMyAge