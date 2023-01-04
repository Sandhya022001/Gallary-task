 
 
 var cl=console.log;
 var x=12;
 cl(x);
 
 const  selectImg = document.getElementById("selectImg");
 
 const all =  Array.from(document.querySelectorAll(".all"));
	 
	 const onChangeimgHandler = (eve) => {
		 let getimg = eve.target.value;
		 cl(getimg);
		 all.forEach(div => div.classList.add('d-none'));
		 
		 let getimage = Array.from(document.querySelectorAll("."+getimg));
		 getimage.forEach(div => div.classList.remove('d-none'));
	 }
	 
	
	 
	 
	 
	 selectImg.addEventListener('change',onChangeimgHandler);