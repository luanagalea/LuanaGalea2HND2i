#pragma strict
var laser:Rigidbody;
var health:int=100;
static var score:int=0;
var colours:Material[];
var laserSound:AudioClip;
static var playerDies = false;
var alienExplosion:AudioClip;
static var shotsFired:int =0;

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")//if the spaceship is hit by the aliens(enemy hits player)
	{
		health -= 2;//health of spaceship/player is decreased by 2.		
		
		if(health <=0)//if player's healthy is 0 or less.
		{		 
			playerDies =true;//player dies
		}
	}
}

function PlayAlienExplosion()//function to play alien explosion sound when alien is hit by spaceship.
{
		this.GetComponent(AudioSource).clip = alienExplosion;//loads the sound of the explosion when spaceshit hits player.
		this.GetComponent(AudioSource).Play();//plays the sound.
}

function OnTriggerExit()
{	
}

function OnGUI()
{
	GUI.color = Color.black;//font color black.
	GUI.Label(Rect(700,0,500,50),"Health: "+score);//to display health on top of screan.
	GUI.Label(Rect(800,0,500,50),"Score: "+health);
}


function Start () {
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space))//when space bar on keyboard is pressed (shot/laser is fired)
	{
		//set the source sound of the default audio source
		this.GetComponent(AudioSource).clip = laserSound;//loads the laser sound.
		this.GetComponent(AudioSource).Play();//laser sound is played.
		
		shotsFired++;//increase shots fired.
		Instantiate(laser,transform.position,transform.rotation);
	}
	
	var border:float=1.0;//calculating borders, so that player stays in screen.
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));//for spaceship to move horizontal only.
	
}