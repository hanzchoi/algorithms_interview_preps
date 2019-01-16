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

function mergeRanges(meetings) {

  // Merge meetings ranges
  return [];
}

// for(let i = 0; i < testMeetings.length; i++){
//   console.log(testMeetings[i]);
// }

for (let meeting of testMeetings) {
  console.log("Start time: ", meeting.startTime);
  console.log("End time: ", meeting.endTime);
}
