#pragma strict
var newButtonTexture:Texture2D;//variable to store new button image.
var newCubeImage:Texture2D;

function Start () {

		var cubej = GameObject.FindGameObjectsWithTag("CubeImage");//cube to store background image.
		for(var i=0; i<cubej.Length; i++)
		{
		 cubej[i].renderer.sharedMaterial.SetTexture("_MainTex", newCubeImage);
		}

}

function Update () {

}
static var myName : String = "";//static variable(shared variable with other java script files) to store name, and set to empty.

function OnGUI()
{
	GUI.Label (Rect (250,350,500,50), "Enter Name");
    myName = GUI.TextField (Rect (300,400,500,50), myName, 25);
    

	if (GUI.Button(Rect(290,500,newButtonTexture.width,newButtonTexture.height),newButtonTexture))//button's image in button.
	{
		Application.LoadLevel(2);//loads level 2 when button is pressed.
	}
	
	

}
