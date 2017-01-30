//Recursion//

function fibonacciRec(n) {
    var item;

    if (n >= 2) {
        item = fibonacciRec(n - 1) + fibonacciRec(n - 2);
    }
    else {
        item = n;
    }
    return item;
}

//Сycle//

function fibonacciСycle(n) {
    var item1 = 0;
    var item2 = 1;
    var item;
    for (var i = 2; i <= n; i++) {

        item = item1 + item2;
        item1 = item2;
        item2 = item;
    }
    return item2;
}

//Evens//

btn1.addEventListener('click', function(e) {
    var n = inpt.value;
    var res = fibonacciСycle(n);
    result.innerHTML = res;
    e.preventDefault();
});

btn2.addEventListener('click', function(e) {
    var n = inpt.value;
    var res = fibonacciRec(n);
    result.innerHTML = res;
    e.preventDefault();
});

/*global btn1*/
/*global inpt*/
/*global result*/
/*global btn2*/