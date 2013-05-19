#pragma strict

var gameOver:boolean=false;//variable to start game as NOT gameover.
var backgroundImage1:Texture2D;//variable to store the background image for level 1.
var backgroundImage2:Texture2D;
var backgroundImage3:Texture2D;

static var rows:int=2;//game starts with 2 rows of aliens.
static var cols:int=5;//game starts with 5 rows of aliens.

var levelsPlayed:int=0;//game starts from level 0.

function Awake()//first function to be called.
{
	if(GameObject.FindGameObjectsWithTag("gamecontroller").Length > 1)
	{
		Destroy(this);
	}
}

function Start () { //loads this function when game starts.
	
	DontDestroyOnLoad(this);//when loading a new scene, the game controller is not destroyed.
}

function Update () {
	var numberOfAliens:int;
	
	
	numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;//total number of enemies (aliens) in our scene.
	
	if (numberOfAliens <0)//if number of enemies (aliens ) is less or equal to 0 (means that you won the level).
	{
		levelsPlayed++;//increase level.
		rows--;//add a row of enemies/aliens.
		PlayerController.score = 0;//sets the score to 0 to start the new level from score 0.
		Application.LoadLevel(2);//loads level 2 of the game.
		print(levelsPlayed);//print level number.
	}
	
	if (levelsPlayed == 3)//If the player manages to play(and don't die) until level 3.
	{
		gameOver=true;//the game has 3 levels only, so the game is now over.
		
		rows =2;
		cols=5;
		PlayerController.shotsFired = 0;
		LaserController.shotsHit=0;
		levelsPlayed =0;
		
		Destroy(this);//game over(game ended, but user won).. loading a new level.
		
	    Application.LoadLevel(4);//loads game over you won screen.
	
	}
	
	if(PlayerController.playerDies == true)//if the player dies(spaceship is killed by aliens)
	{
	  PlayerController.playerDies =false;//setting the variable playerdies to false.
	 
        rows =2;//player died, so restoring the settings from the begining.
		cols=5;
		PlayerController.shotsFired = 0;
		LaserController.shotsHit=0;
		levelsPlayed =0;
	 
	  Destroy(this);
	  Application.LoadLevel(3);//loads game over screen.
	}
}

function OnGUI()//function for display style.
{
	GUI.color = Color.black;//font color black.
	
	GUI.Label(Rect(10,0,500,50),"Name: "+NameScript.myName);//name label area + name entered by user.
	var displayLevelsPlayed = levelsPlayed;
	displayLevelsPlayed = displayLevelsPlayed+1;
	GUI.Label(Rect(300,0,500,50),"Level: "+displayLevelsPlayed);
	GUI.Label(Rect(400,0,500,50),"Fired: "+PlayerController.shotsFired);
	GUI.Label(Rect(500,0,500,50),"Hit: "+LaserController.shotsHit);
	var shotsMissed:int = PlayerController.shotsFired-LaserController.shotsHit;
	GUI.Label(Rect(600,0,500,50),"Missed: "+shotsMissed);
	
	var cubej = GameObject.FindGameObjectsWithTag("cubebackground");//background cube to store level image
	if(levelsPlayed ==0)//if game in level one
	{
		for(var i=0; i<cubej.Length; i++)
		{
		  cubej[i].renderer.sharedMaterial.SetTexture("_MainTex", backgroundImage1);//displays level 1 image on cube.
		}
	} 
	
		if(levelsPlayed ==1)
	{
		for(var j=0; j<cubej.Length; j++)
		{
		  cubej[j].renderer.sharedMaterial.SetTexture("_MainTex", backgroundImage2);
		}
	}
	
		if(levelsPlayed ==2)
	{
		for(var k=0; k<cubej.Length; k++)
		{
		  cubej[k].renderer.sharedMaterial.SetTexture("_MainTex", backgroundImage3);
		}
	}
	

	if (gameOver)//if game is over(ended).
	{
		Destroy(GameObject.FindGameObjectWithTag("player"));//removes player.
		GUI.Label(Rect(300,300,300,300),"You Won");//displays you won message.
	}
}