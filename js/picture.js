// submitButton
let submitButton = document.querySelector("#submit");
//pictureclass
let pictureClass = document.querySelector(".picture");
//colorsButton
let randomColorsButton = document.querySelector("#colorsId");
//random rotateButton
let rotationButton = document.querySelector("#rotationId");
//colorstab
let colorstabClass = document.querySelector(".colorstab");
// downloadimage
let downloadImageButton = document.querySelector("#downloadimage");
// colors aray json
let jsonData = [{
        "color": "AliceBlue",
        "code": "#F0F8FF"
    },
    {
        "color": "AntiqueWhite",
        "code": "#FAEBD7"
    },
    {
        "color": "Aqua",
        "code": "#00FFFF"
    },
    {
        "color": "Aquamarine",
        "code": "#7FFD4"
    },
    {
        "color": "Azure",
        "code": "#F0FFFF"
    },
    {
        "color": "Beige",
        "code": "#F5F5DC"
    },
    {
        "color": "Bisque",
        "code": "#FFE4C4"
    },
    {
        "color": "Black",
        "code": "#F5F5DC"
    },
    {
        "color": "BlanchedAlmond",
        "code": "#FFEBCD"
    },
    {
        "color": "Blue",
        "code": "#0000FF"
    },
    {
        "color": "Blueviolet",
        "code": "#8A2BE2"
    },
    {
        "color": "Brown",
        "code": "#A52A2A"
    },
    {
        "color": "BurlyWood",
        "code": "#DEB887"
    },
    {
        "color": "CadetBlue",
        "code": "#5F9EA0"
    },
    {
        "color": "Chartreuse",
        "code": "#7FFF00"
    },
    {
        "color": "Chocolate",
        "code": "#D2691E"
    },
    {
        "color": "Coral",
        "code": "#FF7F50"
    },
    {
        "color": "CornFlowerBlue",
        "code": "#6495ED"
    },
    {
        "color": "Cornsilk",
        "code": "#FFF8DC"
    },
    {
        "color": "Crimson",
        "code": "#DC143C"
    },
    {
        "color": "Cyan",
        "code": "#00FFFF"
    },
    {
        "color": "DarkBlue",
        "code": "#00008B"
    },
    {
        "color": "DarkCyan",
        "code": "#008B8B"
    },
    {
        "color": "DarkGoldenRod",
        "code": "#B8860B"
    },
    {
        "color": "DarkGray",
        "code": "#A9A9A9"
    },
    {
        "color": "DarkGrey",
        "code": "#A9A9A9"
    },
    {
        "color": "DarkGreen",
        "code": "#006400"
    },
    {
        "color": "DarkKhaki",
        "code": "#BDB76B"
    },
    {
        "color": "DarkMagenta",
        "code": "#8B008B"
    },
    {
        "color": "DarkOliveGreen",
        "code": "#556B2F"
    },
    {
        "color": "DarkOrange",
        "code": "FF8C00"
    },
    {
        "color": "DarkOrchid",
        "code": "B8B76B"
    },
    {
        "color": "DarkRed",
        "code": "8B0000"
    },
    {
        "color": "DarkSalmon",
        "code": "E9967A"
    },
    {
        "color": "DarkSeaGreen",
        "code": "8FBC8F"
    },
    {
        "color": "DarkSlateBlue",
        "code": "483D8B"
    },
    {
        "color": "DarkSlateGray",
        "code": "2F4F4F"
    },
    {
        "color": "DarkSlateGrey",
        "code": "2F4F4F"
    },
    {
        "color": "DarkTurquoise",
        "code": "00CED1"
    },
    {
        "color": "DarkViolet",
        "code": "9400D3"
    }
]

/////////////////////////////////////////////////////////////////////
//appendchildren
jsonData.forEach((value) => {
    let divRectangle = document.createElement("div");
    let pRectangleData = document.createElement("p");
    pRectangleData.textContent = value.color;
    divRectangle.appendChild(pRectangleData);
    colorstabClass.appendChild(divRectangle);
    divRectangle.style.backgroundColor = value.color;
});


///addEventListeners
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    pictureClass.innerHTML = "";
    let inputValue = document.querySelector("#keyword").value;
    let inputValueArray = inputValue.split(" ");
    inputValueArray.forEach(appendToPictureClass);
});
rotationButton.addEventListener("click", () => {
    let spanvar = document.querySelectorAll(".picture span");
    spanvar.forEach(function(item, index, arr) {
        let randomnumber = Math.floor(Math.random() * -15) + 15;
        item.style.transform = "rotate(" + randomnumber + "deg)";
    });
});

colorstabClass.addEventListener("click", (event) => {
    // dropdown for using active selector
    let e = document.querySelector("#dropdown");
    var result = e.options[e.selectedIndex].value;
    let colorName = event.target.textContent;
    //frame color
    if (result == "frame") {
        pictureClass.style.borderColor = colorName;
        pictureClass.style.outlineColor = colorName;
    } else if (result == "background") {
        pictureClass.style.backgroundColor = colorName;
    } else if (result == "font") {
        pictureClass.style.color = colorName;
    } else if (result == "tile") {
        //pictureclass span
        let pictureSpanClass = document.querySelectorAll(".picture span");
        pictureSpanClass.forEach((value) => {
            value.style.backgroundColor = colorName;
        })
    } else {

    }
});
randomColorsButton.addEventListener("click", () => {
    //frame color
    pictureClass.style.borderColor = jsonData[Math.floor(Math.random() * jsonData.length)].color;
    pictureClass.style.outlineColor = jsonData[Math.floor(Math.random() * jsonData.length)].color;
    pictureClass.style.backgroundColor = jsonData[Math.floor(Math.random() * jsonData.length)].color;
    pictureClass.style.color = jsonData[Math.floor(Math.random() * jsonData.length)].color;
    //pictureclass span
    let pictureSpanClass = document.querySelectorAll(".picture span");
    let randomColorforSpan = jsonData[Math.floor(Math.random() * jsonData.length)].color;
    pictureSpanClass.forEach((value) => {
        value.style.backgroundColor = randomColorforSpan;
    })
});

// FUNCTIONS
function appendToPictureClass(value) {
    let p = document.createElement("p");
    for (let i = 0; i < value.length; i++) {
        let span = document.createElement("span");
        span.textContent = value[i];
        p.appendChild(span);
    }
    pictureClass.appendChild(p);
}
downloadImageButton.addEventListener("click", () => {
    domtoimage.toJpeg(pictureClass, {
            quality: 0.95
        })
        .then(function(dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });
});














// function createButtonForFrames() {
//     let buttonarray = ['Frame', 'Background', 'Font', 'Tiles'];
//     buttonarray.forEach((element) => {
//         let buttonvar = document.createElement("button");
//         buttonvar.innerHTML = element;
//         framesButtonsClass.appendChild(buttonvar);
//     });
// }

// //downloads image
// function PrintDiv(div) {
//     html2canvas((div), {
//         onrendered: function(canvas) {
//             var myImage = canvas.toDataURL();
//             downloadURI(myImage, "MaSimulation.png");
//         }
//     });
// }

// function downloadURI(uri, name) {
//     var link = document.createElement("a");

//     link.download = name;
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     //after creating link you should delete dynamic link
//     //clearDynamicLink(link); 
//