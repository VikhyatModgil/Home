function name(){
    for (let el of document.querySelectorAll('.works')) el.style.visibility = 'hidden';
    for (let el of document.querySelectorAll('.intro')) el.style.visibility = 'visible';
    for (let el of document.querySelectorAll('.contact')) el.style.visibility = 'hidden';
}
function works(){
    for (let el of document.querySelectorAll('.works')) el.style.visibility = 'visible';
    for (let el of document.querySelectorAll('.intro')) el.style.visibility = 'hidden';
    for (let el of document.querySelectorAll('.contact')) el.style.visibility = 'hidden';
    }
function contact(){
    for (let el of document.querySelectorAll('.works')) el.style.visibility = 'hidden';
    for (let el of document.querySelectorAll('.intro')) el.style.visibility = 'hidden';
    for (let el of document.querySelectorAll('.contact')) el.style.visibility = 'visible';
    }