<section class="bestsellers py-5 bg-grey">
	<div class="container-xl pt-5">
		<?php if (get_sub_field('title') || get_sub_field('link')) : ?>
			<div class="row align-content-center justify-content-between pb-4 mb-2">
				<?php if (get_sub_field('title')) : ?>
					<div class="col-auto">
						<span class="h2 text700">
							<?php echo get_sub_field('title'); ?>
						</span>
					</div>
				<?php endif; ?>
				<?php if (get_sub_field('link')) : ?>
					<div class="col-auto">
						<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__medium black">
							<?php echo get_sub_field('link')['title']; ?>
						</a>
					</div>
			</div>
		<?php endif; ?>
	<?php endif; ?>
	<?php
	$columns = get_sub_field('products_row');
	$number = get_sub_field('products_number');
	$type = get_sub_field('products_type');
	$order = get_sub_field('products_orderby');
	if ($type === 'featured') {
		$type = 'visibility="featured"';
	} else {
		$type = $type . '="true"';
	}
	?>
	<?php echo do_shortcode('[products limit="' . $number . '" columns="' . $columns . '" ' . $type . ' orderby="' . $order . '"]'); ?>
	</div>
</section>