// 1047. Remove All Adjacent Duplicates In String



// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.





var removeDuplicates = function(s) {
    let stack = [];
    
    for (let letter of s) {
        if (stack.length > 0 && stack[stack.length - 1] === letter) {
            stack.pop();  // Remove the top of the stack if it equals the current letter
        } else {
            stack.push(letter);  // Otherwise, add the current letter to the stack
        }
    }
    
    return stack.join('');  // Join the stack to form the result string
};