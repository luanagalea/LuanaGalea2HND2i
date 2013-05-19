#pragma strict
var gameWonTitle:Texture2D;//variable to store game won image.
var newButtonGoToMainMenuTexture:Texture2D;//variable to store button image.


function Start () {
	var cubej = GameObject.FindGameObjectsWithTag("CubeImageGameWon");//cube to store gamewon background image.
		for(var i=0; i<cubej.Length; i++)
		{
		 cubej[i].renderer.sharedMaterial.SetTexture("_MainTex", gameWonTitle);
		}
}

function Update () {

}

function OnGUI()
{
	GUI.Label (Rect (475,400,500,50), "Game Won");//displays the game won image on screen.
	if (GUI.Button(Rect(255,550,newButtonGoToMainMenuTexture.width,newButtonGoToMainMenuTexture.height),newButtonGoToMainMenuTexture))//button's image.
	{
		Application.LoadLevel(0);//loads level 0.
	}
	
	
	

}
