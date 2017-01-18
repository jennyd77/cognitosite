function checkFacebookLogin() {

  FB.getLoginStatus(function(console.log('hi')){
  console.log('here')
  })	

}


function runMyApp() {

	console.log('ready');
	checkFacebookLogin();
	console.log('done');

}


