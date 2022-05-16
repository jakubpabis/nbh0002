<?php

/**
 * WP Bootstrap Starter functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package nbhd
 */

if (!function_exists('nbhd_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function nbhd_setup()
	{
		/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on WP Bootstrap Starter, use a find and replace
	 * to change 'nbhd' to the name of your theme in all the template files.
	 */
		load_theme_textdomain('nbhd', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
		add_theme_support('title-tag');

		/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
		add_theme_support('post-thumbnails');
		add_image_size('size640', 640, 640, true);

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(array(
			'primary' => esc_html__('Primary', 'nbhd'),
			'footer1' => esc_html__('Footer 1', 'nbhd'),
			'footer2' => esc_html__('Footer 2', 'nbhd'),
		));

		/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
		add_theme_support('html5', array(
			'comment-form',
			'comment-list',
			'caption',
		));

		// Set up the WordPress core custom background feature.
		add_theme_support('custom-background', apply_filters('nbhd_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		)));

		// Add theme support for selective refresh for widgets.
		add_theme_support('customize-selective-refresh-widgets');

		function nbhd_add_editor_styles()
		{
			add_editor_style('custom-editor-style.css');
		}
		add_action('admin_init', 'nbhd_add_editor_styles');
	}
endif;
add_action('after_setup_theme', 'nbhd_setup');

// Remove all WooCommerce styles and scripts
//add_filter( 'woocommerce_enqueue_styles', '__return_false' );


/**
 * Remove Post from menu
 */
function post_remove()
{
	remove_menu_page('edit.php');
}
add_action('admin_menu', 'post_remove');

/* Disable WordPress Admin Bar for all users but admins. */
show_admin_bar(false);

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function nbhd_content_width()
{
	$GLOBALS['content_width'] = apply_filters('nbhd_content_width', 1170);
}
add_action('after_setup_theme', 'nbhd_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function nbhd_widgets_init()
{
	register_sidebar(array(
		'name'          => esc_html__('Sidebar', 'nbhd'),
		'id'            => 'sidebar-1',
		'description'   => esc_html__('Add widgets here.', 'nbhd'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	));
	register_sidebar(array(
		'name'          => esc_html__('Footer 1', 'nbhd'),
		'id'            => 'footer-1',
		'description'   => esc_html__('Add widgets here.', 'nbhd'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	));
	register_sidebar(array(
		'name'          => esc_html__('Footer 2', 'nbhd'),
		'id'            => 'footer-2',
		'description'   => esc_html__('Add widgets here.', 'nbhd'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	));
	register_sidebar(array(
		'name'          => esc_html__('Footer 3', 'nbhd'),
		'id'            => 'footer-3',
		'description'   => esc_html__('Add widgets here.', 'nbhd'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	));
}
add_action('widgets_init', 'nbhd_widgets_init');


remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

/**
 * Enqueue scripts and styles.
 */
function nbhd_scripts()
{
	wp_dequeue_style('wp-block-library');
	wp_dequeue_style('wp-block-library-theme');
	// load bootstrap css
	wp_enqueue_style('nbhd-style', get_template_directory_uri() . '/assets/css/main.min.css?v=2.2.7');

	if (!is_admin()) {
		wp_deregister_script('wp-embed');
		wp_deregister_script('wp-emoji');
	}

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', array(), '', false);
	wp_deregister_script('jquery-migrate');
	wp_register_script('jquery-migrate', "https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.2.0/jquery-migrate.min.js", array(), '3.2.0', false);
	wp_enqueue_script('nbhd-feather', 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js', array(), '', true);
	// Internet Explorer HTML5 support
	wp_enqueue_script('html5hiv', get_template_directory_uri() . '/inc/assets/js/html5.js', array(), '3.7.0', false);
	wp_script_add_data('html5hiv', 'conditional', 'lt IE 9');
	wp_enqueue_script('nbhd-app', get_template_directory_uri() . '/assets/js/main.min.js', array(), '2.0.4', true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'nbhd_scripts', 0);


function nbhd_password_form()
{
	global $post;
	$label = 'pwbox-' . (empty($post->ID) ? rand() : $post->ID);
	$o = '<form action="' . esc_url(site_url('wp-login.php?action=postpass', 'login_post')) . '" method="post">
    <div class="d-block mb-3">' . __("To view this protected post, enter the password below:", "nbhd") . '</div>
    <div class="form-group form-inline"><label for="' . $label . '" class="mr-2">' . __("Password:", "nbhd") . ' </label><input name="post_password" id="' . $label . '" type="password" size="20" maxlength="20" class="form-control mr-2" /> <input type="submit" name="Submit" value="' . esc_attr__("Submit", "nbhd") . '" class="btn btn-primary"/></div>
    </form>';
	return $o;
}
add_filter('the_password_form', 'nbhd_password_form');



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load plugin compatibility file.
 */
require get_template_directory() . '/inc/plugin-compatibility/plugin-compatibility.php';

/**
 * Load custom WordPress nav walker.
 */
if (!class_exists('wp_bootstrap_navwalker')) {
	require_once(get_template_directory() . '/inc/wp_bootstrap_navwalker.php');
}

// Remove all currency symbols
function sww_remove_wc_currency_symbols($currency_symbol, $currency)
{
	$currency_symbol = 'PLN';
	return $currency_symbol;
}
add_filter('woocommerce_currency_symbol', 'sww_remove_wc_currency_symbols', 10, 2);

// Our hooked in function - $fields is passed via the filter!
function custom_override_checkout_fields_nbhd($fields)
{
	$fields['billing']['billing_address_2']['label'] = 'Ciąg dalszy adresu ';
	$fields['shipping']['shipping_address_2']['label'] = 'Ciąg dalszy adresu ';
	return $fields;
}
add_filter('woocommerce_checkout_fields', 'custom_override_checkout_fields_nbhd');

/**
 * @snippet       Disable Payment Gateway For Specific Shipping Method
 * @how-to        Get CustomizeWoo.com FREE
 * @author        Rodolfo Melogli
 * @testedwith    WooCommerce 3.6.2
 * @donate $9     https://businessbloomer.com/bloomer-armada/
 */
function gateway_disable_shipping($available_gateways)
{
	if (!is_admin()) {
		$chosen_methods = WC()->session->get('chosen_shipping_methods');
		$chosen_shipping = $chosen_methods[0];
		if (isset($available_gateways['przelewy24']) && 0 === strpos($chosen_shipping, 'flat_rate')) {
			unset($available_gateways['przelewy24']);
		}
	}
	return $available_gateways;
}
add_filter('woocommerce_available_payment_gateways', 'gateway_disable_shipping');


// Register Custom Taxonomy
function custom_taxonomy_marka()
{

	$labels = array(
		'name'                       => 'Nasze marki',
		'singular_name'              => 'Marka',
		'menu_name'                  => 'Marki',
		'all_items'                  => 'Wszystkie marki',
		'parent_item'                => 'Marka nadrzędna',
		'parent_item_colon'          => 'Marka nadrzędna:',
		'new_item_name'              => 'Nowa marka',
		'add_new_item'               => 'Dodaj nową markę',
		'edit_item'                  => 'Edytuj markę',
		'update_item'                => 'Aktualizuj markę',
		'separate_items_with_commas' => 'Marki przedzielone kropką',
		'search_items'               => 'Szukaj marek',
		'add_or_remove_items'        => 'Dodaj lub usuń markę',
		'choose_from_most_used'      => 'Wybierz z pośród najpopularniejszych marek',
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy('marka', 'product', $args);
}
add_action('init', 'custom_taxonomy_marka', 0);


if (!function_exists('nbhd_catalog_ordering')) {

	/**
	 * Output the product sorting options.
	 */
	function nbhd_catalog_ordering()
	{
		if (!wc_get_loop_prop('is_paginated') || !woocommerce_products_will_display()) {
			return;
		}
		$show_default_orderby    = 'menu_order' === apply_filters('woocommerce_default_catalog_orderby', get_option('woocommerce_default_catalog_orderby', 'menu_order'));
		$catalog_orderby_options = apply_filters(
			'woocommerce_catalog_orderby',
			array(
				'menu_order' => __('Normalnie', 'woocommerce'),
				'popularity' => __('Popularność', 'woocommerce'),
				'rating'     => __('Po ocenach', 'woocommerce'),
				'date'       => __('Po świeżości', 'woocommerce'),
				'price'      => __('Hajs rosnąco', 'woocommerce'),
				'price-desc' => __('Hajs malejąco', 'woocommerce'),
			)
			// array(
			// 	'menu_order' => __( 'Default sorting', 'woocommerce' ),
			// 	'popularity' => __( 'Sort by popularity', 'woocommerce' ),
			// 	'rating'     => __( 'Sort by average rating', 'woocommerce' ),
			// 	'date'       => __( 'Sort by latest', 'woocommerce' ),
			// 	'price'      => __( 'Sort by price: low to high', 'woocommerce' ),
			// 	'price-desc' => __( 'Sort by price: high to low', 'woocommerce' ),
			// )
		);

		$default_orderby = wc_get_loop_prop('is_search') ? 'relevance' : apply_filters('woocommerce_default_catalog_orderby', get_option('woocommerce_default_catalog_orderby', ''));
		$orderby         = isset($_GET['orderby']) ? wc_clean(wp_unslash($_GET['orderby'])) : $default_orderby; // WPCS: sanitization ok, input var ok, CSRF ok.

		if (wc_get_loop_prop('is_search')) {
			$catalog_orderby_options = array_merge(array('relevance' => __('Relevance', 'woocommerce')), $catalog_orderby_options);

			unset($catalog_orderby_options['menu_order']);
		}

		if (!$show_default_orderby) {
			unset($catalog_orderby_options['menu_order']);
		}

		if (!wc_review_ratings_enabled()) {
			unset($catalog_orderby_options['rating']);
		}

		if (!array_key_exists($orderby, $catalog_orderby_options)) {
			$orderby = current(array_keys($catalog_orderby_options));
		}

		wc_get_template(
			'loop/orderby.php',
			array(
				'catalog_orderby_options' => $catalog_orderby_options,
				'orderby'                 => $orderby,
				'show_default_orderby'    => $show_default_orderby,
			)
		);
	}
}

//remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
//remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );

/**
 * Ensure variation combinations are working properly - standard limit is 30
 */
function woo_custom_ajax_variation_threshold($qty, $product)
{
	return 500;
}
add_filter('woocommerce_ajax_variation_threshold', 'woo_custom_ajax_variation_threshold', 10, 2);

/**
 * Disable out of stock variations
 * https://github.com/woocommerce/woocommerce/blob/826af31e1e3b6e8e5fc3c1004cc517c5c5ec25b1/includes/class-wc-product-variation.php
 * @return Boolean
 */
function wcbv_variation_is_active($active, $variation)
{
	if (!$variation->is_in_stock()) {
		return false;
	}
	return $active;
}
//add_filter('woocommerce_variation_is_active', 'wcbv_variation_is_active', 10, 2);


/**
 * Output the related products.
 */
if (!function_exists('woocommerce_output_related_products')) {
	function woocommerce_output_related_products()
	{
		global $upsellsused;
		if ($upsellsused == false) {
			$args = array(
				'posts_per_page' => 4,
				'columns'        => 4,
				'orderby'        => 'popular', // @codingStandardsIgnoreLine.
			);
			woocommerce_related_products(apply_filters('woocommerce_output_related_products_args', $args));
		}
	}
}


add_filter('woocommerce_hide_invisible_variations', '__return_true');


add_action('woocommerce_before_shop_loop_item_title', function () {
	global $product;
	$prod = strtotime($product->get_date_modified());
	$now = time();
	if ($product->is_on_sale()) {
		if ($product->is_type('simple')) {
			$max_percentage = (($product->get_regular_price() - $product->get_sale_price()) / $product->get_regular_price()) * 100;
		} elseif ($product->is_type('variable')) {
			$max_percentage = 0;
			foreach ($product->get_children() as $child_id) {
				$variation = wc_get_product($child_id);
				$price = $variation->get_regular_price();
				$sale = $variation->get_sale_price();
				if ($price != 0 && !empty($sale)) $percentage = ($price - $sale) / $price * 100;
				if (isset($percentage) && $percentage > $max_percentage) {
					$max_percentage = $percentage;
				}
			}
		}
		if (isset($max_percentage) && $max_percentage > 0) echo '<div class="products__product-badge sale">Sale -' . round($max_percentage) . '%</div>';
	} elseif ($now - $prod <= 604800) {
		echo '<div class="products__product-badge new">Fresh</div>';
	}
	echo '<div class="products__product-img">';
}, 9);

add_action('woocommerce_before_single_product_summary', function () {
	global $product;
	$prod = strtotime($product->get_date_modified());
	$now = time();
	if ($product->is_on_sale()) {
		if ($product->is_type('simple')) {
			$max_percentage = (($product->get_regular_price() - $product->get_sale_price()) / $product->get_regular_price()) * 100;
		} elseif ($product->is_type('variable')) {
			$max_percentage = 0;
			foreach ($product->get_children() as $child_id) {
				$variation = wc_get_product($child_id);
				$price = $variation->get_regular_price();
				$sale = $variation->get_sale_price();
				if ($price != 0 && !empty($sale)) $percentage = ($price - $sale) / $price * 100;
				if (isset($percentage) && $percentage > $max_percentage) {
					$max_percentage = $percentage;
				}
			}
		}
		if (isset($max_percentage) && $max_percentage > 0) echo '<div class="products__product-badge sale">Sale -' . round($max_percentage) . '%</div>';
	} elseif ($now - $prod <= 604800) {
		echo '<div class="products__product-badge new">Fresh</div>';
	}
}, 9);

add_action('woocommerce_before_shop_loop_item_title', function () {
	global $product;
	if (!empty($product->get_gallery_image_ids())) {
		echo wp_get_attachment_image($product->get_gallery_image_ids()[0], 'medium', false, array('class' => 'hover d-none'));
	}
	echo '</div>';
	$prod = strtotime($product->get_date_modified());
	$now = time();
	if ($product->is_on_sale()) {
		echo '<p class="text700 color-red text-upper mb-0">Wyprzedaż</p>';
	} elseif ($now - $prod <= 604800) {
		echo '<p class="text700 color-blue text-upper mb-0">Nowość</p>';
	}
}, 11);

remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);
add_action('woocommerce_single_product_summary', 'woocommerce_output_product_data_tabs', 60);

/**
 * WooCommerce, Add Long Description to Products on Shop Page
 *
 * @link https://wpbeaches.com/woocommerce-add-short-or-long-description-to-products-on-shop-page
 */
add_action('woocommerce_shop_loop_item_title', function () {
	global $product;
	echo '<p class="text-size-small mt-1">';
	if ($product->get_short_description()) {
		echo wp_trim_words(apply_filters('the_excerpt', $product->get_short_description()), apply_filters('excerpt_length', 16), '...');
	} elseif ($product->get_description()) {
		echo wp_trim_words(wp_trim_excerpt(), apply_filters('excerpt_length', 16), '...');
	}
	echo '</p>';
});

/**
 * Change the breadcrumb separator
 */
add_filter('woocommerce_breadcrumb_defaults', 'nbhd_change_breadcrumb_delimiter');
function nbhd_change_breadcrumb_delimiter($defaults)
{
	// Change the breadcrumb delimeter from '/' to '>'
	$defaults['delimiter'] = ' <hr/> ';
	return $defaults;
}

add_filter('woocommerce_get_image_size_gallery_thumbnail', function ($size) {
	return array(
		'width' => 640,
		'height' => 800,
		'crop' => 0,
	);
});

add_filter('woocommerce_after_add_to_cart_form', function () {
	echo '
		<p class="text-center text700">Zapłać wygodnie z:</p>
		<div class="d-flex justify-content-center align-items-center">
			<div style="width: 125px;" class="mb-4 mx-3">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 125 22">
					<path fill="#333" d="M9.648 2.83c-.619.746-1.609 1.332-2.599 1.248-.123-1.005.363-2.076.932-2.73C8.601.586 9.681.042 10.563 0c.1 1.038-.305 2.069-.915 2.83zm.899 1.441c-1.435-.084-2.665.83-3.341.83-.693 0-1.732-.788-2.87-.763-1.477.025-2.847.871-3.597 2.22-1.551 2.704-.405 6.699 1.097 8.902.734 1.088 1.608 2.286 2.763 2.244 1.097-.042 1.526-.72 2.846-.72 1.328 0 1.716.72 2.871.703 1.196-.025 1.947-1.089 2.681-2.177.833-1.24 1.18-2.437 1.196-2.504-.025-.025-2.31-.913-2.334-3.593-.025-2.244 1.806-3.308 1.889-3.375-1.031-1.558-2.64-1.725-3.201-1.767zm8.282-3.032v16.323h2.5v-5.578h3.456c3.16 0 5.37-2.203 5.37-5.385s-2.177-5.36-5.287-5.36h-6.039zm2.5 2.136h2.879c2.17 0 3.407 1.172 3.407 3.233 0 2.06-1.238 3.249-3.415 3.249h-2.871V3.375zm13.38 14.312c1.568 0 3.02-.804 3.68-2.085h.049v1.96h2.31V9.437c0-2.353-1.856-3.877-4.71-3.877-2.649 0-4.612 1.54-4.686 3.651h2.252c.19-1.005 1.105-1.667 2.36-1.667 1.525 0 2.383.72 2.383 2.052v.905l-3.118.192c-2.896.176-4.463 1.382-4.463 3.476.008 2.11 1.625 3.517 3.943 3.517zm.677-1.934c-1.329 0-2.178-.654-2.178-1.642 0-1.03.817-1.625 2.376-1.717l2.771-.175v.92c0 1.525-1.278 2.614-2.97 2.614zM43.84 22c2.434 0 3.58-.946 4.579-3.802L52.8 5.72h-2.54l-2.938 9.639h-.049l-2.937-9.64H41.73l4.224 11.884-.23.72c-.38 1.223-1 1.7-2.105 1.7-.198 0-.577-.024-.734-.041v1.96c.149.033.767.058.957.058zM81.54 7.499v3.521h4.613a4.383 4.383 0 01-.586 1.576 4.14 4.14 0 01-1.122 1.207c-.77.56-1.754.878-2.908.878-2.23 0-4.114-1.614-4.79-3.775a5.903 5.903 0 010-3.5c.676-2.174 2.56-3.788 4.79-3.788a4.342 4.342 0 011.767.34 4.54 4.54 0 011.505 1.033l2.447-2.614C85.715.83 83.665-.023 81.54 0a8.193 8.193 0 00-4.493 1.374 8.858 8.858 0 00-3.131 3.672A9.618 9.618 0 0073 9.152c0 1.425.314 2.83.916 4.105v.013a8.845 8.845 0 003.132 3.668 8.18 8.18 0 004.492 1.368c2.3 0 4.245-.813 5.655-2.212 1.616-1.588 2.537-3.94 2.537-6.736.001-.623-.046-1.244-.141-1.86h-8.05zm31.457-.342c-.818-.8-1.933-1.207-3.343-1.207-1.815 0-3.178.712-4.08 2.123l1.685 1.132c.616-.968 1.458-1.452 2.525-1.452a2.67 2.67 0 011.838.75c.245.226.442.504.577.817.135.313.205.652.205.996v.47c-.735-.432-1.66-.661-2.798-.661-1.328 0-2.395.331-3.19 1.005-.795.673-1.197 1.563-1.197 2.694a3.547 3.547 0 00.277 1.47c.195.461.485.87.849 1.2.747.711 1.696 1.067 2.81 1.067 1.316 0 2.36-.623 3.151-1.869h.081v1.513h1.826v-6.718c.006-1.413-.397-2.532-1.216-3.33zm-1.553 7.624c-.28.3-.614.54-.983.704a2.873 2.873 0 01-1.164.248c-.537.01-1.06-.179-1.48-.533a1.64 1.64 0 01-.464-.589 1.738 1.738 0 01-.164-.745c0-.598.26-1.094.771-1.488.51-.393 1.173-.597 1.944-.597 1.063-.014 1.895.242 2.488.75 0 .864-.32 1.614-.948 2.25zm-7.565-12.122a4.496 4.496 0 00-1.502-1.049 4.292 4.292 0 00-1.771-.343h-5.062v15.941h1.909v-6.457h3.15c1.292 0 2.383-.457 3.272-1.36l.214-.228a4.8 4.8 0 001.153-3.3 4.77 4.77 0 00-1.363-3.208v.004zm-1.34 5.312c-.24.271-.533.486-.858.628-.325.143-.675.21-1.027.198h-3.201V3.231h3.201a2.514 2.514 0 011.825.788 2.91 2.91 0 01.789 1.961c.011.738-.25 1.45-.729 1.988v.003zm20.086-1.667l-2.952 7.828h-.036l-3.023-7.828h-2.075l4.183 10.205L116.351 22h1.967L124.7 6.304h-2.075z" />
				</svg>
			</div>
			<div style="width: 84px;" class="mb-4 mx-3">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 20">
					<path fill="#333" d="M72.444 4.49A8.235 8.235 0 0069.603 4c-3.127 0-5.337 1.58-5.35 3.841-.026 1.662 1.566 2.599 2.77 3.159 1.236.573 1.65.93 1.643 1.439-.006.784-.988 1.134-1.891 1.134-1.256 0-1.938-.172-2.988-.612l-.39-.184-.445 2.612c.764.311 2.134.585 3.547.611 3.331 0 5.503-1.566 5.528-3.982.025-1.324-.827-2.33-2.643-3.158-1.096-.535-1.782-.9-1.782-1.447 0-.484.586-.993 1.809-.993.811-.02 1.618.13 2.369.44l.3.132.438-2.515-.074.013zm8.128-.273h-2.446c-.764 0-1.331.204-1.669.962l-4.7 10.655h3.324l.67-1.745 4.057.006c.101.407.387 1.737.387 1.737h2.936L80.572 4.217zM59.75 4.12h3.166l-1.98 11.622h-3.167L59.75 4.115v.006zm-8.05 6.4l.324 1.618 3.102-7.922h3.356l-4.994 11.597h-3.342l-2.74-9.82a.62.62 0 00-.299-.388c-.984-.512-2.027-.9-3.107-1.153l.038-.244h5.108c.688.026 1.248.244 1.44.982l1.114 5.337v-.006zm24.954 1.192l1.268-3.254c-.02.03.26-.67.42-1.11l.216 1 .734 3.356h-2.638v.008zM3.507 19.956v-1.328c0-.509-.32-.84-.87-.84-.276 0-.574.088-.78.376-.16-.244-.39-.376-.734-.376a.75.75 0 00-.642.31v-.266H0v2.124h.481v-1.173c0-.376.207-.553.528-.553.32 0 .481.2.481.553v1.173h.482v-1.173c0-.376.229-.553.527-.553.32 0 .481.2.481.553v1.173h.527zm7.13-2.124h-.78v-.642h-.481v.642H8.94v.42h.436v.974c0 .486.206.774.756.774.207 0 .436-.066.596-.155l-.137-.398a.775.775 0 01-.413.11c-.23 0-.32-.132-.32-.354v-.95h.778v-.421zm4.08-.044a.651.651 0 00-.573.31v-.266h-.482v2.124h.482V18.76c0-.354.16-.553.458-.553.092 0 .207.022.298.044l.138-.442c-.092-.022-.23-.022-.321-.022zm-6.167.22c-.229-.154-.55-.22-.894-.22-.55 0-.916.265-.916.685 0 .355.275.553.756.62l.23.022c.251.044.389.11.389.221 0 .155-.183.266-.504.266s-.574-.11-.734-.221l-.23.354c.253.176.597.265.94.265.642 0 1.01-.288 1.01-.686 0-.376-.299-.575-.757-.641l-.23-.023c-.206-.022-.366-.066-.366-.199 0-.154.16-.243.412-.243.276 0 .55.11.688.177l.206-.376zm12.792-.22a.651.651 0 00-.573.31v-.266h-.482v2.124h.482V18.76c0-.354.16-.553.458-.553.092 0 .206.022.298.044l.138-.442c-.092-.022-.23-.022-.321-.022zm-6.144 1.106c0 .641.459 1.106 1.17 1.106.32 0 .55-.066.779-.243l-.23-.377a.948.948 0 01-.573.2c-.39 0-.664-.266-.664-.686 0-.398.275-.664.664-.686.207 0 .39.066.573.2l.23-.377c-.23-.177-.459-.243-.78-.243-.71 0-1.169.464-1.169 1.106zm4.447 0v-1.062h-.481v.265c-.16-.199-.39-.31-.688-.31-.619 0-1.1.465-1.1 1.107 0 .641.481 1.106 1.1 1.106.321 0 .55-.11.688-.31v.266h.481v-1.062zm-1.765 0c0-.376.252-.686.665-.686.39 0 .665.288.665.686 0 .376-.275.686-.665.686-.413-.023-.665-.31-.665-.686zm-5.753-1.106c-.642 0-1.1.442-1.1 1.106 0 .664.458 1.106 1.122 1.106.321 0 .642-.089.894-.288l-.229-.331a1.12 1.12 0 01-.642.22c-.298 0-.596-.132-.665-.508h1.628v-.177c.023-.686-.39-1.128-1.009-1.128zm0 .398c.297 0 .504.177.55.509H11.53c.046-.288.253-.51.597-.51zm11.943.708V16.99h-.482v1.106c-.16-.199-.39-.31-.688-.31-.618 0-1.1.465-1.1 1.107 0 .641.482 1.106 1.1 1.106.321 0 .55-.11.688-.31v.266h.482v-1.062zm-1.766 0c0-.376.253-.686.665-.686.39 0 .665.288.665.686 0 .376-.275.686-.665.686-.413-.023-.665-.31-.665-.686zm-16.092 0v-1.062h-.481v.265c-.16-.199-.39-.31-.688-.31-.619 0-1.1.465-1.1 1.107 0 .641.481 1.106 1.1 1.106.321 0 .55-.11.688-.31v.266h.481v-1.062zm-1.788 0c0-.376.252-.686.665-.686.39 0 .665.288.665.686 0 .376-.275.686-.665.686-.413-.023-.665-.31-.665-.686zM11.42 13.536l.181.145a7.414 7.414 0 01-4.132 1.247A7.465 7.465 0 117.464 0c1.53 0 2.954.456 4.134 1.242a2.08 2.08 0 00-.166.154 8.023 8.023 0 00-2.78 6.068 8.05 8.05 0 002.77 6.072h-.001zM16.7 0a7.425 7.425 0 00-4.134 1.242c.06.052.118.103.166.154a8.022 8.022 0 012.78 6.068 8.06 8.06 0 01-2.77 6.072l-.18.145a7.406 7.406 0 004.132 1.247A7.465 7.465 0 1016.698 0zM12.08 1.6a7.442 7.442 0 00-2.85 5.865 7.444 7.444 0 002.85 5.868 4.94 4.94 0 00.284-.236 7.442 7.442 0 002.568-5.632A7.444 7.444 0 0012.08 1.6z" />
				</svg>
			</div>
			<div class="mb-4 mx-3" style="width: 75px;">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 25">
					<path fill="#333" d="M15.518 14.41l6.129-.012-.223 1.397-5.127 4.88h4.3l-.248 1.495h-6.326l.26-1.545 4.905-4.707h-3.917l.247-1.507zM8.834 12.026a1.627 1.627 0 00-.531-.333 4.358 4.358 0 00-.717-.198 8.4 8.4 0 00-.815-.086c-.198-.013-.322-.013-.322-.013H1.78L0 22.17h1.668l.655-3.99 3.237.012s1.26.05 2.15-.42c.89-.47 1.136-1.545 1.136-1.545s.1-.395.186-.89c.086-.53.185-1.173.222-1.52.025-.147.037-.246.037-.246s.025-.111.025-.284c0-.235-.037-.593-.222-.94-.087-.11-.161-.222-.26-.32zM7.55 13.93c0 .025-.148.89-.346 1.915-.074.396-.37.606-.716.68-.569.123-1.187.099-1.187.099l-2.705-.013.593-3.583 2.446.013h.395c.26 0 .606.012.902.049.247.037.445.086.507.16.086.1.111.235.123.359.013.16-.012.309-.012.321zM29.937 11.396h1.606L29.752 22.17h-1.607l1.792-10.774zM38.5 14.41l1.544-.012.543 5.474 2.36-5.474h1.903l.556 5.499 2.36-5.499h1.606l-3.398 7.772h-1.89l-.544-5.436-2.397 5.436H39.29l-.79-7.76zM26.984 14.473c-.445-.149-1.223-.173-1.89-.173-.643.012-.927.037-1.174.086 0 0-1.137.16-1.78.964-.642.803-.84 2.545-.84 2.545s-.382 1.928-.271 2.57c.111.643.309 1.236 1.038 1.52.729.284 1.346.272 1.346.272s1.298.098 2.274-.124a2.759 2.759 0 001.495-.914s.235-.297.395-.655c.16-.358.21-.593.222-.63l.1-.42H26.23s-.086 1.1-.988 1.198c-.902.1-1.372.062-1.557.05-.173-.013-1.136.037-1.062-.766v-.05c.037-.914.148-1.149.148-1.149l5.226-.012.223-1.297c.284-1.47.099-2.583-1.236-3.015zm-.358 2.83h-3.583l.136-.57s.123-.444.37-.63c.247-.185.569-.222.865-.246.297-.025 1.087-.087 1.742.049.21.037.42.16.47.346.136.408 0 1.05 0 1.05z" />
					<path fill="#333" d="M22.66 19.959v.037c-.013.061 0-.037 0-.037zM36.831 14.473c-.445-.149-1.223-.173-1.89-.173-.643.012-.927.037-1.174.086 0 0-1.137.16-1.78.964-.641.803-.84 2.545-.84 2.545s-.382 1.928-.271 2.57c.111.643.309 1.236 1.038 1.52.729.284 1.346.272 1.346.272s1.298.098 2.274-.124c.976-.235 1.495-.914 1.495-.914s.235-.297.395-.655c.16-.358.21-.593.223-.63l.099-.42h-1.668s-.087 1.1-.989 1.198c-.902.1-1.371.062-1.557.062-.173-.012-1.136.037-1.062-.766v-.05c.037-.914.148-1.148.148-1.148l5.226-.013.223-1.297c.284-1.47.111-2.595-1.236-3.027zm-.358 2.83H32.89l.136-.57s.123-.444.37-.63c.248-.185.569-.222.865-.246.297-.025 1.088-.087 1.742.049.21.037.42.16.47.346.136.408 0 1.05 0 1.05zM51.213 14.41l1.026 5.684 2.903-5.683 1.63.012-4.188 8.118s-.753 1.47-1.223 1.84c-.47.371-.753.544-1.136.581-.383.038-.544.062-.902 0l-.396-.074.247-1.445s.655.123 1.038-.037c.383-.149.692-.816.692-.816l.198-.333-1.52-7.87 1.631.024zM57.378 15.177h1.68l.1-.655s.185-1.186.58-1.409c.123-.074.334-.135.58-.185.446-.074 1.002-.086 1.459-.074.704.025.963.037 1.68.111.717.087.531.766.531.766l-.136 1.026s-.061.457-.222.741c-.148.26-.544.433-.779.507-.556.185-2.458.667-2.458.667l-1.495.432s-.915.272-1.433.828a3.394 3.394 0 00-.791 1.557c-.074.334-.47 2.669-.47 2.669h8.068l.272-1.607-6.375.013.111-.655s.074-.68.346-.902c.087-.074.123-.16.643-.346.308-.111 1.346-.383 1.346-.383l2.41-.655s1.31-.333 1.828-1.062c.519-.717.717-2.088.717-2.088s.136-1.335.037-1.755c-.111-.42-.507-.914-.976-1.136-.482-.21-.976-.347-2.434-.322-1.446.025-2.175.087-2.904.358-.741.272-1.161.767-1.433 1.458-.309.68-.482 2.1-.482 2.1zM72.563 18.18l1.137-6.772h-2.002l-6.24 6.697-.283 1.693h5.448l-.395 2.384h1.68l.396-2.384h1.544l.272-1.619h-1.557zm-1.656 0h-3.52l4.287-4.572-.767 4.571zM12.368 12.286h5.14s1.149-.927 1.964-1.532c.816-.593 2.31-1.545 2.31-1.545L18.88 7.85s-2.459 1.52-3.497 2.236c-1.013.668-3.014 2.2-3.014 2.2zM23.401 8.258l-2.384-1.606s2.15-1.224 5.028-2.373c2.867-1.136 4.399-1.618 4.399-1.618l.482 2.273s-2.756.927-4.337 1.668A29.324 29.324 0 0023.4 8.258zM32.692 4.44l-.42-2.323s2.94-.778 5.634-1.285C40.6.326 44.17.092 44.17.092l-1.186 3.594s-3.138-.432-6.09-.024c-2.287.272-4.202.778-4.202.778zM44.862 3.995l1.99-3.99s4.349-.087 8.105.494c3.756.58 7.19 1.47 7.116 1.507l-9.526 4.98s-2.224-1.41-4.991-2.274c-1.557-.457-2.694-.717-2.694-.717zM54.265 8.073l2.088 1.593H73.55s-.037-.556-.494-1.346c-.284-.495-.803-1.013-1.347-1.557-.197-.198-.988-.816-1.581-1.199-1.52-.988-2.372-1.371-3.941-2.075L54.265 8.073zM13.48 14.398c-.643 0-1.26.26-1.78.544l.087-.544h-1.705l-1.371 7.735h1.717l.754-4.287c.16-.865.803-1.94 2.075-1.94h.89l.272-1.508h-.94z" />
				</svg>
			</div>
		</div>
	';
});

remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
//remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);

add_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 10);
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 30);
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 40);

add_action('woocommerce_before_add_to_cart_quantity', 'nbhd_echo_qty_front_add_cart');
function nbhd_echo_qty_front_add_cart()
{
	echo '<label class="quantity"><strong>Ilość</strong></label>';
}

remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);

function woocommerce_add_custom_text_before_product_title()
{
	global $post;
	$terms = get_the_terms($post->ID, 'product_cat');
	$is_blaty = false;
	foreach ($terms as $term) {
		if (strtolower($term->name) === 'blaty') {
			$is_blaty = true;
		}
	}
	if ($is_blaty) {
		echo '<div class="w-100"><div style="color:rgb(245, 166, 35);" class="p-3 mb-4 text-center bg-black d-block w-100 text-size-xlarge font-bold text-bold text700">Do każdego decku grip gratis!</div></div>';
	}
	the_title('<h1 class="product_title entry-title">', '</h1>');
}
add_action('woocommerce_single_product_summary', 'woocommerce_add_custom_text_before_product_title', 5);

function custom_post_type_newsletter_users()
{

	// Set UI labels for Custom Post Type
	$labels = array(
		'name'                => _x('Newsletter Users', 'Post Type General Name', 'nbhd'),
		'singular_name'       => _x('Newsletter Users', 'Post Type Singular Name', 'nbhd'),
		'menu_name'           => __('Newsletter Users', 'nbhd'),
		'parent_item_colon'   => __('Parent Newsletter Users', 'nbhd'),
		'all_items'           => __('All Newsletter Users', 'nbhd'),
		'view_item'           => __('View Newsletter Users', 'nbhd'),
		'add_new_item'        => __('Add New Newsletter Users', 'nbhd'),
		'add_new'             => __('Add New', 'nbhd'),
		'edit_item'           => __('Edit Newsletter Users', 'nbhd'),
		'update_item'         => __('Update Newsletter Users', 'nbhd'),
		'search_items'        => __('Search Newsletter Users', 'nbhd'),
		'not_found'           => __('Not Found', 'nbhd'),
		'not_found_in_trash'  => __('Not found in Trash', 'nbhd'),
	);

	// Set other options for Custom Post Type
	$args = array(
		'label'               => __('newsletter-users', 'nbhd'),
		'description'         => __('Newsletter Users', 'nbhd'),
		'labels'              => $labels,
		// Features this CPT supports in Post Editor
		'supports'            => array('title', 'editor', 'custom-fields'),
		// You can associate this CPT with a taxonomy or custom taxonomy. 
		'taxonomies'          => array(),
		/* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */
		'hierarchical'        => false,
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => false,
		'menu_position'       => 20,
		'menu_icon'           => 'dashicons-groups',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'capability_type'     => 'post',
	);
	// Registering your Custom Post Type
	register_post_type('newsletter-users', $args);
}
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
add_action('init', 'custom_post_type_newsletter_users', 0);

function generateRandomString($length = 10)
{
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$charactersLength = strlen($characters);
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, $charactersLength - 1)];
	}
	return $randomString;
}

function generateCouponCode($email)
{
	$coupon_code = generateRandomString(10); // Code - perhaps generate this from the user ID + the order ID
	$amount = '10'; // Amount
	$discount_type = 'percent'; // Type: fixed_cart, percent, fixed_product, percent_product

	$coupon = array(
		'post_title' => $coupon_code,
		'post_content' => '',
		'post_status' => 'publish',
		'post_author' => 1,
		'post_type' => 'shop_coupon'
	);

	$new_coupon_id = wp_insert_post($coupon);

	// Add meta
	update_post_meta($new_coupon_id, 'discount_type', $discount_type);
	update_post_meta($new_coupon_id, 'coupon_amount', $amount);
	update_post_meta($new_coupon_id, 'customer_email', $email);
	update_post_meta($new_coupon_id, 'individual_use', 'yes');
	update_post_meta($new_coupon_id, 'product_ids', '');
	update_post_meta($new_coupon_id, 'exclude_sale_items', 'yes');
	//update_post_meta( $new_coupon_id, 'exclude_product_categories', array( 95, 91, 93, 969, 94, 97, 977, 96, 89, 88, 92, 1002, 441, 457, 1215, 1213, 449, 445, 455, 443, 451, 453, 447, 1217 ) );
	update_post_meta($new_coupon_id, 'exclude_product_ids', '');
	update_post_meta($new_coupon_id, 'usage_limit', '1');
	//update_post_meta( $new_coupon_id, 'expiry_date', date("Y-m-d", strtotime( date( "Y-m-d", strtotime( date("Y-m-d") ) ) . "+1 month" ) ) );
	update_post_meta($new_coupon_id, 'apply_before_tax', 'yes');
	update_post_meta($new_coupon_id, 'free_shipping', 'no');

	return $coupon_code;
}

function nbhd_newsletter_form_submit()
{

	if (!post_exists($_POST['newsletter-email'])) {
		$coupon_code = generateCouponCode($_POST['newsletter-email']);
		$newsletterArray = array(
			'post_type'     => 'newsletter-users',
			'post_status'   => 'private',
			'post_title'    => $_POST['newsletter-email'],
			'post_content'  => $coupon_code
		);
		wp_insert_post($newsletterArray, true);

		function wpdocs_set_html_mail_content_type()
		{
			return 'text/html';
		}
		add_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

		$headers = array('Content-Type: text/html; charset=UTF-8');
		$to = $_POST['newsletter-email'];
		$subject = 'Kod rabatowy -10% | Neighbourhood Skateshop';
		$body = newsTemplate($coupon_code);
		$email = wp_mail($to, $subject, $body, $headers);

		remove_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

		if ($email) {
			$redirect = '/?code=' . $coupon_code;
		}
	} else {
		$redirect = '/?already=exist';
	}

	header("Location: $redirect");
}
add_action('admin_post_nopriv_newsletter_form', 'nbhd_newsletter_form_submit');
add_action('admin_post_newsletter_form', 'nbhd_newsletter_form_submit');

function newsTemplate($coupon_code)
{
	$body = '
		<html>
			<head>
				<style type="text/css" media="screen">
					* {
						font-family: Helvetica!important;
						font-size: 10pt;
					}
					td, tr, th, table {
						padding: 0px;
						margin: 0px;
					}
					p {
						margin: 10px 0;
					}
				</style>
			</head>
			<body>
				<table style="max-width: 100%; width: 100%; margin: 15px;" cellspacing="0" cellpadding="0" border="0">
					<tbody>
						<tr>
							<td>
								<h1 style="font-size: 20px!important; font-weight: 400!important;">
									Siema! <br/><br/>Twój kod rabatowy to: <strong style="font-weight: 700!important;">' . $coupon_code . '</strong><br/><br/>
								</h1>
							</td>
						</tr>
					</tbody>
				</table>
				<hr/>
				<table style="max-width: 320px; width: 100%; margin: 0 15px;" cellspacing="0" cellpadding="0" border="0">
					<tbody>
						<tr>
							<td>
								<span style="font-size: 16px!important;">Pozdro, zespół Neighbourhood Skateshop</span>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</html>
	';
	return $body;
}

add_filter('woocommerce_add_to_cart_fragments', 'nbhd_refresh_mini_cart_count');
function nbhd_refresh_mini_cart_count($fragments)
{
	ob_start();
	$items_count = WC()->cart->get_cart_contents_count();
	echo '<span class="navigation__lower-utils-cart-count ' . ($items_count ? null : "d-none") . '" id="mini-cart-count">' . ($items_count ? $items_count : null) . '</span>';
	$fragments['#mini-cart-count'] = ob_get_clean();
	return $fragments;
}

add_action('woocommerce_product_query', 'nbhd_onsale_product_query');
function nbhd_onsale_product_query($q)
{
	if (isset($_GET['on_sale']) && $_GET['on_sale'] === 'true') {
		$product_ids_on_sale = wc_get_product_ids_on_sale();
		$q->set('post__in', $product_ids_on_sale);
	}
}

if (function_exists('acf_add_options_page')) {

	acf_add_options_page(array(
		'page_title'    => __('Opcje strony'),
		'menu_title'    => __('Opcje strony'),
		'menu_slug'     => 'theme-general-settings',
		'capability'    => 'edit_posts',
		'redirect'      => true
	));

	// acf_add_options_sub_page(array(
	// 	'page_title' 	=> 'Promo',
	// 	'menu_title'	=> 'Promo',
	// 	'parent_slug'	=> 'theme-general-settings',
	// ));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Menu',
		'menu_title'	=> 'Menu',
		'parent_slug'	=> 'theme-general-settings',
	));
}

if (isset($_GET['on_sale']) && $_GET['on_sale'] && $_GET['on_sale'] === true) {
	add_action('woocommerce_product_query', 'nbhd_on_sale_product_query');

	function nbhd_on_sale_product_query($q)
	{

		$product_ids_on_sale = wc_get_product_ids_on_sale();

		$q->set('post__in', $product_ids_on_sale);
	}
}
