
    var todolist = localStorage.getItem("fulldata")
    if(todolist){
        var printe = JSON.parse(todolist)
        
            var obj_get = Object.values(printe)
            // console.log(obj_get[0]);
        
        var first_name1 = document.getElementById('print-fst-name')
        first_name1.innerHTML = obj_get[0]
        first_name1.style.textAlign='center'
        // last_name1.style.='center'
    
        var last_name1 = document.getElementById('print-lst-name')
        last_name1.innerHTML = obj_get[1]
        last_name1.style.textAlign='center'
        
        var email_1 = document.getElementById('print-email')
        email_1.innerHTML = obj_get[2]
        email_1.style.textAlign='center'
        var number = document.getElementById('print-number')
        number.innerHTML = obj_get[3]
        number.style.textAlign='center'
        var cnic1 = document.getElementById('print-cnic')
        cnic1.innerHTML = obj_get[4]
        cnic1.style.textAlign='center'
    }

   
