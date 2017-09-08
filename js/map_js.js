$(document).ready(function() {


window.scroll(280, 0); 




	var canvas = document.getElementById("myCanvas");

	function fitCont(canvas) {

		canvas.style.width = '100%';
		canvas.style.height = '100%';

		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	}

	fitCont(canvas);

	var ctx = canvas.getContext("2d");





	var mouseX;
	var mouseY;
	var last_mouseX;
	var last_mouseY;

	var Hi = 0;
	var Gi = 0;
	var Ai = 0;
    
    var Ani_count = 0;



	var map_cont = document.getElementById('map_cont');

	var group_btn = document.getElementById('group_btn');
	var json_btn = document.getElementById('JSON_btn');
	var mygroup;



	var Hcord_array_current = [];
	var Hcord_array_last = [];
	var Hmaster_array = [];
	var Mycount = 0;

	function Hobbits() {


		var Hstart = ({
			x: 0,
			y: 0
		});

		Hcord_array_last.push(Hstart);

		map_cont.addEventListener('click', function(e) {

			//REMEMBER THAT LAST ARRAY IS 1 OBJECT AHEAD
			if (Hi <= 7) {
				var offset = $(this).offset();

				mouseX = (e.pageX - offset.left);
				mouseY = (e.pageY - offset.top);



				Hcord_array_current.push({
					x: mouseX,
					y: mouseY
				});

				//        console.log("CURRENT v");
				//        console.log(Hcord_array_current[Hi]);
				//        console.log("LAST v");
				//        console.log(Hcord_array_last[Hi]);



				ctx.beginPath();
				ctx.moveTo(Hcord_array_last[Hi].x, Hcord_array_last[Hi].y);
				ctx.lineTo(Hcord_array_current[Hi].x, Hcord_array_current[Hi].y);
				ctx.strokeStyle = 'red';
				ctx.stroke();




				last_mouseX = mouseX;
				last_mouseY = mouseY;
				Hcord_array_last.push({
					x: last_mouseX,
					y: last_mouseY
				});


			}
			if (Hi == 7) {


				//console.log("GEN IS BEING CALLED");
				gen_path(mygroup);



			}
			Hi++;
			//Mycount++;



		});


	}

	var Gcord_array_current = [];
	var Gcord_array_last = [];
	var Gmaster_array = [];

	function Gandalf() {

		var Gstart = ({
			x: 512,
			y: 147
		});
		Gcord_array_last.push(Gstart);

		map_cont.addEventListener('click', function(e) {

			//REMEMBER THAT LAST ARRAY IS 1 OBJECT AHEAD
			if (Gi < 8) {
				var offset = $(this).offset();

				mouseX = (e.pageX - offset.left);
				mouseY = (e.pageY - offset.top);



				Gcord_array_current.push({
					x: mouseX,
					y: mouseY
				});





				ctx.beginPath();
				ctx.moveTo(Gcord_array_last[Gi].x, Gcord_array_last[Gi].y);
				ctx.lineTo(Gcord_array_current[Gi].x, Gcord_array_current[Gi].y);
				ctx.strokeStyle = 'green';
				ctx.stroke();




				last_mouseX = mouseX;
				last_mouseY = mouseY;
				Gcord_array_last.push({
					x: last_mouseX,
					y: last_mouseY
				});


			}
			if (Gi == 8) {


				//console.log("GEN IS BEING CALLED");

				gen_path(mygroup);



			}
			Gi++;
		});


	}

	var Acord_array_current = [];
	var Acord_array_last = [];
	var Amaster_array = [];

	function Aro() {

		var Astart = ({
			x: 512,
			y: 147
		});
		Acord_array_last.push(Astart);

		map_cont.addEventListener('click', function(e) {

			//REMEMBER THAT LAST ARRAY IS 1 OBJECT AHEAD
			if (Ai < 8) {
				var offset = $(this).offset();

				mouseX = (e.pageX - offset.left);
				mouseY = (e.pageY - offset.top);



				Acord_array_current.push({
					x: mouseX,
					y: mouseY
				});





				ctx.beginPath();
				ctx.moveTo(Acord_array_last[Ai].x, Acord_array_last[Ai].y);
				ctx.lineTo(Acord_array_current[Ai].x, Acord_array_current[Ai].y);
				ctx.strokeStyle = 'purple';
				ctx.stroke();




				last_mouseX = mouseX;
				last_mouseY = mouseY;
				Acord_array_last.push({
					x: last_mouseX,
					y: last_mouseY
				});


			}
			if (Ai == 8) {



				gen_path(mygroup);



			}
			Ai++;
		});


	}




	group_btn.addEventListener('click', function() {

		mygroup = document.getElementById('group_options').value;




		if (mygroup == 1) {

			Hobbits();



		}
		if (mygroup == 2) {

			Gandalf();

		}

		if (mygroup == 3) {

			Aro();

		}





	});



	var hJSON;
	var gJSON;
	var aJSON;

	var hJSON_file;
	var gJSON_file;
	var aJSON_file;

	function make_JSON() {

		hJSON = JSON.stringify(Hmaster_array);
		gJSON = JSON.stringify(Gmaster_array);
		aJSON = JSON.stringify(Amaster_array);



	}

	json_btn.addEventListener('click', function() {




		make_JSON();
		console.log("hJSON");
		console.log(hJSON);
		//		console.log( "gJSON" );
		//		console.log( gJSON );
		//		console.log( "aJSON" );
		//		console.log( aJSON );




		$.getJSON('json/htest.json', function(data) {
			hJSON_file = data;
            
			var count = 0;
			// the hjson file needs to be an array
            
			for(Ani_count = 0; Ani_count < hJSON_file.length; Ani_count++){
    
    
				//1
				ctx.beginPath();
                //every first up to second last
				//console.log(hJSON_file[Ani_count].x + ' X Ps Y ' + hJSON_file[Ani_count].y);
                
				ctx.moveTo(hJSON_file[Ani_count].x, hJSON_file[Ani_count].y);


				if (count != 15) {
                    //every second up to last
					//console.log(hJSON_file[Ani_count + 1].x + ' X Ps Y ' + hJSON_file[Ani_count + 1].y);
                    
					ctx.lineTo(hJSON_file[Ani_count + 1].x, hJSON_file[Ani_count + 1].y);
                    
					ctx.strokeStyle = 'red';
					ctx.stroke();
				}


                
				count++;
				

			}



		});




		//    $.getJSON('json/htest.json', function(data) {
		//        hJSON_file = data;
		//        
		//            hJSON_file.forEach(function(element){
		//                console.log(element);
		//            });
		//        
		//        });
		//        
		//         $.getJSON('json/gtest.json', function(data) {
		//        gJSON_file = data;
		//        
		//            gJSON_file.forEach(function(element){
		//                console.log(element);
		//            });
		//        
		//        });
		//        
		//         $.getJSON('json/atest.json', function(data) {
		//        aJSON_file = data;
		//        
		//            aJSON_file.forEach(function(element){
		//                console.log(element);
		//            });
		//        
		//        });





	});




	//GEN PATH FROM DRAWING

	function gen_path(choice) {

		if (choice == 1 && Hi == 7) {

			for (var i = 0; i < Hcord_array_current.length; i++) {

				Hmaster_array.push(Hcord_array_last[i], Hcord_array_current[i]);


				ctx.beginPath(); //1
				ctx.moveTo(Hcord_array_last[i].x, Hcord_array_last[i].y);
				ctx.lineTo(Hcord_array_current[i].x, Hcord_array_current[i].y);
				ctx.strokeStyle = 'blue';
				ctx.stroke();






			}
			//             console.log('Mycount');
			//            console.log(Mycount);
			//             console.log('Hi');
			//             console.log(Hi);


		}

		if (choice == 2 && Gi == 8) {
			//console.log(Gi);
			for (var i2 = 0; i2 < Gcord_array_current.length; i2++) {

				Gmaster_array.push(Gcord_array_last[i2], Gcord_array_current[i2]);


				ctx.beginPath(); //1
				ctx.moveTo(Gcord_array_last[i2].x, Gcord_array_last[i2].y);
				ctx.lineTo(Gcord_array_current[i2].x, Gcord_array_current[i2].y);
				ctx.strokeStyle = 'yellow';
				ctx.stroke();





			}


		}

		if (choice == 3 && Ai == 8) {

			for (var i3 = 0; i3 < Acord_array_current.length; i3++) {


				Amaster_array.push(Acord_array_last[i3], Acord_array_current[i3]);


				ctx.beginPath(); //1
				ctx.moveTo(Acord_array_last[i3].x, Acord_array_last[i3].y);
				ctx.lineTo(Acord_array_current[i3].x, Acord_array_current[i3].y);
				ctx.strokeStyle = 'orange';
				ctx.stroke();


			}


		}



	}



	//TESTING CODE ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	var ss = false;
	var Start_ani;
	var btn;
	// set starting values
	var fps = 60;
	var percent = 0;

	var direction = 0.5;
    
    

	Start_ani = document.getElementById('ani')
	btn = document.getElementById('btn')

	btn.addEventListener('click', function() {


		otrue();

	});


	// start the animation
    
    function start(){
        
        
    create();
    animate();

    }

setTimeout(start, 4000);


	function otrue() {
		ss = true;

	}

	function ofalse() {
		ss = false;

	}


	function animate() {

		// set pos
		if (Boolean(ss)) {
			percent += direction;
          //  console.log(percent);



			if (percent < 0) {
				percent = 0;
				direction = 0.5;
			};
			if (percent >= 100) {
				percent = 100;
				direction = -0.5;
			};
            
            
            
			if (percent == 12.5) {
				ofalse();

			}
			if (percent == 25) {
				ofalse();

			}
			if (percent == 37.5) {
				ofalse();

			}
			if (percent == 50) {
				ofalse();

			}
            if (percent == 62.5) {
				ofalse();

			}
            if (percent == 75) {
				ofalse();

			}
            if (percent == 87.5) {
				ofalse();

			}
            if (percent == 100) {
				ofalse();

			}





		} else {
			percent = percent;

		}


        
		draw(percent);


      
                   setTimeout(function() {

                    requestAnimationFrame(animate);
                }, 1000 / fps);
            //console.log(ani_countTEST);
          
            
           
		// actaully animate and kinda loop
		

	}

    //Getting the data from the JSON file declared here so everything can use it
    $.getJSON('json/htest.json', function(data) {
			hJSON_file = data;
    
    });
    
    
	function create() {

		// redraw path from JSON

		ctx.lineWidth = 2;



		
            
    
   
			var count = 0;
			// the hjson file needs to be an array
            
			for(Ani_count = 0; Ani_count < hJSON_file.length; Ani_count++){
   
    
				//1
				ctx.beginPath();
                //every first up to second last
				//console.log(hJSON_file[Ani_count].x + ' X Ps Y ' + hJSON_file[Ani_count].y);
                
				ctx.moveTo(hJSON_file[Ani_count].x, hJSON_file[Ani_count].y);


				if (count != 15) {
                    //every second up to last
					//console.log(hJSON_file[Ani_count + 1].x + ' X Ps Y ' + hJSON_file[Ani_count + 1].y);
                    
					ctx.lineTo(hJSON_file[Ani_count + 1].x, hJSON_file[Ani_count + 1].y);
                    
					ctx.strokeStyle = '#248812';
					ctx.stroke();
				}


                
				count++;
				
                
			}



		
                

        

	}



	// draw the current frame based on distance along path
	function draw(sliderValue) {
    
        
           // console.log(Ani_count);
           // console.log(hJSON_file[5].x + "yeah");
            
        
       
        
		var xy;

		if (sliderValue < 12.5) { //1
            //console.log(Ani_count + "  " + "TESTING HERE");
			var percent = sliderValue / 11.5;
            node_click = 1;
            xy = getLineXYatPercent({
				x: (hJSON_file[0].x),
				y: (hJSON_file[0].y)
			}, {
				x: (hJSON_file[1].x),
				y: (hJSON_file[1].y)
			}, percent);
              //console.log(sliderValue + "one");
            
            
		} else if (sliderValue < 25) { //2
			var percent = (sliderValue - 12.5) / 11.5;
            node_click = 1;
			xy = getLineXYatPercent({
				x: (hJSON_file[2].x),
				y: (hJSON_file[2].y)
			}, {
				x: (hJSON_file[3].x),
				y: (hJSON_file[3].y)
			}, percent);
              console.log(node_click);
            
            
		} else if (sliderValue < 37.5) { //3
			var percent = (sliderValue - 25) / 11.5;
            node_click = 2;
			xy = getLineXYatPercent({
				x: (hJSON_file[4].x),
				y: (hJSON_file[4].y)
			}, {
				x: (hJSON_file[5].x),
				y: (hJSON_file[5].y)
			}, percent);
              //console.log(sliderValue + "three");
            
            
		} else if (sliderValue < 50) { //4
			var percent = (sliderValue - 37.5) / 11.5;
            node_click = 3;
			xy = getLineXYatPercent({
				x: (hJSON_file[6].x),
				y: (hJSON_file[6].y)
			}, {
				x: (hJSON_file[7].x),
				y: (hJSON_file[7].y)
			}, percent);
              //console.log(sliderValue + "four");
            
		} else if (sliderValue < 62.5) { //5
			var percent = (sliderValue - 50) / 11.5;
            node_click = 4;
			xy = getLineXYatPercent({
				x: (hJSON_file[8].x),
				y: (hJSON_file[8].y)
			}, {
				x: (hJSON_file[9].x),
				y: (hJSON_file[9].y)
			}, percent);
             // console.log(sliderValue + "five");
            
		} else if (sliderValue < 75) { //6
			var percent = (sliderValue - 62.5) / 11.5;
            node_click = 5;
			xy = getLineXYatPercent({
				x: (hJSON_file[10].x),
				y: (hJSON_file[10].y)
			}, {
				x: (hJSON_file[11].x),
				y: (hJSON_file[11].y)
			}, percent);
             // console.log(sliderValue + "six");
            
		} else if (sliderValue < 87.5) { //7
			var percent = (sliderValue - 75) / 11.5;
            node_click = 6;
			xy = getLineXYatPercent({
				x: (hJSON_file[12].x),
				y: (hJSON_file[12].y)
			}, {
				x: (hJSON_file[13].x),
				y: (hJSON_file[13].y)
			}, percent);
             // console.log(sliderValue + "seven");
            
		} else { //8
			var percent = (sliderValue - 87.5) / 12.5;
            node_click = 7;
			xy = getLineXYatPercent({
				x: (hJSON_file[14].x),
				y: (hJSON_file[14].y)
			}, {
				x: (hJSON_file[15].x),
				y: (hJSON_file[15].y)
			}, percent);
              //console.log(sliderValue + "eight");
		}




		drawRect(xy);

 //console.log(Ani_count + "  " + "TESTING HERE" + "BOTTOM");


	}




	// draw at xy
	function drawRect(point) {

		var offset = $('#myCanvas').offset();

		var offx = offset.left;
		var offy = offset.top;




		$("#moveDiv").css({
			"left": point.x - 25 + offx,
			"top": point.y - 25 + offy
		});



	}






	// line: percent is 0-1
	function getLineXYatPercent(startPt, endPt, percent) {
		var dx = endPt.x - startPt.x;
		var dy = endPt.y - startPt.y;
		var X = startPt.x + dx * percent;
		var Y = startPt.y + dy * percent;
		return ({
			x: X,
			y: Y
		});
	}








//TIME LINE STUFF----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var tl_cont;
    var node_click;
    var mouseX_time;
    var mouseY_time;
    tl_cont = document.getElementById('timelineC');

    //find mouse pos for timeline
    
    tl_cont.addEventListener('click',function(e){
        
        
        var offset = $(this).offset();

        mouseX_time = (e.pageX - offset.left);
        mouseY_time = (e.pageY - offset.top);
        
       // console.log(mouseX_time + "X time");
       // console.log(mouseY_time + "Y time");
        
        
        if(mouseX_time < 36 && mouseX_time > 0 && mouseY_time < 141 && mouseY_time > 110){
          
           node_click = 1;
           percent = 0;
           }
        
        if(mouseX_time < 36 && mouseX_time > 0 && mouseY_time < 140 && mouseY_time > 110){
           
           percent = 12.5;
           node_click = 1;
           
           }
         if(mouseX_time < 156 && mouseX_time > 123 && mouseY_time < 140 && mouseY_time > 110){
           node_click = 2   ;
           percent = 25;
           
           }
         if(mouseX_time < 306 && mouseX_time > 275 && mouseY_time < 140 && mouseY_time > 110){
            node_click = 3;
           percent = 37.5;
           
           }
         if(mouseX_time < 458 && mouseX_time > 425 && mouseY_time < 140 && mouseY_time > 110){
           node_click = 4;
           percent = 50;
           
           }
         if(mouseX_time < 598 && mouseX_time > 566 && mouseY_time < 140 && mouseY_time > 110){
           node_click = 5;
           percent = 62.5;
           
           }
         if(mouseX_time < 749 && mouseX_time > 716 && mouseY_time < 140 && mouseY_time > 110){
           node_click = 6;
           percent = 75;
           
           }
         if(mouseX_time < 921 && mouseX_time > 890 && mouseY_time < 140 && mouseY_time > 110){
         node_click = 7;
           percent = 87.5;
           
           }
         if(mouseX_time < 1073 && mouseX_time > 1041 && mouseY_time < 140 && mouseY_time > 110){
         node_click = 8;
           percent = 100;
           
           }
        
    });
    
    
    
    
    
    
    
    
    
    

    $.UDNZTimeline({
        
          "data_url": "json/basic.json",

          "container": {

                "id": "container",
                
                

              },
            

          "dots": {

            "states": {

                "normal": {

                    "_stateId": 0,

                    "color": "#98969a",

                    "color_background": "#cd9d32",

                    "radius": 16,

                    "border": 10

                },
                "active": {
                    "_stateId": 1,
                    "color": "#0b5c0e",
                    "color_background": "#3d9f2b",
                    "radius": 17,
                    "border": 7
                }
            }
          },"lines": {

	    "width": 8,

	    "color": "#cd9d32"

	  },

	  "board": {

	    "width": 150,

	    "color_background": "#38bc20",

	    "color_border": "#3d9f2b",

	    "margin": 6,

	    "border": 5,

	    "spliter_width": 0

	  }
    }).Draw()



    
    
    
    
    
    
    
    
  //POPUPSTUFF---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var pop_data = {
    "nodes": [
        {
            "id": "1",
            "Location": "you're at 0",
            "date": "date 1",
            "description":"ITS WORKING",
            "image": '<img id="des_img" src="img/map.jpg">'
            
            
        },
        {
            "id": "2",
            "Location": "Emyn Muil",
            "date": "1st March T.A. 3019",
            "description":"Frodo and Sam are ambushed by Gollum but they capture him. Gollum becomes thier guide",
            "image": '<img id="des_img" src="img/Hnode1.jpg">'
            
            
        },{
            "id": "3",
            "Location": "Dead Marshes",
            "date": "3rd March T.A. 3019",
            "description":"Frodo and Sam, with Gollum as their guide escape the Nazgul and reach the end of the Dead Marshes",
            "image": '<img id="des_img" src="img/Hnode2.jpg">'
            
            
        },{
            "id": "4",
            "Location": "Morannon",
            "date": "4th March T.A. 3019",
            "description":"Frodo and Sam reach the black gate but cannot use it. Gollum suggestes a secret route into Mordor",
           "image": '<img id="des_img" src="img/Hnode3.jpg">'
            
            
        },{
            "id": "5",
            "Location": "Nindalf",
            "date": "5th March T.A. 3019",
            "description":"Frodo and Sam are captured by Rangers of Gondor and taken to Henneth Annûn. Frodo meets Faramir",
            "image": '<img id="des_img" src="img/Hnode4.jpg">'
            
            
        },{
            "id": "6",
            "Location": "Henneth Annûn",
            "date": "7th March T.A. 3019",
            "description":"Faramir discovers Frodo's quest and decides to take them to Osgiliath",
            "image": '<img id="des_img" src="img/Hnode5.jpg">'
            
        },
//        ,{
//            "id": "7",
//            "Location": "Osgiliath",
//            "date": "8th March T.A. 3019",
//            "description":"Frodo and Sam survive the attack on Osgiliath by the orcs and Nazgul",
//            "image": "<img src= img/this image>"
//            
//            
//        },
        {
            "id": "7",
            "Location": "Osgiliath",
            "date": "8th March T.A. 3019",
            "description":"Frodo persuades Faramir into realesing their company to complete their quest",
            "image": '<img id="des_img" src="img/Hnode6.jpg">'
            
            
        },{
            "id": "8",
            "Location": "Morgul Road",
            "date": "9th March T.A. 3019",
            "description":"Frodo and company reach the Morgul road on the way to Gollum's secret entrance",
            "image": '<img id="des_img" src="img/Hnode7.jpg">'
            
            
        }
    ]
};

    
//     var json_btn;
//    
//    json_btn = document.getElementById('json_btn');
//    
//    json_btn.addEventListener('click', function(){
//        
//       getData(1,1);
//       
//        
//    });
    
    
    
    var dateP;
    var locP;
    var imgP;
    var desP;
    
     dateP = document.getElementById('date');
     locP = document.getElementById('location');
     imgP = document.getElementById('pic_pop');
     desP = document.getElementById('des');
    
    function getData(node_num){
        
        
          
        dateP.innerHTML = pop_data.nodes[node_num].date;
        locP.innerHTML = pop_data.nodes[node_num].Location;
        desP.innerHTML = pop_data.nodes[node_num].description;
        imgP.innerHTML = pop_data.nodes[node_num].image;
        
                
            
    
    }
    
    var group_pic;
    group_pic = document.getElementById('moveDiv');
    
   
     
    
    group_pic.addEventListener('click',function(){
        
         
            $('#popup_big_cont').css("display", "block");
            
       
        
        getData(node_click);
       
        
        
    });
    
    
    
   
    


});

