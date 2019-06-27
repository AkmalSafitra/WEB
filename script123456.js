var sentenceRand; 
var word;

function CustomAlert(){
	this.render = function(result){
		document.getElementById('dialogoverlay').style.display = "block";;
		document.getElementById('dialogbox').style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Result";
		document.getElementById('dialogboxbody').innerHTML = result;
		document.getElementById("cek").disabled=true;
		
	}
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		document.getElementById("grn").innerHTML="";
		document.getElementById("rd").innerHTML="";
		document.getElementById("blk").innerHTML = "Get Ready";
		document.getElementById("beginner").checked = false;
		document.getElementById("memory").checked = false;
		document.getElementById("training").checked = false;
		document.getElementById("input").value = "";
		document.getElementById("myBtn2").style.display="none";
		document.body.style.backgroundColor = "#D3D3D3";
		document.getElementById("input").disabled=true;
		document.getElementById("start").disabled=true;
		sentence = [];
		
	}
}
var Alert = new CustomAlert();
		
function beginIt() {
	
	randNum = Math.floor((Math.random() * 10)) % sentence.length;
	sentenceRand = sentence[randNum];
	date = new Date();
	startType = date.getTime();
	
	document.getElementById("grn").innerHTML="";
	document.getElementById("rd").innerHTML="";

	if (sentence.length==5){
		document.getElementById("blk").innerHTML = sentenceRand.split(" ")[0];
		document.getElementById("input2").disabled= false;
		document.getElementById("input2").focus();
	}else{
		document.getElementById("blk").innerHTML = sentenceRand;
		document.getElementById("input").disabled= false;
		document.getElementById("input").focus();
	}

	document.getElementById("tx").innerHTML =sentenceRand;
	
	document.getElementById("cek").disabled = false;
	
	var s = sentenceRand;
	word = s.split(' ').length;
	
				
}


function done() {
	var user=getCookie("username");
	date2 = new Date();
	endType = date2.getTime();
	totalTime = ((endType - startType) / 1000);
	spd = Math.round((word/totalTime) * 60);
	
	if (document.frm.input.value == sentenceRand) {
		Alert.render("Congraetulations "+ user
		+"<br>You input a " + word + " word sentence in "
		+ totalTime 
		+ " seconds Correctly.<br>Your speed is about " + spd + " words per minute!"
		+"<br>Congrats! :)");									
	}
	else {
 
		var a=[];
		var b=[];
		var c=[];
		type2 = document.getElementById("input").value;
		ty = type2.length;
		sp = type2.split("");

		
		type = document.getElementById("tx").innerHTML;
		len = type.length;
		sp2 = type.split("");

		for(i=0;i<ty;i++){
			if (sp[i]==sp2[i]){
				a[i]=sp[i];
				c[i]="0";
			}
			else{
				b[i]=sp[i];
				c[i]="1";
			}
		}
 

		var d="";
		var d2="";
		var er=0;
		var ri=0;
		
		for(i=0;i<c.length;i++){
			if (c[i]==0){
				var d = d +"<span style='color:green'>"+ a[i]+"</span>";
				ri=ri+1;
			}
			else{
				var d = d +"<span style='color:red'>"+ b[i]+"</span>";
				
				er = er + 1;
			}
		}
		if (len>ty){
			document.getElementById("box").style.borderColor="white";
			d2 = "<span style='color:red'>"+type.substring(ty,len)+"</span>";
			er =er + type.substring(ty,len).length;
			Alert.render("auch you got " + er + " error"
			+"<br>You type : <br>"+ d 
			+ "<br>You also miss : " + d2 
			+"<br>The right sentence is : <br>"+ sentenceRand 
			);
		}else{
			document.getElementById("box").style.borderColor="white";
			Alert.render("auch you got " + er + " error"
			+"<br>You type : <br>"+ d 
			+"<br>The right sentence is : <br>"+ sentenceRand 
			);
		}
		
	}
	
}

	
function beginner() {
	sentence = new Array("The roots of education are bitter, but the fruit is sweet.",
						"It is never too late to be what you might have been.",
						"Make each day your masterpiece.",
						"Wherever you go, go with all your heart.",
						"Tough times never last, but tough people do.",
						"Believe and act as if it were impossible to fail.",
						"Turn your wounds into wisdom.",
						"Try to be a rainbow in someone's cloud.",
						"We are what we think. Think big.",
						"The journey of a thousand miles begins with one step.");
	
	document.getElementById("tips").style.display="block";
	document.getElementById('tips').innerHTML="QuickTips : Be aware of Capital letter and blank spaces. Focus and stay calm.";
	document.getElementById("start").disabled = false;
	document.getElementById('myBtn2').style.display = "block";
	document.body.style.backgroundColor = "#32CD32";
	document.getElementById("input").style.display="block";
	document.getElementById("cek").style.display="block";
	document.getElementById("memo").style.display="none";
}

function memory() {
	sentence = new Array("work hard stay humble",
						"always believe in yourself",
						"your potential is endless",
						"dreams do come true",
						"good things take time");
	document.getElementById("tips").style.display="block";
	document.getElementById('tips').innerHTML="QuickTips : memorize every word. type the previous word and add it with the word in the box";
	document.getElementById("start").disabled = false;
	document.getElementById('myBtn2').style.display = "block";
	document.body.style.backgroundColor = "#DC143C";
	document.getElementById("input").style.display="none";
	document.getElementById("cek").style.display="none";
	document.getElementById("memo").style.display="block";
}

function train(){
	sentence = new Array("You learn more from failure than from success. Do not let it stop you. Failure builds character. People who are crazy enough to think they can change the world, are the ones who do.",
						"Failure will never overtake me if my determination to succeed is strong enough. We may encounter many defeats but we must not be defeated.",
						"Knowing is not enough, we must apply. Wishing is not enough, we must do. We generate fears while we sit. We overcome them by action.",
						"The man who has confidence in himself gains the confidence of others. The only limit to our realization of tomorrow will be our doubts of today.");
	
	document.getElementById("tips").style.display="block";
	document.getElementById('tips').innerHTML="QuickTips : Practice makes perfect. try yourself here";
	document.getElementById("start").disabled = false;
	document.getElementById('myBtn2').style.display = "block";
	document.body.style.backgroundColor = "#4D8FAC";
	document.getElementById("input").style.display="block";
	document.getElementById("cek").style.display="block";
	document.getElementById("memo").style.display="none";

}

function not(){
	alert("Cant touch that! no cheating");
}


//-------------------AJAX-------------------------------------------------
function modal2() {
	document.getElementById('myModal').style.display = "block";
	loadTips();
}


function modal() {
	document.getElementById('myModal').style.display = "block";
	loadFact();
}


	function span() {
	document.getElementById('myModal').style.display = "none";
}

window.onclick = function(event) {
	if (event.target == document.getElementById('myModal')) {
		document.getElementById('myModal').style.display = "none";
		
	}
}

function loadTips() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("modcon").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "Tips.txt", true);
	xhttp.send();
		
}

function loadFact() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("modcon").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "Fact.txt", true);
	xhttp.send();
		
}
//------------------/AJAX------------------------------------------------

//------------------COOKIE-----------------------------------------------	
	
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	document.getElementById('myBtn2').style.display = "none";
	
	var user=getCookie("username");
	if (user != "") {
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:","");
		if (user != "" && user != null) {
			setCookie("username", user, 30);
			
		}
	}
	document.getElementById("player").innerHTML = "Hey "+user;
}
//--------------------------/COOKIE----------------------------------

function check() {
	if (sentence.length==4){
		
		type2 = document.getElementById("input").value;
		ty = type2.length;
		
		type = document.getElementById("tx").innerHTML;
		len = type.substring(0,ty);
		
		len3 = type.substring(ty,type.lenght);
		llen3 = type.substring(ty,type.lenght);
		
		if (type2==len){
			
			len = type.substring(0,ty);
			document.getElementById("box").style.borderColor="green";
			document.getElementById("box").style.borderWidth="5px";
			document.getElementById("grn").innerHTML=len;
			document.getElementById("grn").style.color="White";
			document.getElementById("rd").innerHTML="";
			document.getElementById("blk").innerHTML=len3;  
			co = ty;
			
		}
		else{
			if (document.getElementById("grn").innerHTML==""){
				co=0;
				var len2= type.substring(co,ty);
			}else{
				var len2= type.substring(co,ty);
			}
			var beep = new  Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
			beep.play();
			
			document.getElementById("box").style.borderColor="red";
			document.getElementById("box").style.borderWidth="10px";
			
			document.getElementById("rd").innerHTML=len2;
			document.getElementById("blk").innerHTML=llen3;
	
		}
		if (ty==0){			
			document.getElementById("box").style.borderColor="white";
			document.getElementById("box").style.borderWidth="5px";
		}
		
	}
}
var cou=0;
var sen="";
var sin="";
var cun="";

function memCheck(){
	 
	spl=sentenceRand.split(" ");
	sen=spl[cou];
	
	if (cun.length>0){
		if(document.getElementById("input2").value==cun){
			if (cou<spl.length-1){
				document.getElementById("blk").innerHTML=spl[cou+1];
				
				sin=spl[cou+1];
				cun=cun+" "+sin;
								
				cou+=1;
				document.getElementById("com").style.color="green";
				document.getElementById("com").innerHTML="true";
				
			}
			else{
				Alert.render("thats right ! <br><span style='color:green;'>"+document.getElementById("input2").value
					+"</span><br>This mode will improve your memory and typing skill"
					+"<br>Keep Spirit!");
				document.getElementById("memo").style.display="none";
				document.getElementById("blk").innerHTML = "Get Ready";
				document.getElementById("memory").checked = false;
				document.getElementById("com").innerHTML="";
				document.getElementById("input").value = "";
				document.getElementById("myBtn2").style.display="none";
				document.getElementById("tips").style.display="none";
				document.body.style.backgroundColor = "#D3D3D3";
				document.getElementById("input").style.display="block";
				document.getElementById("input").disabled=true;
				document.getElementById("start").disabled=true;
				sentence = [];
				
			}
			document.getElementById("input2").value="";
			
		}
		else{
			document.getElementById("com").style.color="red";
			document.getElementById("com").innerHTML="False. type the previous text";
			
			cou=cou-1;
			cun ="";
			
			for(i=0;i<=cou;i++){
				if (i==0){
					cun = spl[i];
				}
				else{
					cun = cun +" "+spl[i];
				} 
			}

			document.getElementById("blk").innerHTML=spl[cou];
			document.getElementById("input2").value="";
			
		}
	}
	else{
		if(document.getElementById("input2").value==sen){
			
			document.getElementById("blk").innerHTML=spl[cou+1];
			
			sin=spl[cou] +" "+ spl[cou+1];
				 
			cun=sin;
			cou+=1;
			
			document.getElementById("input2").value="";
			document.getElementById("com").style.color="green";
			document.getElementById("com").innerHTML="true";
		}
		else{
			document.getElementById("com").innerHTML="false";
			document.getElementById("com").style.color="red";
			document.getElementById("input2").value="";
			
		}
	
	}
	
}	
