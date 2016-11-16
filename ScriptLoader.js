      function loadScript (scriptSource)
      {
      	var myscript = document.createElement('script')
      	myscript.type="text/javascript"
      	myscript.src=scriptSource;
      	document.body.appendChild(myscript);
      }
