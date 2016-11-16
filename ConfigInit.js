function initConfig(){

  var myTable=document.getElementById("Controls")

  for (var i in controls)
  {
    var item=controls[i]
    var myRow=myTable.insertRow(0)
    var myTH1=document.createElement("th")
    myTH1.innerHTML=item.label+': <span class="tooltip">'+item.tooltip+'</span>'
    myTH1.align="left"
    myRow.appendChild(myTH1)

    var myTH2=document.createElement("th")
    myTH2.innerHTML='<input type="range" id="'+item.id+'" min="'+item.min+'" max="'+item.max+'" step="'+item.step+'" value="'+item.value+'"></input>' 
    myRow.appendChild(myTH2)
  }
//      myCell1.innerHTML=myLabel+': <span class="tooltip">'+myTooltip+'</span>'
//     }

if (location.search.substr(1).split("&") != ""){
  location.search.substr(1).split("&").forEach(function(item) 
  { 
    var controlVar=document.getElementById(item.split("=")[0])
    controlVar.value = item.split("=")[1]
    controlVar.reload

  })
}
}

initConfig()