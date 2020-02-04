// var car =document.getElementById('car')
 document.body.onkeydown = MoveCar;

function MoveCar(e)
{
    var ev = e;
    console.log(ev.keyCode)
	var x = kar.offsetLeft;
	var y = kar.offsetTop;
	if(e == undefined) {ev = window.event;}
	var step = 10, tmpX, tmpY;
	switch(ev.keyCode)
	{
		case 38: tmpY = y - step; break;
		case 40: tmpY = y + step; break;
		case 39: tmpX = x + step; break;
		case 37: tmpX = x - step; break;
    }
    kar.style.width=300+'px';
	kar.style.top = tmpY + 'px';
    kar.style.left = tmpX + 'px';
 
}

