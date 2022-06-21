/*
switch (browser) {
    case 'Edge':
      ( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }
*/

let browserName = prompt('Какой браузер вы используете?');
if (browserName == 'Edge'){
  alert("You've got the the Edge!");
}
else if (browserName == "Chrome"
|| browserName == "Firefox"
|| browserName == "Safari"
|| browserName == "Opera"){
  alert("Okay we support these browsers too");
}
else {
  alert("We hope that this page looks ok!");
}
