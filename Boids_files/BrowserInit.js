  if(navigator.userAgent.indexOf("Chrome") == -1 )
    {
        document.documentElement.innerHTML = 'This script only works for chrome. <p><img src="http://emojipedia-us.s3.amazonaws.com/cache/a3/44/a3444828bb3ffe489a2699304a629727.png"></img>'
    }
    else 
    {

      loadScript("./Boids_files/DefaultConfig.js")
      loadScript("./Boids_files/ConfigInit.js")
      loadScript("./Boids_files/bundle.js")

    }