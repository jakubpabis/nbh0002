<section class="bg-grey general-template-section nbhd-products-archive with_header_img">
	<div class="nbhd-products-archive with_header_img">
		<div class="container-fluid">
			<?php woocommerce_breadcrumb(); ?>
			<header class="woocommerce-products-header with_header_img <?php echo get_sub_field('height'); ?>">
				<img class="lazy bg-cover loaded m-0" alt="<?php echo get_sub_field('image')['title']; ?>" src="<?php echo get_sub_field('image')['url']; ?>">
				<h1 class="woocommerce-products-header__title page-title with_header_img">
					<?php echo get_sub_field('title'); ?>
				</h1>
			</header>
		</div>
	</div>
</section>