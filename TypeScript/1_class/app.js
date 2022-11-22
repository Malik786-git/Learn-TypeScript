var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var button = document.querySelector('button');
function sum(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function () {
    console.log(sum(+num1.value, +num2.value));
});
