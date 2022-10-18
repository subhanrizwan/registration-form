// subhan code
var todolist = localStorage.getItem("fulldata")
if(todolist){
        let subhi = JSON.parse(todolist)
        console.log(subhi);
        // var obj_get = Object.values(subhi[0])
        //     console.log(obj_get);
        var tr = document.getElementById('con_cat')
        for( var i = 0; i < subhi.length; i++){
                console.log(subhi[i]);

                  var del =`
               
                  
                  `

                //   var del = `
                  
                //   <button onclick="dele('${subhi.length}')">Del</button>
                  
                //   `;

                var br =  `<br> 
                `;
                var subhan = 
                `
                <tr class="kch_bh">
                <td id="fName">${subhi[i].name1} 
                </td >
                <td id="lastName">${subhi[i].f_name} 
                </td>
                <td id="email">${subhi[i].email1} 
                </td>
                <td  id="phone">${subhi[i].p_num} 
                </td>
                <td id="cnic">${subhi[i].cnic} 
                </td>
                <td  id="course">${subhi[i].course} 
                </td>
                <td  id ="city">${subhi[i].city} 
                </td>
                <td >
                <button onclick="deletebtn('${i}',this)">Delete</button>
                </td>
                <td >
                <button id = "edit_btn" onclick="editbtn('${i}',this)">Edit</button>
                <button id = "save_btn" onclick="savebtn('${i}',this)">Save</button>

                </td>
                </tr> 
                `;
                tr.innerHTML +=subhan;     
        }
var deletebtn=(i,e)=>{
        // console.log("ssss")
//   event.target.parentNode.parentNode.remove();      
e.parentNode.parentNode.remove(); 
subhi.splice(i,1)
localStorage.setItem("fulldata",JSON.stringify(subhi))
 
}
 
function editbtn(i,e){    

let edit = document.getElementById("edit_btn")
edit.style.display = 'none'
let save = document.getElementById("save_btn") 
save.style.display ='block' 



// subhan
 let first_Name = document.getElementById('fName')
//  console.log(first_Name);
 let last_Name =  document.getElementById('lastName')
 let email2 = document.getElementById('email')
 let p_num2 = document.getElementById('phone')
 let cnic2 =  document.getElementById('cnic')
 let course2 =  document.getElementById('course')
//  let city2 = document.getElementById('city')

 first_Name.innerHTML=`<input id= "input1" type="text" value='${subhi[i].name1}'>`
 last_Name.innerHTML=`<input id= "input2" type="text" value='${subhi[i].f_name}'>`
 email2.innerHTML=`<input id= "input3" type="email" value='${subhi[i].email1}'>`
 p_num2.innerHTML=`<input id= "input4" type="number" value='${subhi[i].p_num}'>`
 cnic2.innerHTML=`<input id= "input5" type="cnic" value='${subhi[i].cnic}'>`
 course2.innerHTML=`<input id= "input6" type="course" value='${subhi[i].course}'>`


//  city2.innerHTML=`<input id= "input7" type="city" value='${subhi[i].city}'>`

//  ahmed / subhan
//  tr.innerHTML 
//  =
//  `<tr class="kch_bh">
//  <td> <input id= "input1" type="text" value='${subhi[i].name1}' ></td>
//  <td><input id= "input2" type="text" value='${subhi[i].f_name}' ></td>
//  <td><input id= "input3" type="email" value='${subhi[i].email1}' ></td>
//  <td><input id= "input4" type="number" value='${subhi[i].p_num}' ></td>
//  <td><input id= "input5" type="cnic" value='${subhi[i].cnic}' ></td>
//  <td><input id= "input6" type="select" value='${subhi[i].course}' ></td>
//  <td><input id= "input7" type="select" value='${subhi[i].city}' ></td>
//  <td >
//  <button onclick="deletebtn('${i}',this)">Delete</button>
//  </td>
//  <td>
//  <button id="sv_btn" onclick="savebtn('${i}',this)">Save</button>

//  </td>

//  </tr> `

	

}

function savebtn(i,e){
       
  let Name3 = document.getElementById('input1').value
//   console.log(Name3);
  let fName3 = document.getElementById('input2').value
  let email3 = document.getElementById('input3').value
  let phone3 = document.getElementById('input4').value
  let  cnic3 = document.getElementById('input5').value
  let course3 = document.getElementById('input6').value

//   let city3 = document.getElementById('input7').value

  document.getElementById('fName').innerHTML = Name3
  document.getElementById('lastName').innerHTML = fName3
  document.getElementById('email').innerHTML = email3
  document.getElementById('phone').innerHTML = phone3
  document.getElementById('cnic').innerHTML = cnic3
  document.getElementById('course').innerHTML = course3
  

//   document.getElementById('city').innerHTML = city3

  
// tr.innerHTML=

//   `<tr>
//   <td>${Name3}</td>
//   <td>${fName3}</td>
//   <td>${email3}</td>
//   <td>${phone3}</td>
//   <td>${cnic3}</td>
//   <td>${course3}</td>
//   <td >
//  <button onclick="deletebtn('${i}',this)">Delete</button>
//  </td>
//  <td>
//   <button id="edit_btn" onclick="editbtn('${i}',this)">Edit</button>
//   </td>
//   </tr>
//   `
let edit = document.getElementById("edit_btn")
  edit.style.display ='block'
  let save = document.getElementById("save_btn") 
  save.style.display ='none' 
//   subhi.splice()
//   localStorage.setItem("fulldata",JSON.stringify(subhi))
   
}

}

















// let dele=(i) => {
//         // console.log(i)
//         // console.log("han bhai chl rha he");
        
//         arr.splice(i,6)
//         console.log(arr);
        // localStorage.setItem("fulldata",JSON.stringify(arr))
//         event.target.parentNode.remove() 
// }
























// var info = localStorage.getItem("fulldata")
//     if(info){
//     var arr1 = JSON.parse(info)
// console.log(arr1);
//     var concat = document.getElementById('con_cat')

//     for(var i=0; i<arr1.length; i++){
//         console.log(arr1[i]);
// var ahmed =
//  `<tr class="tr">
//  <td>${arr1[i].name1}
// </td>
// <td>${arr1[i].f_name}
//  </td>
// <td>${arr1[i].email1}
//  </td>
// <td>${arr1[i].p_num}
//  </td>
//  <td>${arr1[i].cnic}
//  </td>
// <td>${arr1[i].course} 
// </td>
// <td>${arr1[i].city}
//  </td>
// <td> <button onclick="delet('${i}',this)">Delete</button>
//  </td>
//  </td>
// <td> <button onclick="edit('${i}',this)">Edit</button>
//  </td>
//  </td>
// <td> <button onclick="Save('${i}',this)">Save</button>
//  </td>

// </tr>`;
// concat.innerHTML+=ahmed


//     }
    
//     }

//     var delet = (i,thi) => {
//         thi.parentNode.parentNode.remove()
// // console.log(thi.parentNode.parentNode.remove()
// arr1.splice(i,1)
// localStorage.setItem("fulldata",JSON.stringify(arr1))
//     }

//     ////

//     var edit = (i,thi) => {
//         thi.parentNode.parentNode.remove()
// // console.log(thi.parentNode.parentNode.remove()
// var input = `
// <tr class="tr">

//  <td>
// <input type="text" id="name" placeholder="edit your name">
// </td>


//  <td>
// <input type="text" id="father-name" placeholder="edit your father name">
// </td>


//  <td>
//  <input type="email" id="email" placeholder="edit your email">
// </td>


//  <td>
//  <input type="email" id="cnic" placeholder="edit your cnic number">
// </td>

//  <td>
//  <input type="number" id="phone-number" placeholder="edit your phone number">
// </td>


//  <td>
//  <select name="country" id="country">
//   <option>select</option>
//  <option  >Karachi</option>
//  <option >Lahore</option>
//  <option>Other</option>
// </select>
// </td>
 



// </tr>

// `
// // let tr = document.querySelector("tr")
// // tr.style.overflowX="hiddin"
// var name = document.querySelector('#con_cat').innerHTML += input

//  var name = document.getElementById("name").innerHTML = `${input}`
//     var fatherName = document.getElementById("father-name")
//     var email = document.getElementById("email")
//     var cnic = document.getElementById("cnic")
//     var phone_number = document.getElementById("phone-number")
//     var country = document.getElementById("country")

    




//     }












