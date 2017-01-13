
var factorsMax={TR:0,AL:0,TS:0,CV:0,EF:0}
var factorSubFactors={TR:0,AL:0,TS:0,CV:0,EF:0}
var factorsSumAll={TR:0,AL:0,TS:0,CV:0,EF:0}

function initCheckbox(){
  var myTable=document.getElementById("boxen")

  defaultChecklist.forEach(function(item) {
    defineFactorAttribution(item)

    var myRow=myTable.insertRow(-1)
    myRow.id= "ROW-" + item.id
    var myTD1=document.createElement("td")
    myTD1.innerHTML='<input type="checkbox" onclick="checkBoxVisible(this);" " name="'+ item.id+'"></input>' + ' ' + item.label
    myTD1.align="left"
    myTD1.id= "FIELD-" + item.id
    myRow.appendChild(myTD1)
    if (item.SubCategory){
      myRow.style.display="none"
    }
    });  
}

function checkBoxVisible(cat){
 var targetVisibility=(cat.checked)?"table-row":"none"
 var myCat =  getCheckBoxID (cat)
 var checkboxSubCatagory = getCorospendingToCheckbox(cat)
 setVisibility (myCat, targetVisibility, checkboxSubCatagory)
 SumOfFactors(cat, targetVisibility)
}

function getCheckBoxID (cat) {
  var result
  defaultChecklist.forEach(function(all) {
    if ((all.id == cat.name)) {
      result = all.category
    }
  });
 return result
}

function defineFactorAttribution (checkItem) {
  for (var x in checkItem.factor)
  { 
    factorsMax[x] += checkItem.factor[x]
  }
  return factorsMax
}

function SumOfFactors(cat, checkStatus){
  defaultChecklist.forEach(function(all) {
   if (cat.name == all.id) {
    for (var y in all.factor) {
     factorSubFactors[y] = all.factor[y]
     if (checkStatus == "table-row") {
       factorsSumAll[y]  += 1 * factorSubFactors[y]
      }
      else
      {
        factorsSumAll[y]  -= factorSubFactors[y]
      }
     // alert("Status " + checkStatus  +  " factor " + factorSubFactors[y] + " Summe " + factorsSumAll[y] + " FactorMax " + factorsMax[y] + " Ergebnis " + factorsSumAll[y]/factorsMax[y])
     // alert("Status " + checkStatus  + " FactorMax " + factorsMax[y] + " Ergebnis " + factorsSumAll[y]/factorsMax[y])
    }
   }
  });
 }

function getCorospendingToCheckbox (cat) {
  var result
  defaultChecklist.forEach(function(all) {
    if ((all.id == cat.name)) {
      result = all.SubCategory
    }
  });
 return result
}

function setVisibility (myCat, targetVisibility, checkboxSubCatagory) {
 if (checkboxSubCatagory) {return}
  defaultChecklist.forEach(function(all) {
    if ((all.category == myCat && all.SubCategory)) {
      document.getElementById("ROW-"+all.id).style.display = targetVisibility
      document.getElementById("FIELD-"+all.id).style="padding-left:20px"
    }
 
  });
}

function returnValuesTosetBackOrgaSim (){
// ?focus=0.5&vision=0.5&teamspirit=0.7&alignment=0.5&transparency=0.7&boid-limit=100
// TR:0,AL:0,TS:0,CV:0,EF:0
var paramString = "?"
paramString += "focus=" + factorsSumAll.EF/factorsMax.EF
paramString += "&vision=" + factorsSumAll.CV/factorsMax.CV
paramString += "&teamspirit=" + factorsSumAll.TS/factorsMax.TS
paramString += "&alignment=" + factorsSumAll.AL/factorsMax.AL
paramString += "&transparency=" + factorsSumAll.TR/factorsMax.TR
paramString += "&boid-limit=100"

//window.open("file:///C:/Users/hbaser/Meine-Daten/Boids/Boids/OrganisationSim.html"+ paramString)
window.open("http://www.scrumakademie.org/wp-content/uploads/2017/01/OrganisationSim.html" + paramString)
// alert(paramString)
}


initCheckbox()