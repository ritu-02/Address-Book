
  /* var ads = document.addressForm;
   
  
   var emailregexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var phoneregexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  
  if(ads.name.value==""){
	 alert("Please Enter Your Name");
	 ads.name.focus();
	 return false;
  }
  if(ads.email.value==""){
	 error = "Please Enter Your email";
	 ads.email.focus();
	 return false;
  }
  if(!emailregexp.test(ads.email.value)){
	 error = "Please Enter Your Valid Email Address";
	 ads.email.focus();
	 return false;
  }*/
  
  function displayDetails(){
	alert("hi");
	   var name = document.getElementById("name").value;
	   localstorage.setItem("username",name);
	   var get_name = localStorage.getItem('username');
	   
       var email = document.getElementById("email").value;
	   localstorage.setItem("useremail",email);
	   var get_email = localStorage.getItem('useremail');

	   var phone = document.getElementById("phone").value;
	   localstorage.setItem("userphone",phone);
	   var get_phone = localStorage.getItem('userphone');

	   var landline = document.getElementById("landline").value;
	   localstorage.setItem("userlandline",landline);
	   var get_landline = localStorage.getItem('userlandline');

	   var Website = document.getElementById("website").value;
	   localstorage.setItem("userwebsite",website);
	   var get_website = localStorage.getItem('userwebsite');

	   var address = document.getElementById("address").value;
	   localstorage.setItem("useraddress",address);
	   var get_address = localStorage.getItem('useraddress');
	   
	   var get_details = {
		                    "username":"get_name",
							"useremail":"get_email",
							"userphone":"get_phone",
							"userlandline":"get_landline",
							"userwebsite":"get_website",
							"useraddress":"get_address"
						   }

        var cons_details = get_details.constructor; 
		
	   var details = [];
	   var display = details.push(cons_details); 
	   document.getElementById("addressDetails").innerHTML = display;
	}
  


