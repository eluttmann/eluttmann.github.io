// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBPgVctMAotuxFYoIqJ_FRC2ecFwfBpPNQ",
  authDomain: "ombi3447.firebaseapp.com",
  databaseURL: "https://ombiapply.firebaseio.com/",
  projectId: "ombi3447",
  storageBucket: "ombi3447.appspot.com",
  messagingSenderId: "840190935067",
  appId: "1:840190935067:web:e6b9cb668612772fc7b8be"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Application');

// Listen for form 'contactForm' submissino via 'submit'
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  //var inperson = getInputVal('inperson');
  //var neighborhood = getInputVal('neighborhood');
  var restaurant = getInputVal('restaurant');
  //var visuals = getInputVal('visuals');
  var instagram = getInputVal('instagram');
  var contact = getInputVal('contact');
  var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

  console.log(name);

  // Save message
  saveMessage(name, restaurant, instagram, contact, date);

  // Show alert
  //document.querySelector('.confirmation-modal').style.display = 'block';
  document.getElementById('confirmation-modal').style.cssText = 'display:block !important;';


// Hide alert after 3 seconds
  setTimeout(function(){
    //document.querySelector('.confirmation-modal').style.display = 'none';
      location.assign("index.html");
  },6000);  

  // Clear form
  //document.getElementById('contactForm').reset();

}

// Function to get get form values - using id parameter
function getInputVal(id){
  // gets input vaulue from form
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, restaurant, instagram, contact, date){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    date: date,
    name: name,
    //inperson: inperson,
    //neighborhood: neighborhood,
    restaurant: restaurant,
    //visuals: visuals,
    instagram: instagram,
    contact: contact,
  });
}

function closeButtonClicked(){
  //location.reload();
  location.assign("index.html");

}