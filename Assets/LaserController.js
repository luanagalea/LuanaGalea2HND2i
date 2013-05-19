#pragma strict

var shootingup:boolean;
static var shotsHit:int =0;

function Start () {

}

function Update () {
	if(shootingup)
	{
		transform.Translate(Vector3.up * 10 * Time.deltaTime);//to shoot upwards - player laser (spaceship).
	}
	else
	{
		transform.Translate(Vector3.up * -10 * Time.deltaTime);//to shoot downwards - enemy laser (aliens).
	}
}


function OnTriggerEnter(other:Collider)
{
	if(shootingup == true)//if spaceships(player) laser hits something.
	{
		if (other.gameObject.tag == "enemy")//if player hit an enemy (alien)/
		{
			PlayerController.score++;//adds score.			
			var PlayerControllerScript:PlayerController;			
			PlayerControllerScript = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerController);			
			PlayerControllerScript.PlayAlienExplosion();//if alien is hit, play explosion sound set with alien's explosion.
			shotsHit++;//shots hit increment by 1.

			Destroy(other.gameObject);//destroys the alien which was hit.
			Destroy(this.gameObject);//destroys the laser which hit the alien.
		}
	}

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}