function precendence(operator) {
    if(operator === '+' || operator === '-') return 1;
    if(operator === '*' || operator === '/') return 2;
}
function passeedStrin(str) {
    str = str.replace(/\s/g, '');
   
    let numberBufff = '';
    let postfixArr = [];
    let stack = [];
    for (let i =0; i < str.length;i++) {
        if(/\d/.test(str[i])) {
            numberBufff = numberBufff + str[i];
        } else {
            //operator found
            if(numberBufff.length > 0) {
                postfixArr.push(parseFloat(numberBufff, 10));
                numberBufff = '';
            }
            while(stack.length > 0 && precendence(str[i]) <= precendence(stack[stack.length - 1]) ) {
                postfixArr.push(stack.pop());
            }
            stack.push(str[i]);
        }

    }
    if(numberBufff.length > 0) {
        postfixArr.push(parseFloat(numberBufff, 10));
        numberBufff = '';
    }
    while(stack.length > 0) {
        postfixArr.push(stack.pop());
    }
    return postfixArr;
}



console.log(passeedStrin('1 + 2 * 3 + 5 - 2'));
