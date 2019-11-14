function palindromeCheck(num) {
    palindrome = num.toString()
    var newstr = '';
    var length = palindrome.length - 1;
    var count = length;
    while (count >= 0) {
        newstr += palindrome[count].toLowerCase();
        count -= 1;
    }
    return newstr == palindrome.toLowerCase();
}

console.log(palindromeCheck("Radar"))