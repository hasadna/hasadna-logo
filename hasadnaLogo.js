$('.hasadnaLogo').each(function () {
  var ctx = this.getContext('2d');
  var r = this.width/3;
  var step = 0;
  var edge = Math.PI/10;  /* size of half a typical's line edge in radians */
  var base = edge*2;      /* size of half of the base in radians */
  var innerCircle = Math.ceil(r/3);  /* radius of the inner circle in pixels */

  ctx.lineWidth = Math.ceil(r/12);

 /* line and fill colors */
  ctx.strokeStyle = "#00adef";
  ctx.fillStyle = "#00adef";
  /* move our center to the circle's center */
  ctx.save();
  ctx.translate(r,r);
  /* by using rotate, we can keep working around angle 0 */
  ctx.rotate(Math.PI/2+step);
   /* draw the base */
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(r, 0);
  ctx.stroke();
  ctx.beginPath();
  with (Math) {
      ctx.moveTo(r*cos(base), r*sin(base));
      ctx.lineTo(r*cos(-base), r*sin(-base));
  }
  ctx.arc(0,0, r, -base, base, false);
  ctx.fill();
  ctx.rotate(Math.PI/3);
  /* drawing the branches */
  for (var i=0;i<7;i++) {
      ctx.beginPath();
      ctx.moveTo(r,0);
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.beginPath();
      with (Math) {
          ctx.moveTo(r*cos(edge), r*sin(edge));
          ctx.quadraticCurveTo(ceil(r*0.7), 0, r*cos(-edge), r*sin(-edge));
          ctx.arc(0,0, r, -edge, edge, false);
      }
      ctx.fill();
      ctx.rotate(Math.PI/4.5);
  }
  ctx.beginPath();
  ctx.arc(0,0, innerCircle, 0, Math.PI*2, false);
  ctx.fill();
    ctx.font = '30pt Alef Hebrew';
    ctx.textAlign = 'right';
    ctx.lineWidth = 4;
    drawTextAlongArc(ctx, 'הסדנא לידע ציבורי', 0, 0, r*1.5, edge*4);
    ctx.stroke();
  ctx.restore();
});
  // for drawing the name stolen from
  // http://www.html5canvastutorials.com/labs/html5-canvas-text-along-arc-path/
  function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
    var len = str.length, s;
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2);
    context.rotate(-1 * (angle / len) / 2);
    for(var n = len; n >= 0; n--) {
      context.rotate(angle / len);
      context.save();
      context.translate(0, -1 * radius);
      s = str[n];
      context.fillText(s, 0, 0);
      context.restore();
    }
    context.restore();
  };
