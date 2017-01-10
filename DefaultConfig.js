   
var defControls=[
{
  id:"focus",
  label:"Execution Focus",min:0,max:1,step:0.1,value:0.8,
  tooltip:
  "How focused people work.<br>\
   Percent of capacity invested into achieving the defined goals.<br>\
   <br>\
   <u>Left</u> = None.<br>\
   <u>Right</u> = All.",
},

{
  id:"vision",
  label:"Clarity of Vision",min:0,max:1,step:0.1,value:1,
  tooltip:
  "How clear and actionable is the vision of the team.<br>\
  Percent of capacity invested into figuring out the defined goals.<br>\
  <br>\
  <u>Left</u> = All<br>\
  <u>Right</u> = None",
},

{ 
 id:"teamspirit",
 label:"Team Spirit",min:0,max:1,step:0.1,value:1,
 tooltip:
 "How well people collaborate.<br>\
 Percent of capacity invested into personal goals versus shared goals.<br>\
 <br>\
 <u>Left</u> = Fighting against each other<br>\
 <u>Right</u> = Contributing to shared goals",
},

{
  id:"alignment",
  label:"Alignment",min:0,max:1,step:0.1,value:1,
  tooltip:
  "How well are the goals aligned.<br>\
  Amount of different goals existing in the organization.<br>\
  <br>\
  <u>Left</u> = Everybody has personal goals<br>\
  <u>Right</u> = There is only one goal",
},

{
  id:"transparency",
  label:"Transparency",min:0,max:1,step:0.1,value:0.9,
  tooltip:
  "How well do people understand what is going on.<br>\
  Percent of capacity invested figuring out what is happening around.<br>\
  <br>\
  <u>Left</u> = Each individual knows nothing<br>\
  <u>Right</u> = Everybody knows everything",
},

{
  id:"boid-limit",
  label:"Organisation size",min:10,max:500,step:10,value:100,
  tooltip:
  "How big the organization is.<br>\
  <br>\
  <u>Left</u> = 10 people<br>\
  <u>Right</u> = 500 people",
},
]