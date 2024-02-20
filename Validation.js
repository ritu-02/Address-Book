var ads = document.addressForm;
   
  
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
  }