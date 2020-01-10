 function quellueva() {
     var image = document.getElementById('background');
     image.onload = function () {
         var engine = new RainyDay({
             image: this,
             blur: 10,
             opacity: 1,
             gravityAngle: Math.PI / 2,
             gravityAngleVariance: 0
         });

         engine.gravity = engine.GRAVITY_NON_LINEAR;
         engine.trail = engine.TRAIL_SMUDGE; //engine.trail = engine.TRAIL_DROPS

         engine.rain([
                            [0, 3, 8],
                            [3, 8, 1]
                        ], 50);
     };
     image.crossOrigin = 'anonymous';
     image.src = 'images/bg1.jpg';

 }