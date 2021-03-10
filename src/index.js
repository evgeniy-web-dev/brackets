// Скобки
module.exports = function check(str, bracketsConfig) {
    let sameOpenCloseBrackets = '';
    let brackets = '';
    for (let i = 0; i < bracketsConfig.length; i++) {
        let config = bracketsConfig[i];

        let openBracket = config[0];
        let closeBracket = config[1];
        if (closeBracket === openBracket) {
            sameOpenCloseBrackets += openBracket;
        }

        brackets += openBracket;
        brackets += closeBracket;
    }

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let bracket = str[i];
        let index = brackets.indexOf(bracket);
        if (sameOpenCloseBrackets.includes(bracket)) {
            let lastExpBraketIndex = stack[stack.length - 1];
            if (lastExpBraketIndex === index) {
                stack.pop();
                continue;
            } else {
                stack.push(index);
                continue;
            }
        }

        if (index % 2 === 0) {
            stack.push(index + 1);
        } else {
            let expIndex = stack.pop();
            if (index !== expIndex) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }

    return true;
};
