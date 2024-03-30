function validateForm(){
   


    var quan=document.getElementById("P_quantity").value;
   var Catogory=document.getElementById("Category").value;
    var price=document.getElementById("p_price").value;
    var discount=document.getElementById("discount").value;
    var dec=document.getElementById("p_des").value
    var errorElement=document.getElementById("error-message");
    var errorElement1=document.getElementById("error-message1");
    var errorElement2=document.getElementById("error-message2");
    var errorElement3=document.getElementById("error-message3");
   
if(quan<1){
    errorElement.innerHTML="Enter valid quantity";
    return false;
}
else if(price<1){
    errorElement1.innerHTML="Enter valid price";
    return false;
}
else if(discount<0){
    errorElement2.innerHTML="Enter valid discount";
    return false;
}
else if(dec.length<10){
    errorElement3.innerHTML="Enter more than 10 characters";
    return false;
}
else if(dec.length>500){
    errorElement3.innerHTML="Enter less than 500 characters";
    return false;
}

else{
errorElement.innerHTML=""
return true;
}

} 



   