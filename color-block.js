
var blockSide;
var horizontalBlock, verticalBlock;

var SHORTHANDBLOCK = 4;

var colors = {
  0: "#1abc9c", //TURQUOISE
  1: "#2ecc71",  //EMERALD
  2: "#3498db",  //PETERRIVER
  3: "#e67e22",  //CARROT
  4: "#e74c3c"  //ALIZARIN
};

function size_dict(d){c=0; for (i in d) ++c; return c}

if($(window).innerWidth() < $(window).innerHeight()){
  blockSide = $(window).innerWidth()/SHORTHANDBLOCK;
  horizontalBlock = SHORTHANDBLOCK;
  verticalBlock = (parseInt($(window).innerHeight()/blockSide) + 1);
}else{
  blockSide = $(window).innerHeight()/SHORTHANDBLOCK;
  horizontalBlock = (parseInt($(window).innerWidth()/blockSide) + 1);
  verticalBlock = SHORTHANDBLOCK;
}


var totalBlock = horizontalBlock*verticalBlock;


for(var i = 0; i < totalBlock; i++){
  $("#color-block").append("<div id='block-"+ i +"' class='blocks'></div>");
}


var b_left = 0, b_top = 0;
$('.blocks').each(function() {

    //position
    $(this).css("width", blockSide+"px");
    $(this).css("height", blockSide+"px");
    $(this).css("left", (b_left * blockSide)+"px");
    $(this).css("top", (b_top * blockSide)+"px");

    if(b_left >= horizontalBlock-1){
        b_top++;
        b_left=0;
    }else{
      b_left++;
    }

    //color
    var blockColorIndex = Math.floor(Math.random() * size_dict(colors));
    $(this).css("background-color", colors[blockColorIndex]);
});




var rotated = [];
for(var i = 0; i < totalBlock; i++){
  rotated.push("0");
}


function flipABlock(){
    var blockIndex = Math.floor(Math.random() * (totalBlock-1));
    var blockColorIndex = Math.floor(Math.random() * size_dict(colors));
    if(rotated[blockIndex] == 0){
      $("#block-"+blockIndex).transition({rotateY: 180});
      rotated[blockIndex] = 1;
    }else{
      $("#block-"+blockIndex).transition({rotateY: 0});
      rotated[blockIndex] = 0;
    }
    $("#block-"+blockIndex).css("background-color", colors[blockColorIndex]);
}

flipABlock();
setInterval("flipABlock()", 3000);
setInterval("flipABlock()", 7000);

/*
var w = new Worker("blockWorker.js");
w.onmessage = function(event){
  alert(event.data);
};

w.postMessage("Establish debug connection...");

*/
