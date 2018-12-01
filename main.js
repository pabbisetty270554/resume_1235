function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
getfile("main.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
    profile(data.profile);
    career(data.career);
   Education(data.Education);
   language(data.language);
   skills(data.skills);
}
)
var left=document.querySelector(".left");
function profile(pro){
	var img=document.createElement("img");
	img.src=pro.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=pro.name;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=pro.rollno;
	left.appendChild(h3);
	var h4=document.createElement("h4");
	h4.textContent=pro.Institution;
	left.appendChild(h4);
}
var right=document.querySelector(".right");
function career(c){
	var h1=document.createElement("h1")
	 h1.textContent="resume";
	 right.appendChild(h1);
	 var h2=document.createElement("h2");
	h2.textContent="career objective";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var p=document.createElement("p");
	p.textContent=c.info;
	right.appendChild(p);
}
function Education(e){
	var h2=document.createElement("h2");
	h2.textContent="Educationdetails";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var tb=document.createElement("table");
	tb.border="2";
	var tr1="<tr><td>degree</td><td>institution</td><td>yearofpassing</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].degree+"</td><td>"+e[i].institution+"</td><td>"+e[i].yearofpassing+"</td></tr>";
	}
	tb.innerHTML=tr1+tr2;
	right.appendChild(tb);
}
function language(l){
	var h2=document.createElement("h2");
	h2.textContent="languages";
	right.appendChild(h2);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<l.length;i++){
		var li=document.createElement("li");
	li.textContent=l[i].language;
	ul.appendChild(li);
}
}
function skills(s){
	var h2=document.createElement("h2");
	h2.textContent="skills";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<s.length;i++){
		var li=document.createElement("li");
	li.textContent=s[i].title+":"+s[i].content;
	ul.appendChild(li);
}
}
