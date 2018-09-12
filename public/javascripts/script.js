let carouselImage = [
  "blueberries.png",
  "oils-background-image.png",
  "heart-oil-background.png",
  "foot-picture.png"
]

let carouselCounter = -1;
let carouselTimeout;

let textStuff = [
  "Celine Heldrup"
]

$(".next-image-carousel").click(() => {
  textFadingBack(0)
  //textRemoval(textStuff[0])
});

function nextImage() {
  carouselCounter += 1;
  let newCarouselCounter = carouselCounter%carouselImage.length;
  let newCarouselCounterTwo = (carouselCounter + 1)%carouselImage.length;
  $("#background-" + newCarouselCounter).css("width", "0%");
  $("#background-" + newCarouselCounter).css("color", "transparent");
  //$("#text-box-" + newCarouselCounter).css("font-size", "2vw");
  //$("#text-box-" + newCarouselCounter).css("transform", "rotate(10deg)");
  $("#background-" + newCarouselCounterTwo).css("width", "100%");
  setTimeout(() => {
  }, 400)
}

$(".previous-image-carousel").click(() => {
  carouselCounter += 1;
  let newCarouselCounter = carouselCounter%carouselImage.length;
  let newCarouselCounterTwo = (carouselCounter + carouselImage.length - 1)%carouselImage.length;
  $("#background-" + newCarouselCounter).css("width", "0%");
  $("#background-" + newCarouselCounterTwo).css("width", "100%");
  carouselCounter = (carouselCounter%carouselImage.length) + carouselImage.length - 2;
})



$(document).ready(function(){
  textFading(80);
  //$('#text-box-0 > h1:first').css("background", "linear-gradient(to left, rgba(255, 0, 0, 0) 0%, rgb(17, 0, 255) 0%)")
  //textWriting(textStuff[0].split(""))
})

function textFading(number) {
  $('#text-box-0 > h1:first').css("background", "linear-gradient(to left, rgba(255, 0, 0, 0) " + number + "%, rgb(224, 224, 224) 75%)")
  $("#text-box-0 > h1:first").css("-webkit-background-clip", "text")
  number -= 1;
  if (number > 0) {
    setTimeout(() => {
      return textFading(number);
    }, 30)
  } else {
    return textFadingTwo(80)
  }
}

function textFadingTwo(number) {
  $('#text-box-0 > h1:first').css("background", "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(224, 224, 224) " + number + "%)");
  $("#text-box-0 > h1:first").css("-webkit-background-clip", "text");
  number -= 1;
  if (number > 0) {
    setTimeout(() => {
      return textFadingTwo(number);
    }, 10)
  }
}

function textFadingBack(number) {
  console.log(number);
  $('#text-box-0 > h1:first').css("background", "linear-gradient(to left, rgba(255, 0, 0, 0) " + number + "%, rgb(224, 224, 224) 75%)")
  $("#text-box-0 > h1:first").css("-webkit-background-clip", "text")
  number += 1;
  if (number < 100) {
    setTimeout(() => {
      return textFadingBack(number);
    }, 10)
  } else {
    return nextImage();
  }
}



function textWriting(array) {
  document.getElementById("background-header-0").innerHTML += array.shift();
  if (array.length !== 0) {
    setTimeout(() => {
      return textWriting(array);
    }, 50);
  } else return;
}

function textRemoval(str) {
  document.getElementById("background-header-0").innerHTML = str;
  console.log(str.length)
  if (str.length !== 0) {
    str = str.substring(0, str.length-1);
    setTimeout(() => {
      return textRemoval(str);
    }, 70);
  } else return document.getElementById("background-header-0").innerHTML = ""
}




//THIS ONE LOOKS NICE!
// $(".next-image-carousel").click(() => {
//   carouselCounter += 1;
//   let newCarouselCounter = carouselCounter%carouselImage.length;
//   let newCarouselCounterTwo = (carouselCounter + 1)%carouselImage.length;
//   $("#background-" + newCarouselCounter).css("width", "0%");
//   setTimeout(() => {
//     $("#background-" + newCarouselCounterTwo).css("width", "100%");
//   }, 300)
// })

// $(".previous-image-carousel").click(() => {
//   carouselCounter += 1;
//   let newCarouselCounter = carouselCounter%carouselImage.length;
//   let newCarouselCounterTwo = (carouselCounter + carouselImage.length - 1)%carouselImage.length;
//   console.log(newCarouselCounter)
//   console.log(newCarouselCounterTwo)
//   $("#background-" + newCarouselCounter).css("width", "0%");
//   $("#background-" + newCarouselCounterTwo).css("width", "100%");
// })




// let widthRemove = 100;
// let widthAdd = 0;
// let carouselCounter = 0;
// let carouselImage = [
//   "#blueberries-background",
//   "#heart-oil-background",
//   "#oils-background"
// ];

// function carousel(next, counter) {
//   if (next == "next") {
//     if (widthAdd < 100) {
//       widthAdd += 1;
//       widthRemove -= 1;
//       $(carouselImage[counter]).css("width", widthAdd + "%");
//       if (counter !== 0) {
//         $(carouselImage[counter - 1]).css("width", widthRemove + "%");
//       } else if (counter === 0) {
//         $(carouselImage[carouselImage.length - 1]).css(
//           "width",
//           widthRemove + "%"
//         );
//       }
//       return setTimeout(() => {
//         carousel("next", counter);
//       }, 10);
//     }
//   } else if (next == "previous") {
//     if (widthAdd < 100) {
//       widthAdd += 1;
//       widthRemove -= 1;
//       $(carouselImage[counter-1]).css("width", widthRemove + "%");
//       if (counter !== 0) {
//         $(carouselImage[counter - 2]).css("width", widthAdd + "%");
//       } else if (counter === 0) {
//         $(carouselImage[0]).css(
//           "width",
//           widthAdd + "%"
//         );
//       }
//       return setTimeout(() => {
//         carousel("previous", counter);
//       }, 10);
//     //   if (counter !== 0) {
//     //     $(carouselImage[counter + 1]).css("width", widthAdd + "%");
//     //   } else if (counter === carouselImage.length-1) {
//     //     $(carouselImage[0]).css(
//     //       "width",
//     //       widthRemove + "%"
//     //     );
//     //   }
//     //   $(carouselImage[counter]).css("width", widthRemove + "%");
//     //   return setTimeout(() => {
//     //     carousel("previous", counter);
//     //   }, 10);
//     }
//   }
//   console.log(counter);
//   widthAdd = 0;
//   widthRemove = 100;
//   if (next == "next") {
//     return (carouselCounter += 1);
//   }
//   if (next == "previous" && counter !== 0) {
//     return (carouselCounter -= 1);
//   } else return carouselCounter = carouselImage.length;
// }

// $(".next-image-carousel").click(() => {
//   let newCarouselCounter = carouselCounter % carouselImage.length;
//   carousel("next", newCarouselCounter);
// });

// $(".previous-image-carousel").click(() => {
//   let newCarouselCounter = carouselCounter % carouselImage.length;
//   carousel("previous", newCarouselCounter);
// });
