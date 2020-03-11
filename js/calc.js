// This js file controls calc function. And This calc app manage
// input keys is string type and process using eval() function.

const outputResult = document.getElementById("result");
const outputEquation = document.getElementById("equation");
let resultNum = 0;
let calcProcess = "";
let num = "";

function outputEquationValue(eq) {
  let outputProcess = eq;
  if (outputProcess.indexOf("*") !== -1) {
    outputProcess = eq.split("*").join("×");
  }
  if (outputProcess.indexOf("/") !== -1) {
    outputProcess = eq.split("/").join("÷");
  }
  outputEquation.innerText = outputProcess;
}

function outputResultValue(result) {
  if (result.length < 17) {
    outputResult.innerText = result;
  }
  return result;
}

const otherOp = {
  oneOutOfN: function(number) {
    if (number !== "") {
      outputResultValue(number);
      outputEquationValue(number);
    }
  },
  sqrt: function(number) {
    let floatCheck = "";
    number = Math.sqrt(number);
    floatCheck += number;
    if (floatCheck.indexOf(".") !== -1) {
      number = number.toFixed(5).replace(/(0+$)/, "");
    }
    return number;
  },
  pow: function(number) {
    let floatCheck = "";
    number = Math.pow(number, 2);
    floatCheck += number;
    if (floatCheck.indexOf(".") !== -1) {
      number = number.toFixed(5).replace(/(0+$)/, "");
    }
    return String(number);
  },
  abs: function(number) {
    if (number !== "") {
      let floatCheck = "";
      number = number >= 0 ? number * -1 : Math.abs(number);
      floatCheck += number;
      if (floatCheck.indexOf(".") !== -1) {
        number = number.toFixed(5).replace(/(0+$)/, "");
      }
    }
    return String(number);
  },
  percent: function(number) {
    if (number < 1) {
      number = parseFloat(number);
      number = number.toFixed(5).replace(/(0+$)/, "");
      number *= 100;
    }
    return String(`${number}%`);
  },
  equal: function() {
    let floatCheck = "";
    calcProcess += num;
    resultNum = eval(calcProcess);
    floatCheck += resultNum;
    if (floatCheck.indexOf(".") !== -1) {
      resultNum = resultNum.toFixed(5).replace(/(0+$)/, "");
    }
    calcProcess += `=${resultNum}`;
    outputResultValue(`${resultNum}`);
    outputEquationValue(calcProcess);
    calcProcess = "";
    num = "";
  }
};

function btnInput(text) {
  let numCheck = isNaN(parseInt(text));
  if (numCheck === false || text === ".") {
    num += text;
    num = outputResultValue(num);
  } else if (text === "１/ｘ") {
    num = eval(1 / num)
      .toFixed(5)
      .replace(/(0+$)/, "");
    otherOp.oneOutOfN(num);
  } else if (text === "=") {
    otherOp.equal();
  } else if (text === "²√ｘ") {
    num = otherOp.sqrt(num);
    outputResultValue(num);
  } else if (text === "ｘ²") {
    num = otherOp.pow(num);
    outputResultValue(num);
  } else if (text === "+/-") {
    num = otherOp.abs(num);
    outputResultValue(num);
  } else if (text === "%") {
    num = otherOp.percent(num);
    outputResultValue(num);
    num = "";
  } else if (text === "back") {
    num = num.slice(0, -1);
    outputResultValue(num);
  } else if (text === "C") {
    num = "";
    calcProcess = "";
    outputResultValue(num);
    outputEquationValue(calcProcess);
  } else if (text === "CE") {
    calcProcess = "";
    outputEquationValue(calcProcess);
  } else {
    calcProcess += num;
    calcProcess += text;
    outputEquationValue(calcProcess);
    num = "";
  }
}
