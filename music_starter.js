let shadescaveman = true // The Bassist
let themusician = [];

let orangecaveman = true // The Drummer
let thedrummer = [];

let dinosaurcrowd = true // The Dinosaur Crowd

let treeleafX = 500 // Adjusting the Coded Trees
let treeleafY = 300
let treesway = true

let topsquarex = -10 // The Ground
let topsquarey = 575
let bottomsquarex = 1200
let bottomsquarey = 750

let flamingmeteor = true // The Meteor

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  let meteorgettingclose = map(song.currentTime(), 0, song.duration(), 0, 700); // Map that allows the meteor to come in during the duration of the song
  let dinosaursvibing = map(vocal, 0, 100, 0, -600); // Map that allows the dinosaurs to be proportionate to the 'vocals' variable
  let treejump = map(other, 0, 100, 0, 200); // Map that allows the trees to be proportionate to the 'others' variable
  let sundance = map(other, 0, 100, 0, 200); // Map that allows the sun to be proportionate to 'others' variable

  background(125, 189, 229) // Sky blue colour

  fill(245, 194, 66)
  ellipse (645, 200, sundance, sundance); // The sun in the background

  function drawground(){ // This function draws the ground for the musicians to stand on
  fill(217, 183, 91); // The flooring colour
  strokeWeight(6);
  rect(topsquarex, topsquarey, bottomsquarex, bottomsquarey) // The flooring itself
  }

  function drawcrowd(x,y){ // This function draws the dinosaur shadows
    if(dinosaurcrowd){
      faceleftdinosaur = loadImage('shadowdinofacingleft.png');
      facerightdinosaur = loadImage('shadowdinofacingright.png');
      dinosaurcrowd = false
    }
  
    translate(x,y); // This in turn draws 4 of those dinosaur shadows, creating a crowd
    scale(0.2);
    image(faceleftdinosaur, 3000, dinosaursvibing) // The dinosaur on the very far right
    image(facerightdinosaur, -1400, dinosaursvibing) // The dinosaur on the very left
    image(faceleftdinosaur, 1500, dinosaursvibing+200) // The dinosaur in the middle on the right
    image(facerightdinosaur, -550, dinosaursvibing+400) // The dinosaur in the middle on the left
  }

  function drawcodedtree(treeleafX, treeleafY){ // This function draws the coded trees 
    strokeWeight(6)
    fill(190, 130, 59) // The brown trunk of the tree
    quad (treeleafX-50, treeleafY+400, treeleafX-25, treeleafY+5, treeleafX+25, treeleafY+5, treeleafX+50, treeleafY+400)

    strokeWeight(6)
    fill(135, 168, 62) // Bottom Left leaf of the tree
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX-100, treeleafY+20, treeleafX-150, treeleafY+20, treeleafX-100, treeleafY+100);
    endShape();

    strokeWeight(6)
    line(treeleafX-100, treeleafY+100, treeleafX, treeleafY)

    strokeWeight(6) // Bottom Right leaf of the tree
    fill(135, 168, 62)
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX+100, treeleafY+20, treeleafX+150, treeleafY+20, treeleafX+100, treeleafY+100);
    endShape();

    strokeWeight(6)
    line(treeleafX+100, treeleafY+100, treeleafX, treeleafY)

    strokeWeight(6) // Top Left leaf of the tree
    fill(135, 168, 62)
    beginShape();
    vertex(treeleafX, treeleafY)
    bezierVertex(treeleafX-100, treeleafY-80, treeleafX-150, treeleafY-80, treeleafX-150, treeleafY);
    endShape();

    strokeWeight(6)
    line(treeleafX-150, treeleafY, treeleafX, treeleafY)

    strokeWeight(6) // Top Right leaf of the tree
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

  if(treesway){ // This if statement allows me to adjust the placement of the coded trees
  drawcodedtree(treeleafX-350, treejump+100)
  drawcodedtree(treeleafX+350, treejump+100)
  }
   
    meteorgetsbigger(); // This draws the meteor
    drawground(); // This draws the ground
    drawdrummer(300, 175); // This draws the drummer
    drawbassist(100,50); // This draws the bassist
    drawcrowd(200, 500); // This draws the crowd of dinosaurs
    
  if(song.currentTime()<1 || song.currentTime()>281){ // This if statement is for me to add a black screen at the start and end of the music visualiser.
      push()
      fill(0)
      rect(-1000,-2500,5000,3800);
      pop()
  }

      }
