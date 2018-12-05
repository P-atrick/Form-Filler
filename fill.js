function fill() {
  // Fill empty visible text inputs with 'id filler'
  $("input[type=text]:visible").each(function() {
    if (!$(this).attr("value")) $(this).val(`${this.id} filler`);
  })

  // Dropdowns
  $('select').prop('selectedIndex', 2);
  // Click checkboxes and the 'no' for yes no Qs
  $("label.instanda-question-yes-no-parent-no > input, label.instanda-question-yes-no-no > input, input[type=checkbox]").click();

  // Contact details
  $("select[id*='country' i]").val('GB');
  $("input[id*='phone' i]").val('07700900000');

  // Number inputs
  $(".instanda-number-input input[data-val-minimum-value]:visible").each(function() {
    // If it has a minimum value, fill with that minimum value
    if($(this)[0].attributes["data-val-minimum-value"].value) {
      $(this).val(parseInt($(this)[0].attributes["data-val-minimum-value"].value));
    } else {
      $(this).val('2');
    }
  })

  // Start Date
  const now = new Date();
  const startDay = ("0" + now.getDate()).slice(-2);
  const startMonth = ("0" + (now.getMonth() + 1)).slice(-2);
  const startDate = (startDay)+"/"+(startMonth)+"/"+now.getFullYear();
  $("input[id*='startdate' i]").val(startDate);

  // End Date
  if ($('input[id*="enddate" i]')) {
    const end  = new Date();
    end.setDate(end.getDate() + 2);
    const endDay = (end.getDate());
    const endMonth = ("0" + (end.getMonth() + 1)).slice(-2);
    const endDate = endDay + '/' + endMonth + '/' + end.getFullYear();
    $('input[id*="enddate" i]').val(endDate);
  }

  // Scroll to bottom of the window
  window.scrollTo(0,document.body.scrollHeight);
}

function fillInEmail() {

  chrome.storage.local.get({
    email: 'Enter_Your_Email@default.com',
    addressLine1: 'Buckingham Palace',
    addressLine2: '',
    city: 'London',
    postcode: 'SW1A 1AA'
  }, function(result) {
    console.log(result);
    $("input[type=email").val(result.email);
    $("input[id*='addressline1' i]").val(result.addressLine1);
    $("input[id*='addressline2' i]").val(result.addressLine2);
    $("input[id*='City']").val(result.city);
    $("input[id*='postcode' i]").val(result.postcode);

  })

}

$(document).ready(function(){
  fill();
  fillInEmail();
});
