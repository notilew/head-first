function greetUser() {
  alert('Hello, I am the pet rock');
}

function resizeRock() {
  var previewWindowWidth = document.body.clientWidth;
  // var previewWindowHeight = document.body.clientHeight;
  
  var imageWidth = (previewWindowWidth - 100) * 0.2;
  // var imageHeight = (previewWindowHeight - 100) * 0.9;
  
  document.getElementById('irock').style.width = parseInt(imageWidth).toString() + 'px';
  // document.getElementById('irock').style.height = parseInt(imageHeight).toString() + 'px';
}

function touchRock() {
  var name = prompt('What is your name?', 'Enter your name here.');

  if (name) {
    alert('Nice to meet you, ' + name + '.');

    document.getElementById('irock').src = './img/rock02.png';

    setTimeout("document.getElementById('irock').src = './img/rock04.png'", 5000);
  }
}
