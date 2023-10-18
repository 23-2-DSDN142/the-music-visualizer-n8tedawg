let firstRun = true
let loadDino = true
let loadMeteor = true
let themusician = [];
let topsquarex = 0
let topsquarey = 550
let bottomsquarex = 1000
let bottomsquarey = 750
let img;
let themeteor;

//DRAWING THE TREE
let leaveAx = 400
let leaveAy = 320
let leaveBx = 350
let leaveBy = 320
let leaveCx = 400
let leaveCy = 400

//THIS IS SOME GOOD CODING STUFF
let leaforiginX = 500
let leaforiginY = 300

let DRAWINGTREE = true

// THE WIDTH IS 1000-----------------------------------------------------------------------------------------------------------------
// THE HEIGHT IS 750-----------------------------------------------------------------------------------------------------------------

// vocal, drum, bass, and other are volumes ranging from 0 to 100

// THIS IS WHERE YOU CAN CREATE ADD ANYTHING TO MAKE THE MUSIC VISUALISER. YOU CAN OMMIT THIS OUT AND START NEW AND FRESH
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  background(255, 228, 153) // yellow tan sky colour
  
  console.log(song.currentTime());

    if(song.currentTime()>5){
      //fill(252,252,252);
      //rect(100,100,800,800);
      push();
      scale(1)
      image('meteor.png', 100, 100);
      pop();
    }


  
  fill(217, 183, 91);
  noStroke();
  rect(0, 550, 1000, 750) // rectangular floor without the rectMode(CENTER)
  //ellipse(500, 750, 1100, 300); // circular floor
  //rect(500, 750, 1100, 400); // rectangular floor

// THIS IS DRAWING THE TREE BC SOMEHTING NEEDS TO BE CODED, ALTHOUGH FLAMES INSTEAD COULD BE CODED-----------------------------------------
//  function drawtree(leaforiginX,leaforiginY){
//  //fill(135, 168, 50)
//  beginShape();
//  vertex(leaforiginX, leaforiginY)
//  bezierVertex(leaforiginX-100, leaforiginY+20, leaforiginX-150, leaforiginY+20, leaforiginX-100, leaforiginY+100);
//  endShape();


//LOADING THE DINOSAURUS ------------------------------------------------------------------------------------------------------------
//  if(loadDino){ // LOAD THE DINOSAUR IMAGE
//    testImg = loadImage('dinosaurimage.png');
    
//    loadDino = false
    
//  }
  scale(0.3);
//  image(testImg, drum, 500)// if it is just a number then move it sideways or up and down depending on that number



  //map(song.currentTime(), 0,song.duration(), 0, 2300);
  




  // (the loadImage variable, the vocal its moving to, how much you move it up or down)
  // you can also change it to (the loadImage variable, how much to move it left and right, and the vocal its moving to)

  if (firstRun){
    themusician.push(loadImage('themusician/themusician_0.png'));
    themusician.push(loadImage('themusician/themusician_1.png'));
    themusician.push(loadImage('themusician/themusician_2.png'));
    themusician.push(loadImage('themusician/themusician_3.png'));
    themusician.push(loadImage('themusician/themusician_4.png'));
    themusician.push(loadImage('themusician/themusician_5.png'));

    firstRun = false
  }

  let VocalFrame = int(map(vocal, 0, 100, 0, 6));
  push();
  scale(0.6);
  image(themusician[VocalFrame], 1300, 400) // (the singer, how much he moves x-axis, how much he moves y-axis)
  pop();



  }








  //EXAMPLE image test ------------------------------------------------------------------------------------------------------------------------------------
  
    




//  for(let i = 1; i < 5, i++ ){
//
//
//  }

  // vocal, drum, bass, and other are volumes ranging from 0 to 100
  //function draw_one_frame(words, vocal, drum, bass, other, counter) {
   
    
  //}
  


  // These circles move to the bass of the sound EXMAPLE -------------------------------------------------------------------
 //ellipse(width/3, height/2, 50 + bass, 50 + bass)
 //ellipse(width/3*2, height/2, 50 + bass, 50 + bass)

 //rect(width/2, height/2+150, 200+vocal, 50+vocal) // ADDING THE DIFFERENT ORANGE WORDS MAKES THINGS ANIMATE BASED ON THE LETTERING


 //  let bar_spacing = height / 10;
 //  let bar_height = width / 12;
 //  let bar_pos_x = width / 2;
 

   // vocal bar is red
 //  fill(200, 0, 0);
 //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
 //  fill(0);
 //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
 //  fill(0, 200, 0);
 //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
 //  fill(0);
 //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
 //  fill(50, 50, 240);
 //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
 //  fill(0);
 //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
 //  fill(200, 200, 200);
 //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
 //  fill(0);
 //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
 //  fill(255, 255, 0);
 
   // display "words"
 //  textAlign(CENTER);
 //  textSize(vocal);
 //  text(words, width/2, height/3);

   // last 2 numbers talk about the boundary. How far can it NOT go across and how far can it NOT go down?
   // I think the first talks about which variable (vocal, drum, bass, other)
   // 2nd and 3rd talk about the position of the current song. the 4th and 5th talk about where it would hit until the boundary.
   
   // PBA with MAPS ---------------------------------------------------------------------------------------------
//   fill(69, 120, 222);
   
  // let positionchange = map(drum, 0, 100, 400, 0);
//   rect(positionchange+300, 375, 100, 100); // moving sideways
   //rect(300, 375, positionchange, positionchange); //pulsing

   // testing the lerpcolor  function
//   let orange = color(252, 186, 3)
//   let pink = color(235, 84, 187)

//   let middleColor = lerpColor(orange, pink, 0.5)


    // Phoebe Example --------------------------------------------------------------------------------------------
   // firework Phoebe example (this shows how an image can move and repeat again)
  // fireworkY = firework-5;
   
  // if(fireworkY <-160){
  //  fireworkY = height*2

  // }

  // PBA with FOR LOOPS ------------------------------------------------------------------------------------------
//  fill(69, 120, 222);

//  let lengthY = 200
//  let placementY = 375
//  let positionchange = map(drum, 0, 100, 400, 0);
  
//  for(let i = 1; i <= positionchange; i++ ) { // i stands for integer. (start, while, end)
    // minusminus would result in the loop going the other way.
//    let lineBounce = i*6
    //rect(500, placementY, 100, lengthY);
//    rect(lineBounce, placementY, lineBounce, lengthY);
//  }

// Test Person ----------------------------------------------------------------------------------------------------

// fill(0,0,0);
// rect(200, 650, 100, 150);
// fill(255,255,255);
// ellipse(200, 550, 100, 100);


// if(vocal<=25){
  
// }\
// The SINGER ----------------------------------------------------------------------------------------------------


// vocal, drum, bass, and other are volumes ranging from 0 to 100
//function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
// MISCHELLANEOUS----------------------------------------------------------------------------------------------------

//  for (let i = 1; i <=10; i++){
//    let lineStep = i*10
//    stroke(4);
//    rect(topsquarex+10, lineStep, bottomsquarex-950, lineStep);
//  }

//  stroke(0,0,0);
//  strokeWeight(4);
  //rect(topsquarex+10, topsquarey+10, bottomsquarex-20, bottomsquarey-570);
//  rect(topsquarex+10, topsquarey+10, bottomsquarex-950, bottomsquarey-700);

//  if(singerimageloadin){ //this is drawing the singer character.
//    //rectMode(CENTER);
//    testImg = loadImage('singernormal.png');
//    singerimageloadin = false
//    
//  }
