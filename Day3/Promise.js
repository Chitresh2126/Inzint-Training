// let myPromise = new Promise(function(myResolve, myReject){
//     myResolve();
//     myReject();
// });

// myPromise.then(
//     function(value){console.log("Success")},
//     function(error){console.log("NOTSuccess")}
// );


// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 10;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//          function(value){console.log("Success")},
//          function(error){console.log("NOTSuccess")}
//   );


// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("HII Hello!"); }, 5000);
//   });


// async function myFunction() {
//     return "Hello";
//   }
//   myFunction().then(
//          function(value){console.log("Success")},
//          function(error){console.log("NOTSuccess")}
//   );


// async function myfunction(){
//     const myPromise = new Promise(function(accepted,rejected){
//         accepted("This will accept now !");
//     });

//     console.log(await myPromise);
// }

// myfunction();


// async function getUserDetail() {
//      const user = await fetch("https://type.fit/api/quotes");
//      const userData = await user.json();
//      console.log(userData);}
//      getUserDetail();



function reqq(complete){
return new Promise(function(resolve,reject){
    console.log("Fatching data ,please wait!");
    setTimeout(() =>{
        if(complete){
        resolve("WE are success");
    }
    else{
        reject("Sorry");
    }
    },3000)    
});
}

// let onfullfilment = (result) =>{
//     console.log(result);
// }
// let onrejection = (error) =>{
//     console.log(error);
// }

// prom(false).then(onfullfilment);
// // prom(false).catch(onrejection);
// prom(false).then(onfullfilment).catch(onrejection);

reqq(true).then((result) =>  {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
