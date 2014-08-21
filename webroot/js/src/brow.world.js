/**
* @author: Rafał Bernaczek ak. VRB
* @date: Date: 2.07.2014
*/

var BROW;
(function(BROW) {
	BROW.World = function(env) {
		var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, env.scene);
		var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", env.scene);
		skyboxMaterial.backFaceCulling = false;
		skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/images/skybox/skybox", env.scene);
		skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
		skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
		skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
		skybox.material = skyboxMaterial;

//		var ground = BABYLON.Mesh.CreateGround("extraGround", 1000, 1000, 1, env.scene, false);
//		var extraGroundMaterial = new BABYLON.StandardMaterial("extraGround", env.scene);
//		extraGroundMaterial.diffuseTexture = new BABYLON.Texture("/images/textures/Groundcover_Gravel_1inch.jpg", env.scene);
//		extraGroundMaterial.diffuseTexture.uScale = 100;
//		extraGroundMaterial.diffuseTexture.vScale = 100;
//		ground.position.y = -0.1;
//		ground.material = extraGroundMaterial;

		env.scene.clearColor = new BABYLON.Color3(1, 1, 1);
	};
})(BROW || (BROW = {}));