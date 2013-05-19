#pragma strict
var gameOverTitle:Texture2D;//variable to store the game over image.
var newButtonGoToMainMenuTexture:Texture2D;//variable to store the button's image.


function Start () {
	var cubej = GameObject.FindGameObjectsWithTag("CubeImageGameLost");//cube which displays the game over image.
		for(var i=0; i<cubej.Length; i++)
		{
		 cubej[i].renderer.sharedMaterial.SetTexture("_MainTex", gameOverTitle);
		}
}

function Update () {

}

function OnGUI()
{
	GUI.Label (Rect (475,400,500,50), "Game Won");
	if (GUI.Button(Rect(255,550,newButtonGoToMainMenuTexture.width,newButtonGoToMainMenuTexture.height),newButtonGoToMainMenuTexture))//button's image
	{
		Application.LoadLevel(0);//loading level 1.
	}
	
	
	

}
