<section class="bg-grey general-template-section nbhd-products-archive with_header_img">
	<div class="nbhd-products-archive with_header_img">
		<div class="container-fluid">
			<?php woocommerce_breadcrumb(); ?>
			<header class="woocommerce-products-header with_header_img <?php echo get_sub_field('height'); ?>">
				<img class="lazy bg-cover m-0" alt="<?php echo get_sub_field('image')['title']; ?>" data-src="<?php echo get_sub_field('image')['url']; ?>" width="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['width']; ?>" height="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['height']; ?>">
				<h1 class="woocommerce-products-header__title page-title with_header_img">
					<?php echo get_sub_field('title'); ?>
				</h1>
			</header>
		</div>
	</div>
</section>