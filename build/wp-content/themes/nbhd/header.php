<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108874065-8"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-108874065-8');
	</script>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
	<style>
		.cc-window {
			opacity: 1;
			-webkit-transition: opacity 1s ease;
			transition: opacity 1s ease
		}

		.cc-window.cc-invisible {
			opacity: 0
		}

		.cc-animate.cc-revoke {
			-webkit-transition: transform 1s ease;
			-webkit-transition: -webkit-transform 1s ease;
			transition: -webkit-transform 1s ease;
			transition: transform 1s ease;
			transition: transform 1s ease, -webkit-transform 1s ease
		}

		.cc-animate.cc-revoke.cc-top {
			-webkit-transform: translateY(-2em);
			transform: translateY(-2em)
		}

		.cc-animate.cc-revoke.cc-bottom {
			-webkit-transform: translateY(2em);
			transform: translateY(2em)
		}

		.cc-animate.cc-revoke.cc-active.cc-top {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}

		.cc-animate.cc-revoke.cc-active.cc-bottom {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}

		.cc-revoke:hover {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}

		.cc-grower {
			max-height: 0;
			overflow: hidden;
			-webkit-transition: max-height 1s;
			transition: max-height 1s
		}

		.cc-revoke,
		.cc-window {
			position: fixed;
			overflow: hidden;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			font-family: Helvetica, Calibri, Arial, sans-serif;
			font-size: 16px;
			line-height: 1.5em;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: nowrap;
			flex-wrap: nowrap;
			z-index: 9999
		}

		.cc-window.cc-static {
			position: static
		}

		.cc-window.cc-floating {
			padding: 2em;
			max-width: 24em;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column
		}

		.cc-window.cc-banner {
			padding: 1em 1.8em;
			width: 100%;
			-webkit-box-orient: horizontal;
			-webkit-box-direction: normal;
			-ms-flex-direction: row;
			flex-direction: row
		}

		.cc-revoke {
			padding: .5em
		}

		.cc-revoke:hover {
			text-decoration: underline
		}

		.cc-header {
			font-size: 18px;
			font-weight: 700
		}

		.cc-btn,
		.cc-close,
		.cc-link,
		.cc-revoke {
			cursor: pointer
		}

		.cc-link {
			opacity: .8;
			display: inline-block;
			padding: .2em;
			text-decoration: underline
		}

		.cc-link:hover {
			opacity: 1
		}

		.cc-link:active,
		.cc-link:visited {
			color: initial
		}

		.cc-btn {
			display: block;
			padding: .4em .8em;
			font-size: .9em;
			font-weight: 700;
			border-width: 2px;
			border-style: solid;
			text-align: center;
			white-space: nowrap
		}

		.cc-highlight .cc-btn:first-child {
			background-color: transparent;
			border-color: transparent
		}

		.cc-highlight .cc-btn:first-child:focus,
		.cc-highlight .cc-btn:first-child:hover {
			background-color: transparent;
			text-decoration: underline
		}

		.cc-close {
			display: block;
			position: absolute;
			top: .5em;
			right: .5em;
			font-size: 1.6em;
			opacity: .9;
			line-height: .75
		}

		.cc-close:focus,
		.cc-close:hover {
			opacity: 1
		}

		.cc-revoke.cc-top {
			top: 0;
			left: 3em;
			border-bottom-left-radius: .5em;
			border-bottom-right-radius: .5em
		}

		.cc-revoke.cc-bottom {
			bottom: 0;
			left: 3em;
			border-top-left-radius: .5em;
			border-top-right-radius: .5em
		}

		.cc-revoke.cc-left {
			left: 3em;
			right: unset
		}

		.cc-revoke.cc-right {
			right: 3em;
			left: unset
		}

		.cc-top {
			top: 1em
		}

		.cc-left {
			left: 1em
		}

		.cc-right {
			right: 1em
		}

		.cc-bottom {
			bottom: 1em
		}

		.cc-floating>.cc-link {
			margin-bottom: 1em
		}

		.cc-floating .cc-message {
			display: block;
			margin-bottom: 1em
		}

		.cc-window.cc-floating .cc-compliance {
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto
		}

		.cc-window.cc-banner {
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center
		}

		.cc-banner.cc-top {
			left: 0;
			right: 0;
			top: 0
		}

		.cc-banner.cc-bottom {
			left: 0;
			right: 0;
			bottom: 0
		}

		.cc-banner .cc-message {
			display: block;
			-webkit-box-flex: 1;
			-ms-flex: 1 1 auto;
			flex: 1 1 auto;
			max-width: 100%;
			margin-right: 1em
		}

		.cc-compliance {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-ms-flex-line-pack: justify;
			align-content: space-between
		}

		.cc-floating .cc-compliance>.cc-btn {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1
		}

		.cc-btn+.cc-btn {
			margin-left: .5em
		}

		@media print {

			.cc-revoke,
			.cc-window {
				display: none
			}
		}

		@media screen and (max-width:900px) {
			.cc-btn {
				white-space: normal
			}
		}

		@media screen and (max-width:414px) and (orientation:portrait),
		screen and (max-width:736px) and (orientation:landscape) {
			.cc-window.cc-top {
				top: 0
			}

			.cc-window.cc-bottom {
				bottom: 0
			}

			.cc-window.cc-banner,
			.cc-window.cc-floating,
			.cc-window.cc-left,
			.cc-window.cc-right {
				left: 0;
				right: 0
			}

			.cc-window.cc-banner {
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column
			}

			.cc-window.cc-banner .cc-compliance {
				-webkit-box-flex: 1;
				-ms-flex: 1 1 auto;
				flex: 1 1 auto
			}

			.cc-window.cc-floating {
				max-width: none
			}

			.cc-window .cc-message {
				margin-bottom: 1em
			}

			.cc-window.cc-banner {
				-webkit-box-align: unset;
				-ms-flex-align: unset;
				align-items: unset
			}

			.cc-window.cc-banner .cc-message {
				margin-right: 0
			}
		}

		.cc-floating.cc-theme-classic {
			padding: 1.2em;
			border-radius: 5px
		}

		.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {
			text-align: center;
			display: inline;
			-webkit-box-flex: 0;
			-ms-flex: none;
			flex: none
		}

		.cc-theme-classic .cc-btn {
			border-radius: 5px
		}

		.cc-theme-classic .cc-btn:last-child {
			min-width: 140px
		}

		.cc-floating.cc-type-info.cc-theme-classic .cc-btn {
			display: inline-block
		}

		.cc-theme-edgeless.cc-window {
			padding: 0
		}

		.cc-floating.cc-theme-edgeless .cc-message {
			margin: 2em;
			margin-bottom: 1.5em
		}

		.cc-banner.cc-theme-edgeless .cc-btn {
			margin: 0;
			padding: .8em 1.8em;
			height: 100%
		}

		.cc-banner.cc-theme-edgeless .cc-message {
			margin-left: 1em
		}

		.cc-floating.cc-theme-edgeless .cc-btn+.cc-btn {
			margin-left: 0
		}
	</style>
	<link rel="preload" href="<?php echo get_template_directory_uri() . '/assets/css/fa.min.css'; ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript>
		<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/fa.min.css'; ?>">
	</noscript>
</head>

<body <?php body_class(); ?>>
	<div id="wrapper">
		<?php get_template_part('template-parts/navigation'); ?>