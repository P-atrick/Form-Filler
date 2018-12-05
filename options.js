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
  chrome.storage.local.set({
    email: emailToFillWith
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    email: 'Enter_Your_Email@default.com'
  }, function(items) {
    document.getElementById('emailToFillWith').value = items.email;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
save_options);
