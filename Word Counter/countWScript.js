let txt = document.querySelector('#idText');
let result = document.querySelector('#result');
let resultC = document.querySelector('#result');

txt.onkeydown = function() {
    let num = txt.value.split(" ").length;
    result.innerHTML = `You have entered ${num} words.`
    return result;
}
