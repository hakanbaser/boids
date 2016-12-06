
var factorsMax={TR:0,AL:0,TS:0,CV:0,EF:0}
var factorSubFactors={TR:0,AL:0,TS:0,CV:0,EF:0}
var factorsSumAll={TR:0,AL:0,TS:0,CV:0,EF:0}
// var output = [], itemHa;
function initCheckbox(){
  var myTable=document.getElementById("boxen")
  
  for (var i in defaultChecklist)
  {
    var item=defaultChecklist[i]
    defineFactorAttribution(item)

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

 // inhalt()
}

function checkBoxVisible(cat){
 var targetVisibility=(cat.checked)?"visible":"hidden"
 var chekboxStat = (cat.checked)?1:0
 var myCat =  getCheckBoxID (cat)
 setVisibility (myCat, targetVisibility)
 SumOfFactors(cat, chekboxStat)
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

function defineFactorAttribution (checkItem) {
  for (var x in checkItem.factor)
  { 
    factorsMax[x] += checkItem.factor[x]
  }
  return factorsMax
}

function SumOfFactors(cat, checkStatus){
  for (var x in defaultChecklist) {
   all = defaultChecklist[x]
   if (cat.name == all.id) {
    for (var y in all.factor) {
     factorSubFactors[y] = all.factor[y]
     if (checkStatus) {
       factorsSumAll[y]  += checkStatus * factorSubFactors[y]
     }
      else
     {
        factorsSumAll[y]  -= factorSubFactors[y]
     }
    // alert("Status " + checkStatus  +  " factor " + factorSubFactors[y] + " Summe " + factorsSumAll[y] + " FactorMax " + factorsMax[y] + " Ergebnis " + factorsSumAll[y]/factorsMax[y])
  //   alert("Status " + checkStatus  + " FactorMax " + factorsMax[y] + " Ergebnis " + factorsSumAll[y]/factorsMax[y])
     }

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

// Test

function inhalt(){

defaultChecklist.forEach(function(m,i){

alert("checklist " + i)

for(ein in m){

  alert(m[ein])

  }

});
}

//TestEnde

initCheckbox()