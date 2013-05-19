#pragma strict

//a variable called alienlaser of type rigidbody. 
var alienlaser:Rigidbody;


function Start () {//function is loaded when the game starts.

	//variable called shootdelay of type float, and assigned to 0.
	//To store random number from 1 to 3, to determine the shoot delay of the alien laser.
	var shootdelay:float=0;

	shootdelay = Random.Range(1.0,3.0); //calling the shootlaser function, and setting a random number betweek 1 and 3 as it's parameters.
	InvokeRepeating("shootlaser",shootdelay,shootdelay);

}


function shootlaser()//the function which is called when the alien shoots it's laser to hit the player.
{
	Instantiate(alienlaser,transform.position,transform.rotation);
}


function Update () {

}