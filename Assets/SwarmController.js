#pragma strict
var leftborder:float=-12.0;//set the left border to -12.
var rightborder:float=6;//set the right border to 6.
var touchedrightwall:boolean=false;//if aliens touched the right border.
var touchedleftwall:boolean=false;//if aliens touched the left border.

var alien:Rigidbody;//set of aliens being created.


function moveDown()//moving down function(for when aliens moves down to the player)
{
	transform.position.y--;//swarm moves one step down.
}


function createAliens(rows:int,cols:int)//function to create aliens.
{
	for(var row=0;row<rows;row++)//creates a row of aliens.
	{
		for(var counter=0;counter<cols;counter++)//creates a column of aliens.
		{
			var tempAlien:Rigidbody;// creating a variable for a temporary alien.
			tempAlien = Instantiate(alien,Vector3(counter*2,transform.position.y-row,1),Quaternion.identity);//creates a new instance of aliens.
			tempAlien.transform.parent = this.transform;//transforms the temporary alien with the swarm (the parent). 
														//Arranged position of each alien in the swarm.
		}
	}
	
}

function Start () {
	createAliens(GameController.rows,GameController.cols);//creates a row of aliens.
	
	for(var counter=0;counter<5;counter++)//if counter is less then 5, repeat loop untip the loop is repeated five times.
	{
		yield WaitForSeconds(5);//wait for five seconds before moving down aliens by one step.	
		moveDown();//row of aliens will move a step down after five seconds.
	}
}

function Update () {
	
	if (transform.position.x > rightborder)//setting screen borders so that swarm will stay in screen.
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		touchedleftwall = false;//if swarm hits the left wall border, moves it to the right so it won't go out of the screen.
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
}