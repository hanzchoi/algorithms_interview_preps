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

// const testMeetings = [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// const test2Meetings = [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }];
function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting    = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}


















// function mergeRanges(meetings) {
//   let testArr = [];
//
//   for (let meeting of test2Meetings) {
//     for(let i = meeting.startTime; i <= meeting.endTime; i++){
//       if(typeof testArr[i] === "undefined"){
//         testArr[i] = 1
//       }
//     }
//     // console.log("Start time: ", meeting.startTime);
//     // console.log("End time: ", meeting.endTime);
//   }
//   for (let i=0; i < testArr; i++){
//     if(testArr[i] === 1){
//       console.log(i);
//     }
//   }
//   // Merge meetings ranges
//   return [];
// }

// for(let i = 0; i < testMeetings.length; i++){
//   console.log(testMeetings[i]);
// }


// for (let i=0; i < 5; i++){
//   console.log(typeof testArr[i]);
// }



// for(let time of testArr){
//   console.log(time);
// }
// let testArr = [];
//
// for (let meeting of testMeetings) {
//   testArr[meeting.startTime] = 1
//   for(let i = meeting.startTime; i <= meeting.endTime; i++){
//     if(typeof testArr[i] === "undefined"){
//       testArr[i] = 1
//     }
//   }
//   // console.log("Start time: ", meeting.startTime);
//   // console.log("End time: ", meeting.endTime);
// }
//
// for(let i=0; i < testArr.length; i++ ) {
//   console.log(`${i}: ${testArr[i]}`);
// }
//
// let merged = [];
// let counter = 0;
//
// for (let i=0; i < testArr.length; i++){
//   if(testArr[i] === 1){
//     if(typeof testArr[i+1] === "undefined"){
//       // console.log(typeof merged);
//       //merged[merged.length-1].push({endTime: testArr[i]})
//       merged[counter]['endTime'] = i;
//       counter += 1;
//     }else{
//       merged[counter] = {startTime: i};
//     }
//   }
// }
//
// console.log(merged);
