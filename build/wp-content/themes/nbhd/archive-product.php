<?php

/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>
<?php
$class = null;
if (is_product_category()) {
	global $wp_query;
	$cat = $wp_query->get_queried_object();
	$thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
	if ($thumbnail_id) {
		$image_url = wp_get_attachment_url($thumbnail_id);
		if ($image_url) {
			$class = 'with_header_img';
		}
	}
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
			<?php if ($class) : ?>
				<img class="lazy bg-cover" data-src="<?php echo $image_url; ?>" alt="<?php echo get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true); ?>">
			<?php endif; ?>
			<?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
				<h1 class="woocommerce-products-header__title page-title <?php echo $class; ?>">
					<?php woocommerce_page_title(); ?>
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
				<div class="container-xl">
					<div class="row">
						<div class="col-12 px-0">
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
		<?php /**
			 * Hook: woocommerce_after_shop_loop.
			 *
			 * @hooked woocommerce_pagination - 10
			 */
			do_action('woocommerce_after_shop_loop');
		} else {
			/**
			 * Hook: woocommerce_no_products_found.
			 *
			 * @hooked wc_no_products_found - 10
			 */
			do_action('woocommerce_no_products_found');
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
