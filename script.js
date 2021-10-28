//window.onload = monitor;
/*
function monitor(){
//byID
  let x = document.getElementsByClassName("mainwrapper");
  if(x)
  {
    document.getElementById("mainwrapper").addEventListener("click", function validateForm()
    {
      if(document.forms.namedItem("passWord") !=null)
      {
        let y = document.getElementById("passWord").innerText;
        if(y)
        {
          validateForm();
        }
      }
    }
    );
  }
}
*/
function validateForm() {
  var x = document.forms["myForm"]["passWord"].value;
  var y = document.forms["myForm"]["reEnter"].value;
  if (x.length >0 && x.length < 8) {
    alert("Password must be at least 8 characters.");
    document.forms["myForm"]["passWord"].value = '';
    document.forms["myForm"]["reEnter"].value = '';
    clearPass();
    return false;
  }
  if(x.toString() != y.toString()){
    alert("y: "+y.toString()+", x: "+x.toString());
    alert("Passwords must match exactly.");
    document.forms["myForm"]["passWord"].value = '';
    document.forms["myForm"]["reEnter"].value = '';
    clearPass();
    return false;
  }
}

function clearPass(){
  document.getElementsByClassName("passWords").reset();
}

function resetPage(){
  document.getElementById("myForm").reset();
}