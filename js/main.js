if (/mobile/i.test(navigator.userAgent) || /android/i.test(navigator.userAgent)) {
  document.body.classList.add('mobile')
}
hljs.initHighlightingOnLoad();
console.log('hello world')