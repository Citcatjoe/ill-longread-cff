jQuery(document).ready(function($) 
{
	// INITIALISATION DU SLIDER
	// $('.bxslider').bxSlider({
	// 	//mode: 'fade'
	// });
	mainTl = new TimelineMax();
	var $map = $('#map');
	var $chasseral = $map.find('#map-chasseral-dot');
	var $nendaz = $map.find('#map-nendaz-dot');
	var $midi = $map.find('#map-midi-dot');
	var $glacier3000 = $map.find('#map-glacier3000-dot');
	var $gastlosen = $map.find('#map-gastlosen-dot');

	var $chasseralTxt = $map.find('#map-chasseral-txt');
	var $midiTxt = $map.find('#map-midi-txt');
	var $nendazTxt = $map.find('#map-nendaz-txt');
	var $glacier3000Txt = $map.find('#map-glacier3000-txt');
	var $gastlosenTxt = $map.find('#map-gastlosen-txt');

	mainTl
		.set($chasseral, { autoAlpha: 1, transformOrigin: "center center" })
		.set($nendaz, { autoAlpha: 1, transformOrigin: "center center" })
		.set($midi, { autoAlpha: 1, transformOrigin: "center center" })
		.set($glacier3000, { autoAlpha: 1, transformOrigin: "center center" })
		.set($gastlosen, { autoAlpha: 1, transformOrigin: "center center" });

	$chasseral.mouseenter(function() 
	{
		mainTl.to($chasseral, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$chasseral.mouseleave(function() 
	{
		mainTl.to($chasseral, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$midi.mouseenter(function() 
	{
		mainTl.to($midi, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$midi.mouseleave(function() 
	{
		mainTl.to($midi, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$nendaz.mouseenter(function() 
	{
		mainTl.to($nendaz, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$nendaz.mouseleave(function() 
	{
		mainTl.to($nendaz, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$glacier3000.mouseenter(function() 
	{
		mainTl.to($glacier3000, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$glacier3000.mouseleave(function() 
	{
		mainTl.to($glacier3000, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$gastlosen.mouseenter(function() 
	{
		mainTl.to($gastlosen, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$gastlosen.mouseleave(function() 
	{
		mainTl.to($gastlosen, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});





	$chasseralTxt.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-chasseral").offset().top
	    }, 1000);
	});

	$midiTxt.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-midi").offset().top
	    }, 1000);
	});

	$nendazTxt.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-nendaz").offset().top
	    }, 1000);
	});

	$glacier3000Txt.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-glacier3000").offset().top
	    }, 1000);
	});

	$gastlosenTxt.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-gastlosen").offset().top
	    }, 1000);
	});






	$chasseral.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-chasseral").offset().top
	    }, 1000);
	});

	$midi.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-midi").offset().top
	    }, 1000);
	});

	$nendaz.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-nendaz").offset().top
	    }, 1000);
	});

	$glacier3000.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-glacier3000").offset().top
	    }, 1000);
	});

	$gastlosen.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-gastlosen").offset().top
	    }, 1000);
	});











	mainTl2 = new TimelineMax();
	var $map2 = $('#map2');
	var $chasseral2 = $map2.find('#map-chasseral-dot');
	var $nendaz2 = $map2.find('#map-nendaz-dot');
	var $midi2 = $map2.find('#map-midi-dot');
	var $glacier30002 = $map2.find('#map-glacier3000-dot');
	var $gastlosen2 = $map2.find('#map-gastlosen-dot');

	var $chasseral2color = $chasseral2.find('.st4');
	var $midi2color = $midi2.find('.st4');
	var $nendaz2color = $nendaz2.find('.st4');
	var $glacier30002color = $glacier30002.find('.st4');
	var $gastlosen2color = $gastlosen2.find('.st4');

	mainTl
		.set($chasseral2, { autoAlpha: 1, transformOrigin: "center center" })
		.set($nendaz2, { autoAlpha: 1, transformOrigin: "center center" })
		.set($midi2, { autoAlpha: 1, transformOrigin: "center center" })
		.set($glacier30002, { autoAlpha: 1, transformOrigin: "center center" })
		.set($gastlosen2, { autoAlpha: 1, transformOrigin: "center center" })
		.set([$chasseral2color, $midi2color, $nendaz2color, $glacier30002color, $gastlosen2color], { fill: '#b9b9b9' });


	$chasseral2.mouseenter(function() 
	{
		mainTl2.to($chasseral2, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$chasseral2.mouseleave(function() 
	{
		mainTl2.to($chasseral2, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$midi2.mouseenter(function() 
	{
		mainTl2.to($midi2, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$midi2.mouseleave(function() 
	{
		mainTl2.to($midi2, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$nendaz2.mouseenter(function() 
	{
		mainTl2.to($nendaz2, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$nendaz2.mouseleave(function() 
	{
		mainTl2.to($nendaz2, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$glacier30002.mouseenter(function() 
	{
		mainTl2.to($glacier30002, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$glacier30002.mouseleave(function() 
	{
		mainTl2.to($glacier30002, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});

	$gastlosen2.mouseenter(function() 
	{
		mainTl2.to($gastlosen2, 0.1, {scale: 1.3, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});
	$gastlosen2.mouseleave(function() 
	{
		mainTl2.to($gastlosen2, 0.1, {scale: 1, ease: Power4.easeOut, y: 0});
		event.stopImmediatePropagation();
	});




	$chasseral2.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-chasseral").offset().top
	    }, 1000);
	});

	$midi2.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-midi").offset().top
	    }, 1000);
	});

	$nendaz2.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-nendaz").offset().top
	    }, 1000);
	});

	$glacier30002.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-glacier3000").offset().top
	    }, 1000);
	});

	$gastlosen2.click(function() 
	{
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".anchor-gastlosen").offset().top
	    }, 1000);
	});



	var controllerMapAnim = new ScrollMagic.Controller();


	new ScrollMagic.Scene({
			triggerElement: '.anchor-chasseral', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setClassToggle("#map2 #map-chasseral-dot .st4", "is-red")
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		 // add indicators (requires plugin)
		.addTo(controllerMapAnim);

				new ScrollMagic.Scene({
						triggerElement: '.anchor-nendaz', 
						triggerHook: 0.5
						//duration: (stepCitern * 10)
					})
					//.setPin('section.citern', {pushFollowers: true})
					.setClassToggle("#map2 #map-chasseral-dot .st4", "is-disabled")
					//.setTween(tween)
					//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
					.offset( 0 ) //tip top
					 // add indicators (requires plugin)
					.addTo(controllerMapAnim);


				new ScrollMagic.Scene({
						triggerElement: '.anchor-nendaz', 
						triggerHook: 0.5
						//duration: (stepCitern * 10)
					})
					//.setPin('section.citern', {pushFollowers: true})
					.setClassToggle("#map2 #map-nendaz-dot .st4", "is-red")
					//.setTween(tween)
					//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
					.offset( 0 ) //tip top
					 // add indicators (requires plugin)
					.addTo(controllerMapAnim);

							new ScrollMagic.Scene({
									triggerElement: '.anchor-glacier3000', 
									triggerHook: 0.5
									//duration: (stepCitern * 10)
								})
								//.setPin('section.citern', {pushFollowers: true})
								.setClassToggle("#map2 #map-nendaz-dot .st4", "is-disabled")
								//.setTween(tween)
								//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
								.offset( 0 ) //tip top
								 // add indicators (requires plugin)
								.addTo(controllerMapAnim);


							new ScrollMagic.Scene({
									triggerElement: '.anchor-glacier3000', 
									triggerHook: 0.5
									//duration: (stepCitern * 10)
								})
								//.setPin('section.citern', {pushFollowers: true})
								.setClassToggle("#map2 #map-glacier3000-dot .st4", "is-red")
								//.setTween(tween)
								//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
								.offset( 0 ) //tip top
								 // add indicators (requires plugin)
								.addTo(controllerMapAnim);

				new ScrollMagic.Scene({
						triggerElement: '.anchor-midi', 
						triggerHook: 0.5
						//duration: (stepCitern * 10)
					})
					//.setPin('section.citern', {pushFollowers: true})
					.setClassToggle("#map2 #map-glacier3000-dot .st4", "is-disabled")
					//.setTween(tween)
					//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
					.offset( 0 ) //tip top
					 // add indicators (requires plugin)
					.addTo(controllerMapAnim);


				new ScrollMagic.Scene({
						triggerElement: '.anchor-midi', 
						triggerHook: 0.5
						//duration: (stepCitern * 10)
					})
					//.setPin('section.citern', {pushFollowers: true})
					.setClassToggle("#map2 #map-midi-dot .st4", "is-red")
					//.setTween(tween)
					//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
					.offset( 0 ) //tip top
					 // add indicators (requires plugin)
					.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: '.anchor-gastlosen', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setClassToggle("#map2 #map-midi-dot .st4", "is-disabled")
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		 // add indicators (requires plugin)
		.addTo(controllerMapAnim);


	new ScrollMagic.Scene({
			triggerElement: '.anchor-gastlosen', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setClassToggle("#map2 #map-gastlosen-dot .st4", "is-red")
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		 // add indicators (requires plugin)
		.addTo(controllerMapAnim);



	
	


	//360
	$('.video-360-poster').click(function(ev){
		 players['video360'].playVideo();
		 $(this).hide();
	});



	// hack to remove white space under footer
	var controller = new ScrollMagic.Controller();
  	var whiteSpaceRemoved = false;
	new ScrollMagic.Scene({
        triggerElement: "footer",
        triggerHook: 0.5,
        duration: 100
    })
        .on('enter', function (e) {
          if(whiteSpaceRemoved == false)
          {
            $('footer').nextAll('div').css('display', 'none');
             $('footer').nextAll('img').css('display', 'none');
            whiteSpaceRemoved = true;
          }
        })
        //
        .offset(0) //tip top
        .addTo(controller);

	$(".owl").owlCarousel({
	    items : 1,
	    itemsDesktop: [1200,1],
	    itemsTablet: [992,1],
	    itemsMobile: [500,1],
	    lazyLoad : true,
	    navigation : true
	 }); 

	// LAZYLOADING DES IMAGES AVEC LA CLASSE "LAZY"
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200 )
	{
		$(".zoom").click(function() 
		{
			zoom.to({
				element: $(this)[0]
			});
		});
	} 	

	// SCROLL WHEN CLICK ON SCROLL INDICATOR
	$(".scroll-indicator").click(function(){
		$('html, body').animate({
		   scrollTop:$('section:eq(0)').offset().top -80
		}, 1000);
	});


	var $numbers = $('.numbers'),
		numbersDone = false;
	

	$(window).scroll(function(){
    	if ( $numbers.is(':in-viewport') && numbersDone ==false) {
		  	$('.numbers h1 i').counterUp({
				delay: 10, // the delay time in ms
				time: 3000 // the speed time in ms
			});
			numbersDone = true;
		}
		
	});




	// CHART CONFIG
	Chart.defaults.groupableBar = Chart.helpers.clone(Chart.defaults.bar);

	var helpers = Chart.helpers;
	Chart.controllers.groupableBar = Chart.controllers.bar.extend({
	  calculateBarX: function (index, datasetIndex) {
	    // position the bars based on the stack index
	    var stackIndex = this.getMeta().stackIndex;
	    return Chart.controllers.bar.prototype.calculateBarX.apply(this, [index, stackIndex]);
	  },

	  hideOtherStacks: function (datasetIndex) {
	    var meta = this.getMeta();
	    var stackIndex = meta.stackIndex;

	    this.hiddens = [];
	    for (var i = 0; i < datasetIndex; i++) {
	      var dsMeta = this.chart.getDatasetMeta(i);
	      if (dsMeta.stackIndex !== stackIndex) {
	        this.hiddens.push(dsMeta.hidden);
	        dsMeta.hidden = true;
	      }
	    }
	  },

	  unhideOtherStacks: function (datasetIndex) {
	    var meta = this.getMeta();
	    var stackIndex = meta.stackIndex;

	    for (var i = 0; i < datasetIndex; i++) {
	      var dsMeta = this.chart.getDatasetMeta(i);
	      if (dsMeta.stackIndex !== stackIndex) {
	        dsMeta.hidden = this.hiddens.unshift();
	      }
	    }
	  },

	  calculateBarY: function (index, datasetIndex) {
	    this.hideOtherStacks(datasetIndex);
	    var barY = Chart.controllers.bar.prototype.calculateBarY.apply(this, [index, datasetIndex]);
	    this.unhideOtherStacks(datasetIndex);
	    return barY;
	  },

	  calculateBarBase: function (datasetIndex, index) {
	    this.hideOtherStacks(datasetIndex);
	    var barBase = Chart.controllers.bar.prototype.calculateBarBase.apply(this, [datasetIndex, index]);
	    this.unhideOtherStacks(datasetIndex);
	    return barBase;
	  },

	  getBarCount: function () {
	    var stacks = [];

	    // put the stack index in the dataset meta
	    Chart.helpers.each(this.chart.data.datasets, function (dataset, datasetIndex) {
	      var meta = this.chart.getDatasetMeta(datasetIndex);
	      if (meta.bar && this.chart.isDatasetVisible(datasetIndex)) {
	        var stackIndex = stacks.indexOf(dataset.stack);
	        if (stackIndex === -1) {
	          stackIndex = stacks.length;
	          stacks.push(dataset.stack);
	        }
	        meta.stackIndex = stackIndex;
	      }
	    }, this);

	    this.getMeta().stacks = stacks;
	    return stacks.length;
	  },
	});

	var data = {
	  labels: ["2011", "2012", "2013", "2014", "2015"],
	  datasets: [
	    {
	      label: "AQ (Analog Quartz)",
	      backgroundColor: "rgba(99,132,255,0.2)",
	      data: [38.2, 39.7, 39.6, 40.4, 40.1],
	      stack: 1
	    },
	    {
	      label: "DQ (Digital Quartz)",
	      backgroundColor: "rgba(99,255,132,0.2)",
	      data: [17.0, 17.6, 17.9, 17.7, 17.6],
	      stack: 1
	    },
	    {
	      label: "ME (Mechanical Watch)",
	      backgroundColor: "rgba(255,99,132,0.2)",
	      data: [2.7, 2.6, 2.3, 2.2, 1.8],
	      stack: 1
	    }
	  ]
	};

	var data2 = {
	  labels: ["2011", "2012", "2013", "2014", "2015"],
	  datasets: [
	    {
	      label: "AQ (Analog Quartz)",
	      backgroundColor: "rgba(99,132,255,0.2)",
	      data: [75.2, 77.9, 93.6, 107.1, 122.4],
	      stack: 1
	    },
	    {
	      label: "DQ (Digital Quartz)",
	      backgroundColor: "rgba(99,255,132,0.2)",
	      data: [14.3, 15.6, 18.2, 20.1, 21.0],
	      stack: 1
	    },
	    {
	      label: "ME (Mechanical Watch)",
	      backgroundColor: "rgba(255,99,132,0.2)",
	      data: [11.5, 12.3, 13.0, 14.1, 13.9],
	      stack: 1
	    }
	  ]
	};
	
	var graphGenerated = false;
	$(window).scroll(function(){
    	if ($('.gallery .trigger').is(':in-viewport') && graphGenerated == false) {

    		// SET A DELAY IN A FUNCTION
			setTimeout(function() 
			{
				setTimeout(function() 
				{
					$('canvas').addClass('is-visible');
				}, 100);

				var ctx = document.getElementById("myChart").getContext("2d");
				new Chart(ctx, {
				  type: 'groupableBar',
				  data: data,
				  options: {
				  	title: {
			            display: true,
			            text: 'UNITÉS (en millions de pièces)'
			        },
				    scales: {
				      yAxes: [{
				        ticks: {
				          max: 70,
				        },
				        stacked: true,
				      }]
				    }
				  }
				});

				var ctx2 = document.getElementById("myChart2").getContext("2d");
				new Chart(ctx2, {
				  type: 'groupableBar',
				  data: data2,
				  options: {
				  	title: {
			            display: true,
			            text: 'VALEUR (en milliard de Yens)'
			        },
				    scales: {
				      yAxes: [{
				        ticks: {
				          max: 160,
				        },
				        stacked: true,
				      }]
				    }
				  }
				});
			}, 500);

			graphGenerated = true;
		}
	});







});
