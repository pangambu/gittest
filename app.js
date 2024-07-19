var path = document.getElementById("path");
var pathDimensions = path.getTotalLength();



segment.draw("0%", "0%", 0.1);
segment2.draw("0%", "0%", 0.1);

var counter = { var: 0 };
var tal = document.getElementById("speed-number");


var angle = 270;

var duga = 3.14*160*angle/180;

var segm = pathDimensions/10;

TweenLite.to(".line", 0.1, {rotationZ: "-45", ease:Linear.easeNone});

$('#butanim').hover(
  function(){
  TweenLite.to(".line", 1, {rotationZ: angle - 45, ease:Linear.easeNone});
    segment.draw("0%", duga, 1);
    segment2.draw("0%", duga, 1);
    TweenMax.to(counter, 1, {
      var: 30, 
      onUpdate: function () {
          tal.innerHTML = Math.ceil(counter.var);
      },
      ease:Linear.easeNone
  });
  },
   function(){
   TweenLite.to(".line", 1, {rotationZ: "-45", ease:Linear.easeNone});
     segment.draw("0%", "0%", 1);
     segment2.draw("0%", "0%", 1);
     TweenMax.to(counter, 1, {
      var: 0, 
      onUpdate: function () {
          tal.innerHTML = Math.ceil(counter.var);
      },
      ease:Linear.easeNone
  });
   }
  
);