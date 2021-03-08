'use strict';

function lazyImages()
{

	$('.lazyset').each(function() {
		if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
			$(this).attr('srcset', $(this).data('srcset')).removeAttr('data-srcset').addClass('loaded');
		}
	});
	$('.lazy').each(function() {
		if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
			$(this).attr('src', $(this).data('src')).removeAttr('data-src').addClass('loaded');
		}
	});

	$(window).on('scroll resize', function() {

		$('.lazyset').each(function() {
			if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
				$(this).attr('srcset', $(this).data('srcset')).removeAttr('data-srcset').addClass('loaded');
			}
		});
		$('.lazy').each(function() {
			if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
				$(this).attr('src', $(this).data('src')).removeAttr('data-src').addClass('loaded');
			}
		});

	});

}

function uglyInput()
{
	$('.ugly').each(function() {
		var $input = $(this).find('input, textarea');
		$input.on('change focusout', function() {
			if( !$input.val() === true ) {
				$input.parent().find('.ugly-label').css({'opacity' : 1});
			} else {
				$input.parent().find('.ugly-label').css({'opacity' : 0});
			}
		});
	});
}

jQuery(document).ready(function() {

	lazyImages();
	uglyInput();
	feather.replace();

});

jQuery(window).on('load', function() {

	lazyImages();

});
