var defaultChecklist=[
{
  id:"Retro",
  label:"Retrospective happens after every sprint",
  category: "RE",
  SubCategory: false,
  factor:{ TR:1 , AL:0 , TS:1 , CV:0, EF:1 
  },
},

{
  id:"RetroPro",
  label:"Results in concrete improvement proposals",
  category: "RE",
  SubCategory: true,
  factor:{ TR:1 , AL:1 , TS:1 , CV:1, EF:1 
  },
},

{
  id:"RetroProImp",
  label:"Some proposals actually get implemented",
  category: "RE",
  SubCategory: true,
  factor:{ TR:0 , AL:0 , TS:1 , CV:0, EF:1 
  },
},


{
  id:"RetroPoTeam",
  label:"Whole team + PO participates",
  category: "RE",
  SubCategory: true,
  factor:{ TR:1 , AL:0 , TS:1 , CV:1, EF:1 
  },
},

{
  id:"POBacklog",
  label:"PO has a product backlog (PBL)",
  category: "PBL",
  SubCategory: false,
  factor:{ TR:0 , AL:0 , TS:1 , CV:1, EF:1 
  },
},

{
  id:"SprintPlanningMeeting",
  label:"Have sprint planning meetings",
  category: "SPM",
  SubCategory: false,
  factor:{ TR:1 , AL:1 , TS:1 , CV:1, EF:1 
  },
}
]