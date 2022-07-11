
// cHALLENGE10
// const  largValueArray=(arr)=> {
//     let i;
//     let max = arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > max)
//             max = arr[i];
//     }
     
//   return max;
// }
// const  minValueArray=(arr)=> {
//     let i;
//     let min = arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] < min)
//             min = arr[i];
//     }
     
//   return min;
// }
// const calTempAmplitude=(temps)=>{
//     let minTemp=minValueArray(temps);
//     let maxTemp=largValueArray(temps);
//     let amplitudeTemp=maxTemp-minTemp;
//     return amplitudeTemp
// }



// const temps=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];
// let giventempAmplitude=calTempAmplitude(temps);
// console.log(giventempAmplitude);

//challenge11
// const measureKelvin=function(){
//   const measurement={
//     type:'temp',
//     unit:'celsius',
//     value:Number(prompt('Degree celscius:')),
//   };
//   console.log(measurement);
//   const kelvin=measurement.value+273;
//   return kelvin;
// };
// console.log(measureKelvin());


// //challenge12
const data1=[17,21,23];
const data2=[12,-5,-5,0,4];

const printForcast=(arr)=>{
  let str=""
  for(let i=0;i<arr.length;i++){
    str+=`${arr[i]} C in ${i+1} days.....`

  }
  console.log("..."+str);
}

printForcast(data1);
printForcast(data2);