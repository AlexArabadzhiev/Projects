function main() {
    var input = document.getElementById('input').value;
    var sameNumArr = streak(1 ,input);
    var oddNumArr = streak(2, input);
    var symbol;

    for(symbol=0; symbol<input.length; symbol++) {
        if(isNaN(input[symbol])) {
            document.getElementById('output').innerHTML += input[symbol].fontcolor('lightgray');
        }
        else {
            if ((inArray(symbol, sameNumArr)>=0) && (inArray(symbol, oddNumArr)>=0)) {
                document.getElementById('output').innerHTML += input[symbol].bold().fontcolor('red');
            }
            else if (inArray(symbol, sameNumArr)>=0) {
                document.getElementById('output').innerHTML += input[symbol].bold();
            }
            else if (inArray(symbol, oddNumArr)>=0) {
                document.getElementById('output').innerHTML += input[symbol].fontcolor('red');
            }
            else {
                document.getElementById('output').innerHTML += input[symbol];
            }
        }
    }
}
setInterval(check, 10);