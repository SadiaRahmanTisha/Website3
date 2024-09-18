function locomotive(){
	const scroll = new LocomotiveScroll({
		el: document.querySelector('.main'),
		smooth: true
	});
}

function vedioconAnimation(){
	var vedioCon = document.querySelector(".vedio-container")
	var platbtn = document.querySelector(".play-circle")

	vedioCon.addEventListener("mouseenter",function(){
		gsap.to(platbtn,{
			scale:1,
			opacity:1,
		})
	})

	vedioCon.addEventListener("mouseleave",function(){
		gsap.to(platbtn,{
			scale:0,
			opacity:0,
		})
	})
	vedioCon.addEventListener("mousemove",function(dets){
		gsap.to(platbtn,{
			left:dets.x-70,
			top:dets.y-50,
		})
	})
}

function loadingAnimation(){
	gsap.from(".page1 h1",{
		y:130,
		opacity:0,
		delay:0.5,
		duration:0.9,
		stagger:0.5,
	})
	gsap.from(".page1 .vedio-container",{
		scale:0.8,
		opacity:0,
		delay:1.5,
		duration:0.9,
	})
	gsap.from(".page1 nav",{
		x:-100,
		opacity:0,
		delay:2,
		duration:0.9,
	})
}

function cursorMove(){
	document.addEventListener("mousemove",function(dets){
		gsap.to(".cursor",{
			left:dets.x,
			top:dets.y,
		})
	})
}

document.querySelectorAll(".child").forEach(function(elem){
	elem.addEventListener("mouseenter",function(){
		gsap.to(".cursor",{
			transform: "transform: translate(-50%,-50%)scale(1)",
		})
	})
	
})



document.querySelectorAll(".child").forEach(function(elem){
	elem.addEventListener("mouseleave",function(){
		gsap.to(".cursor",{
			transform: "transform: translate(-50%,-50%)scale(0)",
		})
	})
})
locomotive()
vedioconAnimation()
loadingAnimation()
cursorMove()
