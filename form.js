

var arr = []

function validation(){
    event.preventDefault();

   // get id's
   var name1 = document.getElementById('name')
   var f_name = document.getElementById('father_name')
    var email1 = document.getElementById('email')
    var pass1 = document.getElementById('pass')
    var p_num = document.getElementById('number')
    var cnic = document.getElementById('cnic')
    var dob = document.getElementById('DOB')
    var gend_f = document.getElementById('femalegender')
    var gend_m = document.getElementById('maleGender')
    var course = document.getElementById('select-course')
    var city = document.getElementById('select-city')


    // save local storge
    // localStorage.setItem(" first_name",name1)
    // localStorage.setItem("last_name",f_name)
    // localStorage.setItem("email",email1)
    // localStorage.setItem("pssword",pass1)
    // localStorage.setItem("number",p_num)
    // localStorage.setItem("cnic",cnic)
    // localStorage.setItem("gender",gend)
    

    // apply regex(regular expression)
    var first_name1=/^[a-zA-Z ]+$/.test(name1.value)
    var last_name1= /^[a-zA-Z ]+$/.test(f_name.value);
    var emails=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email1.value)   
    var password1 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass1.value)   
    var numbers = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(p_num.value)
    var cnic1=/^[0-9]{5}-[0-9]{7}-[0-9]/.test(cnic.value)
    // var dates = /(0[13578]|1[02])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](18|19|20)[0-9]{2}/;
        // var genders = /^male$|^female$/.test(gend)

    if(first_name1){
       
    if(last_name1){
    
    if(emails){

    if(password1){

    if(cnic1){

    if(numbers){

    if(dob){

    if(gend_f.checked || gend_m.checked){

    if(course.value ){

    if(city.value){

    }else{alert("select city")}    
    }else{alert("select course")}
    }else{alert("gender is required")}
    }else{alert("date of birth is required")}
    }else{alert("number is required")}
    }else{alert("cnic number is required")}
    }else{alert("password is required")}
    }else{alert("email is required")}
    }else{alert("last namne is required")}
    }else{alert("first name is required")}

     
    prints= {
    name1:name1.value,
        f_name:f_name.value,
        email1:email1.value,
        p_num:p_num.value,
        cnic:cnic.value,
        course:course.value,
        city:city.value,
       };
       arr.push(prints)
    
    
       localStorage.setItem("fulldata",JSON.stringify(arr))
       
    }
    console.log(arr);































// ibad

// var dob = document.getElementById('DOB')
// var gend_f = document.getElementById('femalegender')
// var gend_m = document.getElementById('maleGender')
// var course = document.getElementById('select-course')
// var city = document.getElementById('select-city')
// var name1 = document.getElementById('name');
// var f_name = document.getElementById('father_name');
// var email1 = document.getElementById('email');
// var p_num = document.getElementById('number');
// var count = 0;
// var obj;

// function validation() {
//     event.preventDefault()

//     var item_check = localStorage.getItem("data");
//     if (item_check === null) {
//         obj = {};
//     }
//     else {
//         obj = JSON.parse(localStorage.getItem("data"));
//     }
//     obj[`id${count}`] = {
//         name: name1.value,
//         father_name: f_name.value,
//         email: email1.value,
//         phone_num: p_num.value,
//         cnic: cnic.value,
//         course: course.value,
//         city: city.value
//     }
//     localStorage.setItem("data", JSON.stringify(obj))
//     count++;
//     console.log(count);
// }


// 

































 


// function go_login_page(){
//     event.preventDefault();
  

//     var email_1 = document.getElementById('email_login').value
    
//     var pass_1 = document.getElementById('pass_login').value

//     var email_2 = localStorage.getItem('email')
//     var pass_2 = localStorage.getItem('password')


//     if(email_2===email_1  || pass_2===pass_1){

        
//    } 
//    }    
//         var fstname = document.getElementById('print-fst-name')
//         fstname.innerHTML = document.getElementById('name').innerHTML
// var lstname = document.getElementById('print-lst-name')
// var pntemail = document.getElementById('print-email')
// var pntnumber = document.getElementById('print-number')
// var pntcnic = document.getElementById('print-cnic')
       

// console.log(fstname);

    

    // }else{alert("invalid")}

    
   
    // fstname.innerHTML = document.getElementById('name').innerHTML

    
// }
    


    


































//  for (let i = 0; i<5; i++){
    //     // setTimeout(function(){
    //         console.log(i);
    //     // },1000)
    // }
    