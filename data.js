const data = {
  2019: {
    1: 77,
    2: 80,
    3: 95,
    4: 66,
    5: 70,
    6: 88,
    7: 50,
    8: 99,
    9: 78,
    10: 66,
    11: 85,
    12: 70
  },

  2020: {
    1: 79,
    2: 83,
    3: 90,
    4: 69,
    5: 78,
    6: 40,
    7: 55,
    8: 100,
    9: 44,
    10: 26,
    11: 48,
    12: 78
  }
}

const daily = {
  2020: {
    1: {
      
    },
    2: {

    }
  }
}


for(let i = 1; i <= 31; i++) {
  daily[2020][1][i] = Math.floor((Math.random() * 100) + 1)
}

export {data, daily}