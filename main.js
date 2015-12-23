chrome.app.runtime.onLaunched.addListener(function() {
  var screenWidth = Math.round(screen.width * 0.75);
  var screenHeight = Math.round(screen.height * 0.75);

  chrome.app.window.create('app.html', {
    outerBounds: {
      width: screenWidth,
      height: screenHeight
    }
  });
});