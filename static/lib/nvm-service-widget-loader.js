(function () {
  var origin = new URL(document.currentScript.src).origin + new URL(document.currentScript.src).pathname.slice(0, new URL(document.currentScript.src).pathname.lastIndexOf('/'));
  var scripts = ["vendors.js","nvm-service-widget.js", "563.js", "654.js", "883.js"];

  for (var i = 0; i < scripts.length; i++) {
    var file = scripts[i];
    var filePath = `${origin}/${file}`;
    var selector = `script[src='${filePath}']`;

    document.querySelectorAll(selector).forEach(function (elem) {
      elem.remove();
    });

    var script = document.createElement('script');
    script.src = `${filePath}`;
    script.defer = true;
    document.body.appendChild(script);
  }

  var stylesheets = ["nvm-service-widget.css"];

  for (var i = 0; i < stylesheets.length; i++) {
    var file = stylesheets[i];
    var filePath = `${origin}/${file}`;
    var selector = `link[rel='stylesheet'][href='${filePath}']`

    document.querySelectorAll(selector).forEach(function (elem) {
      elem.remove();
    });

    const link = document.createElement('link');
    link.href = `${filePath}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
})();
