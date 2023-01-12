## 20. Valid Parentheses

> 문제 링크

https://leetcode.com/problems/valid-parentheses/description/

> 문제 설명

```

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
```

> 테스트케이스

```
"()"
"()[]{}"
"(]"
"{()}"
"]"
```


> 문제 해결

```
/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        '(':')',
        '{':'}',
        '[':']',
    };

    let stack = [];

    if (s.length < 2 || !(s[0] in brackets))
        return false


    for(let i=0; i<s.length; i++){
        
        if (s[i] in brackets) {
            stack.push(s[i]);
            continue;
        }

        if (brackets[stack[stack.length - 1]] === s[i]) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0;
};
```

> 회고

```
bracket이 열리면 같은 타입의 bracket을 찾아 닫아주는 문제인데, 이 문제를 풀기위해 stack의 개념을 적용하니 편리했다. 
또한 같은 타입을 bracket을 찾기 위해 Dictionary를 사용한 것도 좋은 선택이였다고 본다. 

주어진 테스트케이스 외에 문제에 맞는 다른 테스트케이스도 더 다양하게 생각해보면 좋을 듯 싶다.

+) replace()를 활용하여 문제를 푼 케이스를 보았는데 창의력에 감탄했다.😂👍
```