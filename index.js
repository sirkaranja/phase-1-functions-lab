// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(streetblocks) {
 distanceFromHqInBlocks= Math.abs(streetblocks-42);
 return distanceFromHqInBlocks;
}
function distanceFromHqInFeet(streetblocks){
  distanceFromHqInFeet=distanceFromHqInBlocks *264;
  return distanceFromHqInFeet;
}
function distanceTravelledInFeet(start,destination){
  distanceTravelledInFeet= Math.abs(destination-start) * 264;
  return distanceTravelledInFeet;
}
function calculatesFarePrice(start,destination){
  distanceTravelledInFeet= Math.abs(destination-start)*264;
  if (distanceTravelledInFeet <= 400) {
      calculatesFarePrice = 0;
      return calculatesFarePrice;
  } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet<2000) {
      calculatesFarePrice  = Maths.abs(distanceTravelledInFeet - 400) * 2;
      return calculatesFarePrice;
  }else if (distanceTravelledInFeet > 2000 && distanceFromHqInFeet < 2500) {
  
     return calculatesFarePrice = 25;
  } else {
      return calculatesFarePrice = "cannot travel that far";
  }
}