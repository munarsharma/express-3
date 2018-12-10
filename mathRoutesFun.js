const add = str => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(parseInt(str[i]));
  }

  return output.reduce((acc, el) => {
    return acc + el;
  }, 0);
};

const subtract = str => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(parseInt(str[i]));
  }

  return output.reduce((acc, el) => {
    return acc - el;
  }, 0);
};

const multiply = str => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(parseInt(str[i]));
  }

  return output.reduce((acc, el) => {
    return acc * el;
  }, 1);
};

const divide = str => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(parseInt(str[i]));
  }

  return (output[0] / output[1]).toFixed(3);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
