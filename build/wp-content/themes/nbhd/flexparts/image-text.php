<section class="img-aside py-xl-5 py-4 bg-grey2">
	<div class="container-xl py-lg-5 py-4">
		<div class="row justify-content-between">
			<?php if (get_sub_field('image_position') === 'left') : ?>
				<div class="col-md-7">
					<img data-src="<?php echo get_sub_field('image')['sizes']['medium_large']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" width="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['width']; ?>" height="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['height']; ?>" class="bg-cover lazy">
				</div>
			<?php endif; ?>
			<div class="col-xl-4 col-md-5 d-flex flex-wrap align-content-between pt-md-0 pt-4">
				<?php if (get_sub_field('sub_title')) : ?>
					<span class="text-upper text-spacing d-block text500 w-100">
						<?php echo get_sub_field('sub_title'); ?>
					</span>
				<?php endif; ?>
				<?php if (get_sub_field('title')) : ?>
					<span class="h1 text700 d-block w-100">
						<?php echo get_sub_field('title'); ?>
					</span>
				<?php endif; ?>
				<?php if (get_sub_field('text')) : ?>
					<div class="w-100 d-block">
						<?php echo get_sub_field('text'); ?>
					</div>
				<?php endif; ?>
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo esc_url(get_sub_field('link')['url']); ?>" <?php echo get_sub_field('link')['target'] ? 'target="' . get_sub_field('link')['target'] . '"' : null; ?> class="btn btn__default black">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
			<?php if (get_sub_field('image_position') === 'right') : ?>
				<div class="col-md-7">
					<img data-src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" width="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['width']; ?>" height="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['height']; ?>" class="bg-cover lazy">
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>