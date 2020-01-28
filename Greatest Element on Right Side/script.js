var replaceElements = function(arr) {
    arr.push(-1);
    let result = [];
    for (let i=arr.length-1; i>=0; i--) {
        if (arr[i]<arr[i+1]) {arr[i] = arr[i+1]}
        result.push(arr[i]);
    }
    result.pop();
    return result.reverse();
};
