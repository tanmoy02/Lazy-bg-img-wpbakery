function lazyBg() {
  var lazyImg = document.querySelectorAll('div[lazy-src]');
  var style = "background-image: url({url})";
  for (var i = 0; i < lazyImg.length; i++) {
      var oldStyle = lazyImg[i].getAttribute('style');
      lazyImg[i].setAttribute('style', style.replace("{url}", lazyImg[i].getAttribute('lazy-src')) + '; ' + oldStyle);
  }
}

window.onload = lazyBg;
