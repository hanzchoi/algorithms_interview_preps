/*
{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm
*/

/*
Input:
  [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]

Return:
  [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
  ]
*/

const testMeetings = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

const test2Meetings = [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }];

function mergeRanges(meetings) {
  let testArr = [];

  for (let meeting of test2Meetings) {
    for(let i = meeting.startTime; i <= meeting.endTime; i++){
      if(typeof testArr[i] === "undefined"){
        testArr[i] = 1
      }
    }
    // console.log("Start time: ", meeting.startTime);
    // console.log("End time: ", meeting.endTime);
  }
  for (let i=0; i < testArr; i++){
    if(testArr[i] === 1){
      console.log(i);
    }
  }
  // Merge meetings ranges
  return [];
}

// for(let i = 0; i < testMeetings.length; i++){
//   console.log(testMeetings[i]);
// }


// for (let i=0; i < 5; i++){
//   console.log(typeof testArr[i]);
// }



// for(let time of testArr){
//   console.log(time);
// }
let testArr = [];

for (let meeting of test2Meetings) {
  for(let i = meeting.startTime; i <= meeting.endTime; i++){
    if(typeof testArr[i] === "undefined"){
      testArr[i] = 1
    }
  }
  // console.log("Start time: ", meeting.startTime);
  // console.log("End time: ", meeting.endTime);
}


let merged = []

for (let i=0; i < testArr.length; i++){
  if(testArr[i] === 1){
    merged.push({startTime: testArr[i]})
    if(typeof testArr[i+1] === "undefined"){
      console.log(typeof merged);
      //merged[merged.length-1].push({endTime: testArr[i]})
    }
  }
}

console.log(merged);
