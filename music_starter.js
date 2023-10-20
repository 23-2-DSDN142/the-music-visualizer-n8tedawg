// For the bassist
let shadescaveman = true
let themusician = [];

// For the Dinosaur Crowd
let dinosaurcrowd = true

// For the adjusting of the coded trees
let treesway = true

// For the drummer
let orangecaveman = true
let thedrummer = [];



// For the Ground
let topsquarex = -10
let topsquarey = 575
let bottomsquarex = 1200
let bottomsquarey = 750

// For the Meteor in the background
let flamingmeteor = true



let img;
let themeteor;



let thedinosrun = true

let runX = 5700
let runY = 300

let treeleafX = 500
let treeleafY = 300

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  let meteorgettingclose = map(song.currentTime(), 0, song.duration(), 0, 700); // Map that allows the meteor to come in during the duration of the song
  let dinosaurvibing = map(vocal, 0, 100, 0, -600); // Map that allows the dinosaurs to be proportionate to the 'vocals' variable
  let treejump = map(other, 0, 100, 0, 200); // Map that allows the trees to be proportionate to the 'others' variable
  let sunjump = map(other, 0, 100, 0, 200); // Map that allows the sun to be proportionate to 'others' variable

  background(125, 189, 229) // Sky blue colour

  fill(245, 194, 66)
  ellipse (645, 200, sunjump, sunjump); // The sun in the background

  function drawground(){ // This function draws the ground for the musicians to stand on
  fill(217, 183, 91); // The flooring colour
  strokeWeight(6);
  rect(topsquarex, topsquarey, bottomsquarex, bottomsquarey) // The flooring itself
  }

  console.log(song.currentTime());

  function drawcrowd(x,y){ // This function draws the dinosaur crowd
    if(dinosaurcrowd){
      faceleftdinosaur = loadImage('shadowdinofacingleft.png');
      facerightdinosaur = loadImage('shadowdinofacingright.png');
      dinosaurcrowd = false
    }
  
    translate(x,y);
    scale(0.2);
    image(faceleftdinosaur, 3000, dinosaurvibing) // The dinosaur on the very far right
    image(facerightdinosaur, -1400, dinosaurvibing) // The dinosaur on the very left
    image(faceleftdinosaur, 1500, dinosaurvibing+200) // The dinosaur in the middle on the right
    image(facerightdinosaur, -550, dinosaurvibing+400) // The dinosaur in the middle on the left
  }

  function drawcodedtree(treeleafX, treeleafY){ // This function draws the coded trees 
    strokeWeight(6)
    fill(190, 130, 59) // The brown trunk of the tree
    quad (treeleafX-50, treeleafY+400, treeleafX-25, treeleafY+5, treeleafX+25, treeleafY+5, treeleafX+50, treeleafY+400)

    strokeWeight(6)
    fill(135, 168, 62) // Bottom Left Leaf of the tree
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX-100, treeleafY+20, treeleafX-150, treeleafY+20, treeleafX-100, treeleafY+100);
    endShape();

    strokeWeight(6)
    line(treeleafX-100, treeleafY+100, treeleafX, treeleafY)

    strokeWeight(6) // Bottom Right Leaf of the tree
    fill(135, 168, 62)
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX+100, treeleafY+20, treeleafX+150, treeleafY+20, treeleafX+100, treeleafY+100);
    endShape();

    strokeWeight(6)
    line(treeleafX+100, treeleafY+100, treeleafX, treeleafY)

    strokeWeight(6) // Top Left Leaf of the tree
    fill(135, 168, 62)
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX-100, treeleafY-80, treeleafX-150, treeleafY-80, treeleafX-150, treeleafY);
    endShape();

    strokeWeight(6)
    line(treeleafX-150, treeleafY, treeleafX, treeleafY)

    strokeWeight(6) // Top Right Leaf of the tree
    fill(135, 168, 62)
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX+100, treeleafY-80, treeleafX+150, treeleafY-80, treeleafX+150, treeleafY);
    endShape();

    strokeWeight(6)
    line(treeleafX+150, treeleafY, treeleafX, treeleafY)
  }

  function meteorgetsbigger(x,y){ // This function draws the meteor coming closer in the background 
    if(flamingmeteor){
      rockchunk = loadImage('meteor.png');
      flamingmeteor = false
    }
    translate(x,y);
    image(rockchunk, 0, 0, meteorgettingclose+10, meteorgettingclose);
    flamingmeteor = false
  }

  function drawdrummer(x,y){ // This function draws the drummer
    if (orangecaveman){
      thedrummer.push(loadImage('thedrummer/thedrummer_0.png'));
      thedrummer.push(loadImage('thedrummer/thedrummer_1.png'));
      thedrummer.push(loadImage('thedrummer/thedrummer_2.png'));
      thedrummer.push(loadImage('thedrummer/thedrummer_3.png'));
      thedrummer.push(loadImage('thedrummer/thedrummer_4.png'));
      thedrummer.push(loadImage('thedrummer/thedrummer_5.png'));
  
      orangecaveman = false
    }
  
    let drummingpart = int(map(drum, 0, 100, 0, 6));
    push();
    translate(x,y)
    scale(0.2);
    image(thedrummer[drummingpart],0,0)
    pop();
  
  }
  
  function drawbassist(x,y){ // This function draws the bassist
    if (shadescaveman){
      themusician.push(loadImage('themusician/themusician_0.png'));
      themusician.push(loadImage('themusician/themusician_1.png'));
      themusician.push(loadImage('themusician/themusician_2.png'));
      themusician.push(loadImage('themusician/themusician_3.png'));
      themusician.push(loadImage('themusician/themusician_4.png'));
      themusician.push(loadImage('themusician/themusician_5.png'));
  
      shadescaveman = false
    }
  
    let VocalFrame = int(map(bass, 0, 100, 0, 6));
    push();
    translate(x,y)
    scale(0.2);
    image(themusician[VocalFrame],0,0)
    pop();
  }

 if(treesway){ // This code allows me to adjust the placement of the coded trees
  drawcodedtree(treeleafX-350, treejump+100)
  drawcodedtree(treeleafX+350, treejump+100)
 }
   
    meteorgetsbigger();
    drawground(); 
    drawdrummer(300, 175);
    drawbassist(100,50);
    drawcrowd(200, 500);
    
    if(song.currentTime()<1 || song.currentTime()>281){ // This function is just to add a black screen at the start and end of the music visualiser.
      push()
      fill(0)
      rect(-1000,-2500,5000,3800);
      pop()

    }

      }

    
    
    
  
    
//   if(song.currentTime()>5 && song.currentTime()<7){ // Spawn and Disappear Meteor
      //fill(252,252,252);
      //rect(100,100,800,800);

      
//    }

 
     //need this to make the images appear otherwise images don't appear
//    image(testImg, 100, drum+1000)// if it is just a number then move it sideways or up and down depending on that number

  
   // rectangular floor without the rectMode(CENTER)
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
  



  //map(song.currentTime(), 0,song.duration(), 0, 2300);
  




  // (the loadImage variable, the vocal its moving to, how much you move it up or down)
  // you can also change it to (the loadImage variable, how much to move it left and right, and the vocal its moving to)

  








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
   
   //let positionchange = map(drum, 0, 100, 400, 0);
   //rect(positionchange+300, 375, 100, 100); // moving sideways
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
