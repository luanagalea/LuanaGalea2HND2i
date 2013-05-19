#pragma strict
var invaderTitle:Texture2D;//variable to stores logo.
var newButtonTexture:Texture2D;//variable to stores button's image.
var newButtonExitTexture:Texture2D;

function Start () {

	var cubej = GameObject.FindGameObjectsWithTag("CubeMenuBackground");//cube to stores logo background image.
		for(var i=0; i<cubej.Length; i++)
		{
		 cubej[i].renderer.sharedMaterial.SetTexture("_MainTex", invaderTitle);
		}

}

function Update () {

}

function OnGUI()
{
	if (GUI.Button(Rect(250,350,newButtonTexture.width,newButtonTexture.height),newButtonTexture))//button's image
	{
		Application.LoadLevel(1);//loads level 1, when start button is pressed.
	}
	
	if (GUI.Button(Rect(250,550,newButtonExitTexture.width,newButtonExitTexture.height),newButtonExitTexture))
	{
		Application.Quit();//exit game when exit button is pressed
	}
}
