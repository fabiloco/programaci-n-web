

function hola(){

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var i = 0;
  while(true){
    if(i==10000){
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10+(i*10), 10+(i*10), 50, 50);
      console.log("monda"+i)
      i=0;
    }
    i++;
  }
}
