function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let mySub = string.substring(1, string.length)
        printString(mySub)
    }
    else {
        return true
    }
}

function reverseString(string) {
    if (string.length == 1) {
        return string
    }
    else {
        let mySub = string.substring(0, string.length - 1)
        return string[string.length - 1] + reverseString(mySub)
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true
    }
    else {
        let test = string[0] == string[string.length - 1]
        let mySub = string.substring(1, string.length - 1)
        return test && isPalindrome(mySub)
    }
}

function addUpTo(array, index) {
    if (index == 0) {
        return array[index]
    }
    else {
        return array[index] + addUpTo(array, index - 1)
    }
}

// [1, 4, 5, 3]
function maxOf(array) {
    if (array.length == 1) {
        return array[0]
    }
    else {
        let a = array[0]
        let b = array[1]
        if (a > b) {
            array[1] = a
        }
        let newArr = array.slice(1, array.length)
        return maxOf(newArr)
    }
}

function includesNumber(array, number) {
    if (array.length == 1) {
        return number == array[0]
    }
    else {
        return number == array[0] || includesNumber(array.slice(1, array.length), number)
    }
}