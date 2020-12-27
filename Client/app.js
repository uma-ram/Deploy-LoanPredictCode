//gender
function getGenderValue() {
  var uigender = document.getElementsByName("gender");
  for (var i in uigender) {
    if (uigender[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}


//Marital Status
function getMaritalValue() {
  var uimarried = document.getElementsByName("marital");
  for (var i in uimarried) {
    if (uimarried[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

//education
function getEducationValue() {
  var uieducation = document.getElementsByName("education");
  for (var i in uieducation) {
    if (uieducation[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}




//selfemployed
function getSelfEmployedValue() {
  var uiselfemployed = document.getElementsByName("selfemployed");
  for (var i in uiselfemployed) {
    if (uiselfemployed[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

//Loan Term

function getLoanTermValue() {
  var uiloanterm = document.getElementById("loanterm");
  return uiloanterm.options[uiloanterm.selectedIndex].value
}

//Credit  History
function getCreditHistoryValue() {
  var uicredithistory = document.getElementsByName("credithistory");
  for (var i in uicredithistory) {
    if (uicredithistory[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

//propertyarea
function getPropertyAreaValue() {
  var uipropertyarea = document.getElementsByName("propertyarea");
  for (var i in uipropertyarea) {
    if (uipropertyarea[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

//dependents
function getDependentsValue() {
  var uidependents = document.getElementsByName("dependents");
  for (var i in uidependents) {
    if (uidependents[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function onClickedLoanApprovalStatus1()
{
  console.log("testing");
}
function onClickedLoanApprovalStatus() {
  console.log("Loan Approval Status button clicked");

  var gender = getGenderValue();
  var married = getMaritalValue();
  var education = getEducationValue();
  var selfemployed = getSelfEmployedValue();
  var applicantincome = document.getElementById("applicantincome").value;
  var coapplicantincome = document.getElementById("coapplicantincome").value;
  var loanamount = document.getElementById("loanamount").value;
  var loanamountterm = getLoanTermValue();
  var credithistory = getCreditHistoryValue();
  var propertyarea=getPropertyAreaValue();
  var dependents = getDependentsValue();
  var url =  "http://127.0.0.1:5000/predict_loan_status" ; // "/predict_loan_status"; 
  console.log("gender: " + gender);
  console.log("married: "+ married);
  console.log("education: "+education);
  console.log("selfemployed: "+ selfemployed);
  console.log("applicantincome:"+ applicantincome);
  console.log("coapplicantincome:" + coapplicantincome);
  console.log("loanamount:" + loanamount);
  console.log("loanamountterm:"+loanamountterm);
  console.log("credithistory: " + credithistory);
  console.log("propertyarea:" + propertyarea);
  console.log("dependents: " + dependents);
  console.log("before post:" + url);
  $.post(
    url,
    {
      gender: gender,
      married: married,
      education: education,
      selfemployed: selfemployed,
      applicantincome: parseFloat(applicantincome),
      coapplicantincome:parseFloat(coapplicantincome),
      loanamount: parseFloat(loanamount),
      loanamountterm:parseFloat(loanamountterm.value),
      credithistory:credithistory,
      propertyarea: propertyarea,
      dependents: dependents,      
    },    
    function (data, status) {
      console.log(data.loan_status);
      estLoanStatus.innerHTML =
        "<h2>"+ "Loan Status : " + data.loan_status + "</h2>";
      console.log(status);
    }
  );
}




/*

function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (var i in uiBathrooms) {
    if (uiBathrooms[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i in uiBHK) {
    if (uiBHK[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");
  var url = "/predict_home_price"; 

  $.post(
    url,
    {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value,
    },
    function (data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML =
        "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
    }
  );
}








function onPageLoad() {
  console.log("document loaded");
  var url = "/get_location_names"; 
  $.get(url, function (data, status) {
    console.log("got response for get_location_names request");
    if (data) {
      var locations = data.locations;
      var uiLocations = document.getElementById("uiLocations");
      $("#uiLocations").empty();
      for (var i in locations) {
        var opt = new Option(locations[i]);
        $("#uiLocations").append(opt);
      }
    }
  });
}
*/
function onPageLoad(){
  console.log("Page loaded successfully");
}
window.onload = onPageLoad;