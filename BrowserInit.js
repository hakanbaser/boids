  if(navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Firefox") == -1)
  {
   document.documentElement.innerHTML = 'This script only works for chrome or firefox <p><img src="http://emojipedia-us.s3.amazonaws.com/cache/a3/44/a3444828bb3ffe489a2699304a629727.png"></img>'

   }
  else 
  {

    loadScript("./DefaultConfig.js")
    loadScript("./ConfigInit.js")
    loadScript("./applyControls.js")
    loadScript("./bundle.js")

  }