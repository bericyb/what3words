function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getMnemonic(words) {
var arr = words.split('.'); 
var final = '';
for (let i = 0; i < 3; i++) {
  var letter = arr[i].split('')[0];
  var index = letter.charCodeAt(0) - 97;
  var dic = getDict();
  final = final + dic[index] + '.';
}
document.getElementById("mnemonic").innerHTML = final;
}


function getDict() {
  return ["apple", "bread", "cat", "dog", "ear", "false", "germ", "halt", "inside", "joke", "kale", "lame", "monster", "newt", "open", "pop", "quest", "resolute", "sting", "trash", "under", "vice", "water", "xenon", "youth", "zebra"]
}

function showPosition(position) {
    fetch("https://api.what3words.com/v3/convert-to-3wa?coordinates=" + position.coords.latitude + "%2C" + position.coords.longitude + "&key=0BC0ETDI")
    .then(response => response.json())
	.then(data => {
	  console.log(data.words)
  var x = document.getElementById("demo");
  x.innerHTML = data.words;
  getMnemonic(data.words);
	  
	  })
	.catch(err => console.error(err));
}

