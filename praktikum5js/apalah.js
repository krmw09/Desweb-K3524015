var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Selamat Datang!';

var paragraf = document.querySelector('p');
paragraf.innerHTML = 'Ini sama halnya dengan cara kerja elemen <link> untuk CSS — ini menempatkan JavaScript ke halaman, sehingga dapat memberikan pegaruh pada HTML, CSS, dan lainnya pada halaman.';

var myImages = document.querySelector('img');

myImages.onclick = function() {
    var mySrc = myImages.getAttribute('src');
    if(mySrc === 'apel.jpg'){
        myImages.setAttribute ('src', 'apel2.jpeg');
    } else {
        myImages.setAttribute ('src', 'apel.jpg');
    }
}

var myButton = document.querySelector('button');

function setUserName() {
    var myName= prompt('Please masukkan namamu.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Chrome is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Chrome is cool' + storedName;
}

myButton.onclick = function(){
    setUserName();
}