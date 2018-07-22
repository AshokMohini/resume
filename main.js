// function Loadjson(file,callback){
//   var x = new XMLHttpRequest();
//   x.overrideMimeType("application/json");
//   x.open("GET",file,true);
//   x.onreadystatechange=function(){
//     if(x.readyState === 4 && x.status == "200"){
//       callback(x.responseText);
//     }
//   };
//   x.send(null);
// }
//
// Loadjson("data.json",function(text){
//   var data = JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   career(data.career);
//   education(data.education);
//   keyskills(data.keyskills);
//   achievements(data.achievements)
// })

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error("error"));
      }
    })
  })
}
var file =loadjson("data.json");
file.then(data=>{
  console.log(data);
  basics(data.details);
  career(data.career);
  education(data.education);
  keyskills(data.keyskills);
 achievements(data.achievements)
})

var child1 = document.querySelector(".child1");

function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent=det.name;
  child1.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent=det.phoneno;
  child1.appendChild(phoneno);

  var email = document.createElement("a");
  email.href="mailto:chandukothpalli009.com ";
  email.textContent=det.email;
  child1.appendChild(email);

  var Address = document.createElement("h2");
  Address.textContent="Address:"
  child1.appendChild(Address);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var address = document.createElement("h2");
  address.textContent=det.address;
  child1.appendChild(address);
}
  var child2 = document.querySelector(".child2");

function career(career){
  var info = document.createElement("h2");
  info.textContent="Career Objective:"
  child2.appendChild(info);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var info = document.createElement("h2");
  info.textContent=career.info;
  child2.appendChild(info);

}
function education(edu){
  var details = document.createElement("h2");
  details.textContent="Eduactional Qualification:"
  child2.appendChild(details);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++){
  var deg = document.createElement("h4");
  deg.textContent = edu[i].degree;
  child2.appendChild(deg);

  var ul =document.createElement("ul");
  var li = document.createElement("li");
  li.textContent = edu[i].institute;
  ul.appendChild(li);
  child2.appendChild(ul);

  var li2=document.createElement("li");
  li2.textContent=edu[i].date;
  ul.appendChild(li2);
  child2.appendChild(ul);

}
}
function keyskills(ks){

  var details = document.createElement("h2");
  details.textContent="Technical Skills:";
  child2.appendChild(details);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  /*for(i=0;i<ks.length;i++){
    var title= document.createElement("h4");
    title.textContent=ks[i].title;
    child2.appendChild(title);

    var ul =document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = ks[i].info;
    ul.appendChild(li);
    child2.appendChild(ul);*/
    var skilldata=document.createElement("table");
    skilldata.border = "1";
    child2.appendChild(skilldata);

    tabledata="";
    for(i=0;i<ks.length;i++){
      tabledata+="<tr><td>"+ks[i].title+"</td><td>"+ks[i].info+"</td></tr>"
    }
    skilldata.innerHTML=tabledata;



}

function achievements(ach){

  var details = document.createElement("h2");
  details.textContent="Achievements:";
  child2.appendChild(details);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<ach.length;i++){
     var title= document.createElement("h4");
     title.textContent=ach[i].title;
     child2.appendChild(title);

     var ul =document.createElement("ul");
     var li = document.createElement("li");
     li.textContent = ach[i].info;
     ul.appendChild(li);
     child2.appendChild(ul);

}

}
