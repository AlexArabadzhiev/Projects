var text = document.getElementById('input').value;
function check(){
    if(document.getElementById('input').value != text){
        document.getElementById('output').innerHTML = "";
        text = document.getElementById('input').value;
        main();
    }
}

function inArray(elem, arr){
    var found = 0;
    for (var i=0; i <= arr.length; i++) {
        if (arr[i] == elem) return i;
        found++;
    }
    return -1;
}


function streak(typecheck , array){
    var input = array;
    var highStreak = 2;
    var streak = 1;
    for (var i = 0; i<input.length; i++ ) {

        if (!isNaN(parseInt(input[i]))){
            var B1 = (input[i] === input[i + 1]);
            var B2 = (input[i]%2>0 && input[i+1]%2>0);
            var check1;
            switch (typecheck){
                case 1 :
                    check1 = B1;
                    break;
                case 2 :
                    check1 = B2;
                    break;
            }
            if (check1) {
                streak++;
            }
            else {
                streak = 1;
            }
            if (streak > highStreak) {
                highStreak = streak;
            }
        }
    }
    var arr = [];
    for (var i = 0; i < input.length; i++) {
        var sym1 = input[i];
        var bool = false;
        for (var j = 1; j < highStreak; j++) {
            var sym2 = input[i+j];
            var B1 = (sym1 === sym2);
            var B2 = (sym1%2>0 && sym2%2>0);
            var check2;
            switch (typecheck){
                case 1 :
                    check2 = B1;
                    break;
                case 2 :
                    check2 = B2;
                    break;
            }
            if(check2){
                bool = true;
            }
            else{
                bool=false;
                break;
            }
        }
        if(bool){
            for (var j = 0; j < highStreak; j++) {
                arr.push(i+j);
            }
        }
    }
    return arr;
}
