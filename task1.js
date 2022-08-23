let str;

const apiMaticTask1 = (s) => {
    let answer = "false", lastDigit = null, numbers = "1234567890";

    for (let i = 0, _pj_a = s.length; i < _pj_a; i += 1) {
        if (!isNaN(s[i])) {
            if (lastDigit) {
                if (Number.parseInt(s[i]) + Number.parseInt(s[lastDigit]) === 10) {
                    let sSlice = s.slice(lastDigit,i)
                    let qMark = 0
                    for(let j=0; j<sSlice.length;j++)
                    {
                        if(sSlice[j] == "?")
                        {
                            qMark++;
                        }
                    }
                    if (qMark === 3) {
                        // console.log('true',);
                        answer = "true";
                    } else {
                        // console.log('false');
                        return "false";
                    }
                }
            }
            lastDigit = i;
        }
    }
    // console.log('answer =', answer)
    return answer;
}

str = "aa6?9";
console.log("Answer for string '" + str + "' = "+ apiMaticTask1(str));
