def palindromeCheck(num):
  palindrome = len(num)
  newstr = ''
  length = len(palindrome) - 1
  count = length
  while count >= 0:
    newstr += palindrome[count].lower()
    count -= 1 
  return newstr == palindrome.lower()

print(palindromeCheck("Radar"))