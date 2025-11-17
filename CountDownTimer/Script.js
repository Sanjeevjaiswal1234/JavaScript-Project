const endDate = "27 November 2025  09:55 PM ";
document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input");

// const clock =()=>{

// }
 
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now )/1000;
    if(diff<0)
      return;
    // convert in to days
    inputs[0].value=(Math.floor(diff/3600/24) );
    // convert in to hours
    inputs[1].value=(Math.floor(diff/3600)%24);
    //convert in to minutes
    inputs[2].value=(Math.floor(diff/60)%60);
    // in to second
    inputs[3].value=(Math.floor(diff %60));
    
}
//intial clock
clock()
/*
  1 day = 24 hrs
  1hr = 60 mins
  60 min = 3600 sec

*/
setInterval(
  () =>{
    clock()
  },1000
)
