	function SubMenu() {
				$(".headertoprgt").clone().appendTo(".mobilelist");

				$(".navbar ul li:has(ul)").addClass("has-children");
				$(".navbar ul li:has(ul)").find("ul").before('<span></span>');
				$(".navbar ul li.has-children span").click(function(){
					if(!$(this).hasClass("open")){
						/*we need to know which 'level' we're on */
						var currentLevel = $(this).closest('ul');
						$("li ul", currentLevel).slideUp();
						$("li span", currentLevel).removeClass("open");
						/* open our new menu and add the open class*/
						$(this).next("ul").slideDown();
						$(this).addClass("open");
					}
					else{
						$(this).removeClass("open");
						$(this).next("ul").slideUp();
					}	
				});	
			}
			SubMenu();

			function Hamburger() {
				$(".navbar-toggle").on("click", function () {
					$(this).toggleClass("active");
				});
			}
			Hamburger();




$( window ).on('load', function() {
				
		function PageLoader() {
		$('.loader').fadeOut();
		}
		PageLoader();	
			
	});