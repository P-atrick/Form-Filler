// Standard Google Universal Analytics code

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-115746595-2', 'auto');
ga('set', 'checkProtocolTask', function(){});
ga('require', 'displayfeatures');
ga('send', 'pageview', '/options.html');


// Saves options to chrome.storage
function save_options() {
  var emailToFillWith = document.getElementById('emailToFillWith').value;
  var addressLine1ToFillWith = document.getElementById('addressLine1ToFillWith').value;
  var addressLine2ToFillWith = document.getElementById('addressLine2ToFillWith').value;
  var cityToFillWith = document.getElementById('cityToFillWith').value;
  var postcodeToFillWith = document.getElementById('postcodeToFillWith').value;
  chrome.storage.local.set({
    email: emailToFillWith,
    addressLine1: addressLine1ToFillWith,
    addressLine2: addressLine2ToFillWith,
    city: cityToFillWith,
    postcode: postcodeToFillWith
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Saved';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Default values
  chrome.storage.local.get({
    email: 'Enter_Your_Email@default.com',
    addressLine1: 'Buckingham Palace',
    addressLine2: '',
    city: 'London',
    postcode: 'SW1A 1AA'
  }, function(items) {
    document.getElementById('emailToFillWith').value = items.email;
    document.getElementById('addressLine1ToFillWith').value = items.addressLine1;
    document.getElementById('addressLine2ToFillWith').value = items.addressLine2;
    document.getElementById('cityToFillWith').value = items.city;
    document.getElementById('postcodeToFillWith').value = items.postcode;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
save_options);
