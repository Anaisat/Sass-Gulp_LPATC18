// jQuery fullscreen-menu script example.

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
				$( ".hamburger" ).hide();
				$( ".cross" ).show();
	});
});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});

$( ".magnifying-glass-2" ).hide();
$( ".menu-magnifying-glass" ).hide();
$( ".magnifying-glass" ).click(function() {
	$( ".menu-magnifying-glass" ).slideToggle( "slow", function() {
			$( ".magnifying-glass" ).hide();
			$( ".magnifying-glass-2" ).show();
		});
});

$( ".magnifying-glass-2" ).click(function() {
	$( ".menu-magnifying-glass" ).slideToggle( "slow", function() {
		$( ".magnifying-glass-2" ).hide();
		$( ".magnifying-glass" ).show();

	});
});
