<?php

/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

if (isset($_GET['on_sale']) && $_GET['on_sale'] === 'true') {
	$sale = true;
} else {
	$sale = false;
}

get_header(); ?>
<?php
$class = false;

if (is_product_category()) {
	global $wp_query;
	$cat = $wp_query->get_queried_object();
	//var_dump(get_term_meta(get_term(get_term($cat)->parent)->parent, 'thumbnail_id', true));
	$thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
	if ($thumbnail_id) {
		$image_url = wp_get_attachment_url($thumbnail_id);
		if ($image_url) {
			$class = 'with_header_img';
		}
	} elseif (get_term_meta($cat->parent, 'thumbnail_id', true)) {
		$image_url = wp_get_attachment_url(get_term_meta($cat->parent, 'thumbnail_id', true));
		if ($image_url) {
			$class = 'with_header_img';
		}
	} else {
		$class = 'with_header_img';
	}
} elseif (isset($cat) && $cat && get_term($cat) && get_term($cat)->parent && get_term(get_term($cat)->parent)->parent && get_term_meta(get_term(get_term($cat)->parent)->parent, 'thumbnail_id', true)) {
	$thumbid = get_term(get_term($cat)->parent)->parent;
	$image_url = wp_get_attachment_url($thumbid, 'thumbnail_id', true);
	if ($image_url) {
		$class = 'with_header_img';
	}
} elseif ($sale) {
	$class = 'with_header_img';
} elseif (is_shop() || is_tag() || is_tax() || is_category() || is_product_tag() || is_product_taxonomy()) {
	$class = 'with_header_img';
}
?>
<section class="bg-grey general-template-section nbhd-products-archive <?php echo $class; ?>">
	<div class="container-fluid">
		<?php /**
		 * Hook: woocommerce_before_main_content.
		 *
		 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
		 * @hooked woocommerce_breadcrumb - 20
		 * @hooked WC_Structured_Data::generate_website_data() - 30
		 */
		do_action('woocommerce_before_main_content');

		?>
		<header class="woocommerce-products-header <?php echo $class; ?>">
			<?php if ($sale) : ?>
				<img class="lazy bg-cover" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/nbhd_sale.jpg" alt="Wyprzedaż w Neighbourhood Skateshop">
				<?php /* elseif ($class && isset($image_url) && $image_url) : ?>
				<img class="lazy bg-cover" data-src="<?php echo $image_url; ?>" alt="<?php echo get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true); ?>"> */ ?>
			<?php else : ?>
				<img class="lazy bg-cover" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/shop-header-top-banner.jpg" alt="Neighbourhood Skateshop - Strona sklepu - header">
			<?php endif; ?>
			<?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
				<h1 class="woocommerce-products-header__title page-title <?php echo $class; ?> <?php echo $sale ? 'color-red' : null; ?>">
					<?php if ($sale) {
						echo 'Wyprzedaż';
					} else {
						woocommerce_page_title();
					}  ?>
				</h1>
			<?php endif; ?>

			<?php
			/**
			 * Hook: woocommerce_archive_description.
			 *
			 * @hooked woocommerce_taxonomy_archive_description - 10
			 * @hooked woocommerce_product_archive_description - 10
			 */
			do_action('woocommerce_archive_description');
			?>
		</header>
		<?php
		if (woocommerce_product_loop()) {

			/**
			 * Hook: woocommerce_before_shop_loop.
			 *
			 * @hooked woocommerce_output_all_notices - 10
			 * @hooked woocommerce_result_count - 20
			 * @hooked woocommerce_catalog_ordering - 30
			 */ ?>
			<aside class="nbhd-products-archive-filtering d-flex align-items-center justify-content-between flex-wrap">
				<?php do_action('woocommerce_before_shop_loop'); ?>
			</aside>

			<div class="products__container">
				<div class="container-fluid px-0">
					<div class="row">
						<div class="col-xl-3 col-lg-4 pb-4 mb-3">
							<aside class="nbhd-products-archive-filters bg-white" role="complementary">
								<h4 class="mt-0 mb-2 text700 d-block w-100 py-3 px-4 color-white bg-black text-upper nbhd-products-archive-filters-title">
									<i class="fas fa-sort-size-down-alt mr-3"></i> Filtrowanie
								</h4>
								<div class="px-4 pt-4 pb-1 d-lg-block d-none">
									<?php dynamic_sidebar('sidebar-1'); ?>
									<?php echo do_shortcode("[yith_wcan_filters slug='default-preset']"); ?>
									<?php /*
									$queried = $wp_query->get_queried_object();
									$all_ids = get_posts(array(
										'post_type' => 'product',
										'numberposts' => -1,
										'post_status' => 'publish',
										'fields' => 'ids',
										'tax_query' => array(
											array(
												'taxonomy' => $queried->taxonomy,
												'field' => 'slug',
												'terms' => $queried->slug,
												'operator' => 'IN',
											)
										),
									));
									$atts = [];
									foreach ($all_ids as $id) {
										$attributes = wc_get_product($id)->get_attributes();
										foreach ($attributes as $attribute) {
											$attName = $attribute->get_name();
											$attOptions = $attribute->get_options();
											if (!array_key_exists($attName, $atts)) {
												$atts[$attName] = [];
											}
											foreach ($attOptions as $attOption) {
												if (!array_key_exists($attOption, $atts[$attName])) {
													$atts[$attName][$attOption]['qty'] = 1;
												} else {
													$atts[$attName][$attOption]['qty']++;
												}
												$atts[$attName][$attOption]['slug'] = get_term($attOption)->slug;
												$atts[$attName][$attOption]['name'] = get_term($attOption)->name;
											}
										}
									}
									foreach ($atts as $key => $att) {
										$newKey = ucfirst(str_replace('pa_', '', $key));
										$atts[$newKey] = $atts[$key];
										unset($atts[$key]);
									}
									//print_r($atts);
									?>
									<?php foreach ($atts as $keyItem => $atItem) : ?>
										<section class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
											<h3 class="widget-title"><?php echo $keyItem; ?></h3>
											<ul class="woocommerce-widget-layered-nav-list">
												<?php foreach ($atItem as $item) : ?>
													<li class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term "><a rel="nofollow" href="?filter_rozmiar=9-25&amp;query_type_rozmiar=or"><?php echo $item['name']; ?></a> <small class="count">(<?php echo $item['qty']; ?>)</small></li>
												<?php endforeach; ?>
											</ul>
										</section>
									<?php endforeach; */ ?>

								</div>
							</aside>
						</div>

						<div class="col-xl-9 col-lg-8 products__container-items">
							<?php global $wp_query;
							$cat = $wp_query->get_queried_object();
							if (strtolower($cat->name) === 'blaty') : ?>
								<div class="w-100">
									<div style="color:rgb(245, 166, 35);" class="p-3 mb-4 text-center bg-black d-block w-100 text-size-xlarge font-bold text-bold text700">Do każdego decku grip gratis!</div>
								</div>
							<?php endif; ?>
							<?php woocommerce_product_loop_start();

							if (wc_get_loop_prop('total')) {
								while (have_posts()) {
									the_post();

									/**
									 * Hook: woocommerce_shop_loop.
									 */
									do_action('woocommerce_shop_loop');

									wc_get_template_part('content', 'product');
								}
							}

							woocommerce_product_loop_end(); ?>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid px-0">
				<div class="row">
					<div class="offset-xl-3 offset-lg-4 col-xl-9 col-lg-8">


						<?php /**
						 * Hook: woocommerce_after_shop_loop.
						 *
						 * @hooked woocommerce_pagination - 10
						 */
						do_action('woocommerce_after_shop_loop'); ?>
					</div>
				</div>
			</div>
		<?php } else {
			/**
			 * Hook: woocommerce_no_products_found.
			 *
			 * @hooked wc_no_products_found - 10
			 */
			//do_action('woocommerce_no_products_found');
		?>
			<div class="container">
				<div class="row">
					<div class="col-12 text-center py-5">
						<h1 class="text-center d-block">
							Niestety, nie mamy produktów w tej kategorii...
						</h1>
					</div>
				</div>
			</div>
		<?php
		}

		/**
		 * Hook: woocommerce_after_main_content.
		 *
		 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
		 */
		do_action('woocommerce_after_main_content');

		/**
		 * Hook: woocommerce_sidebar.
		 *
		 * @hooked woocommerce_get_sidebar - 10
		 */
		//do_action('woocommerce_sidebar'); 
		?>
	</div>
</section>
<?php get_footer();
