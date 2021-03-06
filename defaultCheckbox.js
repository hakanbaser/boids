var defaultChecklist=[
{id:"Tested",label:"Delivering working, tested software every 4 weeks or less",category:"TEST",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"Bussines",label:"Delivering what the business needs most ",category:"BUSSINES",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"Improving",label:"Process is continuously improving",category:"IMPRO",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"Retro",label:"Retrospective happens after every sprint",category:"RE",SubCategory:false,factor:{TR:1,AL:0,TS:1,CV:0,EF:0},},
{id:"RetroPro",label:"Results in concrete improvement proposals",category:"RE",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:0},},
{id:"RetroImp",label:"Some proposals actually get implemented ",category:"RE",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:0},},
{id:"RetroPoImo",label:"Whole team + PO participates ",category:"RE",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:1,EF:0},},
{id:"Backlog",label:"There is a product backlog (PBL) ",category:"BLOG",SubCategory:false,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"BacklogTop",label:"Top items are prioritized by business value ",category:"BLOG",SubCategory:true,factor:{TR:0,AL:1,TS:0,CV:1,EF:1},},
{id:"BacklogEst",label:"Top items are estimated",category:"BLOG",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:0},},
{id:"BacklogEstWrite",label:"Estimates written by the whole team ",category:"BLOG",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:0},},
{id:"BacklogPBL",label:"Top items in PBL small enough to fit in a sprint ",category:"BLOG",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:0,EF:1},},
{id:"BacklogPO",label:"PO understands purpose  of all backlog items",category:"BLOG",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"SprintPM",label:"Have sprint planning meetings",category:"SPM",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"SPrintPO",label:"PO participates",category:"SPM",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"SprintPoPBL",label:"PO brings up-to-date PBL",category:"SPM",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"SprintTeam",label:"Whole team participates",category:"SPM",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"SprintResult",label:"Results in a sprint plan",category:"SPM",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"SprintAchiev",label:"Whole team believes plan is achievable",category:"SPM",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:0},},
{id:"SprintPrio",label:"PO satisfied with priorities ",category:"SPM",SubCategory:true,factor:{TR:0,AL:1,TS:1,CV:1,EF:1},},
{id:"Iteration",label:"Timeboxed iterations",category:"ITE",SubCategory:false,factor:{TR:0,AL:0,TS:0,CV:0,EF:1},},
{id:"Iteration4Week",label:"Iteration length 4 weeks or less",category:"ITE",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"IterationOnTime",label:"Always end on time",category:"ITE",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"IterationControl",label:"Team not disrupted or controlled by outsiders",category:"ITE",SubCategory:true,factor:{TR:0,AL:1,TS:1,CV:0,EF:1},},
{id:"IterationDelivers",label:"Team usually delivers what they committed to ",category:"ITE",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"TeamMembers",label:"Team members sit together",category:"TEAM",SubCategory:false,factor:{TR:1,AL:0,TS:1,CV:0,EF:0},},
{id:"TeamMembers9",label:"Matrue 9 people per team",category:"TEAM",SubCategory:true,factor:{TR:0,AL:1,TS:1,CV:0,EF:0},},
{id:"ProductOwner",label:"Clearly defined product owner (PO)",category:"PO",SubCategory:false,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"ProductOwnerEMP",label:"PO is empowered to prioritize",category:"PO",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"ProductOwnerKNOW",label:"PO has knowledge to prioritize",category:"PO",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"ProductOwnerContact",label:"PO has direct contact with team ",category:"PO",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:0},},
{id:"ProductOwnerStakeholder",label:"PO has direct contact with stakeholders",category:"PO",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:0},},
{id:"ProductOwnerConsistent",label:"PO statements are consistent",category:"PO",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:0},},
{id:"SprintBGL",label:"Team has a sprint backlog ",category:"SPBLG",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"SprintBGLHigh",label:"Highly visible ",category:"SPBLG",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:0,EF:1},},
{id:"SprintBGLUpdate",label:"Updated daily ",category:"SPBLG",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:1},},
{id:"SprintBGLOwned",label:"Owned etrueclusively by the team ",category:"SPBLG",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:1},},
{id:"DailyScrum",label:"Daily Scrum  happens",category:"DAILY",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"DailyScrumTeam",label:"Whole team participates",category:"DAILY",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:0},},
{id:"DailyScrumIMP",label:"Problems and impediments are surfaced",category:"DAILY",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"Review",label:"Demo happens after every sprint",category:"REVIEW",SubCategory:false,factor:{TR:1,AL:1,TS:0,CV:1,EF:1},},
{id:"ReviewShow",label:"Shows working, tested software that meets DoD",category:"REVIEW",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"ReviewFeedback",label:"Feedback received from stakeholders & PO",category:"REVIEW",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:1,EF:1},},
{id:"ReviewEffects",label:"Feedback effects PBL",category:"REVIEW",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:1,EF:0},},
{id:"Done",label:"Have Definition of Done (DoD)",category:"DONE",SubCategory:false,factor:{TR:1,AL:0,TS:1,CV:0,EF:1},},
{id:"DoneIter",label:"DoD achievable within each iteration",category:"DONE",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:1},},
{id:"DoneRespect",label:"Team respects DoD",category:"DONE",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:0},},
{id:"Skill",label:"Team has all skills needed to bring backlog items to Done",category:"SKILL",SubCategory:false,factor:{TR:0,AL:1,TS:1,CV:0,EF:1},},
{id:"Role",label:"Team members not locked into specific roles",category:"ROLE",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"Vision",label:"PBL and product vision is highly visible",category:"VISION",SubCategory:false,factor:{TR:1,AL:0,TS:0,CV:1,EF:0},},
{id:"Estimate",label:"PO available when team is estimating",category:"EST",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:1,EF:0},},
{id:"Impediment",label:"Whole team knows top 1-3 impediments",category:"IMPE",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"ImpedimentTeam",label:"Team has strategy for how to fitrue top impediment",category:"IMPE",SubCategory:true,factor:{TR:0,AL:0,TS:1,CV:0,EF:1},},
{id:"ImpedimentHands",label:"Problem is in the hands of those  who can solve it",category:"IMPE",SubCategory:true,factor:{TR:0,AL:1,TS:1,CV:0,EF:1},},
{id:"ScrumMaster",label:"Team has a Scrum Master (SM)",category:"SM",SubCategory:false,factor:{TR:0,AL:0,TS:1,CV:0,EF:0},},
{id:"ScrumMasterTeam",label:"SM knows the team well",category:"SM",SubCategory:true,factor:{TR:0,AL:0,TS:1,CV:0,EF:0},},
{id:"ScrumMasterWork",label:"All items in sprint plan are workable ",category:"SM",SubCategory:true,factor:{TR:1,AL:1,TS:0,CV:0,EF:1},},
{id:"Burndown",label:"Team has a sprint burndown chart",category:"BDOWN",SubCategory:false,factor:{TR:1,AL:0,TS:0,CV:0,EF:0},},
{id:"BurndownHigh",label:"Highly visible",category:"BDOWN",SubCategory:true,factor:{TR:1,AL:0,TS:0,CV:0,EF:0},},
{id:"BurndownUpdate",label:"Updated daily",category:"BDOWN",SubCategory:true,factor:{TR:0,AL:0,TS:1,CV:0,EF:0},},
{id:"DailyScrumPlace",label:"Daily Scrum is every day, same time & place",category:"DAILY1",SubCategory:false,factor:{TR:1,AL:1,TS:1,CV:0,EF:1},},
{id:"DailyScrumPO",label:"PO participates at least a few times per week",category:"DAILY1",SubCategory:true,factor:{TR:1,AL:1,TS:1,CV:0,EF:0},},
{id:"DailyScrum15M",label:"Matrue 15 minutes",category:"DAILY1",SubCategory:true,factor:{TR:0,AL:0,TS:0,CV:0,EF:1},},
{id:"DailyScrumDoing",label:"Each team member knows what the others are doing ",category:"DAILY1",SubCategory:true,factor:{TR:1,AL:0,TS:1,CV:0,EF:1},},
{id:"Fun",label:"Having fun! High energy level.",category:"FUN",SubCategory:false,factor:{TR:0,AL:0,TS:1,CV:0,EF:0},},
{id:"Experiment",label:"Discussing, criticizing, and experimenting with the process",category:"EXP",SubCategory:false,factor:{TR:1,AL:0,TS:1,CV:0,EF:0},}
]