function lazyBg() {
  var lazyImg = document.querySelectorAll('div[lazy-src]');
  var style = "background-image: url({url})";
  for (var i = 0; i < lazyImg.length; i++) {

    lazyImg[i].setAttribute('style', style.replace("{url}", lazyImg[i].getAttribute('lazy-src')));

  }
}

window.onload = lazyBg;
