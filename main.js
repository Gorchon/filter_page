var image = null; 
var imgcanvas = null; 
var redfilter = null;


function checkImageLoad() {
  if ((image === null) || !image.complete()) {
    return false;
  } else {
    return true;
  }
}
function upload(){
  var upload = document.getElementById("finput"); 
  image = new SimpleImage(upload);
  redfilter = new SimpleImage(upload);
  imgcanvas = document.getElementById("canvas");
  image.drawTo(imgcanvas);
}

function doReset() {
  outImage = new SimpleImage(image);
  outImage.drawTo(imgcanvas);
}

function makeGray() {
  var imagee = new SimpleImage(imgcanvas);
  for (var pixel of imagee.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imagee.drawTo(imgcanvas);
}

function rainbowFilter(){

} 


function makeRedfilter(){
  var imagee = new SimpleImage(imgcanvas);
  for (var pixel of imagee.values()){
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3
    if (avg < 128){
      pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    else {
        pixel.setRed(255);
        pixel.setGreen((2*avg)-255);
        pixel.setBlue((2*avg)-255);
    } 
    }
    imagee.drawTo(imgcanvas);
}

/* function doViolet() {
  if (avgColor < 128) {
    red = Math.round(1.6 * avgColor);
    green = 0;
    blue = Math.round(1.6 * avgColor);
  } else {
    red = Math.round(0.4 * avgColor + 153 );
    green = Math.round(2 * avgColor - 255);
    blue = Math.round(0.4 * avgColor + 153 );
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}
 */
function doViolet(){
  var blueImage = null;
  blueImage = new SimpleImage(imgcanvas);
  for (var pixel of blueImage.values()){
    pixel.setBlue(255);
  }
  blueImage.drawTo(imgcanvas);
}

function God_has_blessed_you(){
 /*  var maBrotherInChrist = null;
  maBrotherInChrist = new SimpleImage(imgcanvas);
  var width = maBrotherInChrist.getWidth();
  var height = maBrotherInChrist.getHeight();
  //alert("width: " + width + ", heigh: " + height);
  var X = null;
  var Y = null;
  var partitionX = width / 2;
  var partitionY = height / 2;
  var W = 50
  for (var pixel of maBrotherInChrist.values()){
    X = pixel.getX();
    Y = pixel.getY();
    
    if ((X < 2*W) || (X > (width - 2*W)) || (Y < 2*W) || (Y > (height - 2*W))) {
    //if ((X < W) ) {
      pixel.setRed(127);
      pixel.setGreen(0);
      pixel.setBlue(255);
    } else {
        if ((X > (partitionX - W))&& X < (partitionX + W)) {
          pixel.setRed(127);
          pixel.setGreen(0);
          pixel.setBlue(255);
        } else {
            if ((X > (2*partitionX - W))&& X < (2*partitionX + W)) {
              pixel.setRed(127);
              pixel.setGreen(0);
              pixel.setBlue(255);
            }
           else {
              if ((Y > (partitionY - W))&& Y < (partitionY + W)) {
                pixel.setRed(127);
                pixel.setGreen(0);
                pixel.setBlue(255);
              }
            }  
        }
      }  
  }
  
  maBrotherInChrist.drawTo(imgcanvas); */
  alert("Bendecido dia");
}

function rainbowFilter() {
  var rainbowImage = null;
  rainbowImage =  new SimpleImage(imgcanvas);
  var Y = null;
  var Interseccion_Y = rainbowImage.getHeight() / 7 ;
  var avg = null;
  for (pixel of rainbowImage.values()){
    avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if ( pixel.getY() < Interseccion_Y ){
      if (avg < 128){
        pixel.setRed(avg*2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
        }
    } else {
        if ( pixel.getY() < (Interseccion_Y * 2)){
          if (avg < 128){
            pixel.setRed(2 * avg);
            pixel.setGreen(0.8 * avg);
            pixel.setBlue(0);
          } else {
              pixel.setRed(255);
              pixel.setGreen(1.2 * avg - 51);
              pixel.setBlue(2 * avg - 255);
            }
        } else {
            if ( pixel.getY() < (Interseccion_Y * 3)){
              if (avg < 128){
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
              } else {
                  pixel.setRed(255);
                  pixel.setGreen(255);
                  pixel.setBlue(2 * avg - 255);
                }
            } else {
                if ( pixel.getY() < (Interseccion_Y * 4)){
                  if (avg < 128){
                    pixel.setRed(0);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                  } else {
                      pixel.setRed(2 * avg - 255);
                      pixel.setGreen(255);
                      pixel.setBlue(2 * avg - 255);
                    }
                } else {
                    if ( pixel.getY() < (Interseccion_Y * 5)){
                      if (avg < 128){
                        pixel.setRed(0);
                        pixel.setGreen(0);
                        pixel.setBlue(2 * avg);
                      } else {
                          pixel.setRed(2 * avg - 255);
                          pixel.setGreen(2 * avg - 255);
                          pixel.setBlue(255);
                        }
                    } else {
                        if ( pixel.getY() < (Interseccion_Y * 6)){
                          if (avg < 128){
                            pixel.setRed(0.8 * avg);
                            pixel.setGreen(0);
                            pixel.setBlue(2 * avg);
                          } else {
                              pixel.setRed(1.2 * avg - 51);
                              pixel.setGreen(2 * avg - 255);
                              pixel.setBlue(255);
                            }
                        } else {
                            if (avg < 128){
                              pixel.setRed(1.6 * avg);
                              pixel.setGreen(0);
                              pixel.setBlue(1.6 * avg);
                            } else {
                                pixel.setRed(.4 * avg + 153);
                                pixel.setGreen(2 * avg - 255);
                                pixel.setBlue(.4 * avg + 153);
                              }
             
                           }
                        }
                    } 
              }
           }
      }
  }
  rainbowImage.drawTo(imgcanvas);
}

