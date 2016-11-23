function initCheckbox(){
  var myTable=document.getElementById("boxen")

  for (var i in defaultChecklist)
  {
    var item=defaultChecklist[i]
    var myRow=myTable.insertRow(-1)
    var myTH1=document.createElement("th")
    myTH1.innerHTML='<input type="checkbox" onclick="checkBoxVisible(this);" " name="'+ item.id+'"></input>' + ' ' + item.label
    myTH1.align="left"
    myTH1.id= "ROW-" + item.id
    if (item.SubCategory){
      myTH1.style.visibility = "hidden"
    }
    myRow.appendChild(myTH1)
  }
}

function checkBoxVisible(cat){

 var targetVisibility=(cat.checked)?"visible":"hidden"
 var myCat =  getCheckBoxID (cat)
 setVisibility (myCat, targetVisibility)
}


function getCheckBoxID (cat) {

  for (var x in defaultChecklist)
  { 
    var all = defaultChecklist[x]
    if ((all.id == cat.name)) {
      return all.category
    }
  }
}

function setVisibility (cat, targetVisibility) {

  for (var x in defaultChecklist)
  { 
    var all = defaultChecklist[x]
    if ((all.category == cat && all.SubCategory)) {
      document.getElementById("ROW-"+all.id).style.visibility = targetVisibility
    }
  }

}



initCheckbox()