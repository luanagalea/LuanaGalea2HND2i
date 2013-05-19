#pragma strict
static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () {

	
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;//calculation the left most position of the screen.
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;//calculation the right most position of the screen.
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;//calculation the bottom most position of the screen.
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;//calculation the top most position of the screen.
}

static function EnableBorders(object:Transform)//function called EnableBorders, 
//which has a Transform object as a parameter, to store the position of x and y in it..
{
	if(object.position.x < leftmost)
	{
		object.position.x = rightmost;//When it hits the left border, position is set to right most so spaceship won't leave the screen.
	}
	
	if(object.position.x > rightmost)
	{
		object.position.x = leftmost;
		
	}
	
	if (object.position.y > topmost)
	{
		object.position.y = bottommost;
	}
	
	if(object.position.y < bottommost)
	{
		object.position.y = topmost;
	}

}