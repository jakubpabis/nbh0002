<section class="img-aside py-5 bg-grey2">
	<div class="container-xl py-5">
		<div class="row justify-content-between">
			<?php if (get_sub_field('image_position') === 'left') : ?>
				<div class="col-lg-7">
					<img data-src="<?php echo get_sub_field('image')['sizes']['medium_large']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="bg-cover lazy">
				</div>
			<?php endif; ?>
			<div class="col-xl-4 col-lg-5 d-flex flex-wrap align-content-between">
				<?php if (get_sub_field('sub_title')) : ?>
					<span class="text-upper text-spacing d-block text500">
						<?php echo get_sub_field('sub_title'); ?>
					</span>
				<?php endif; ?>
				<?php if (get_sub_field('title')) : ?>
					<span class="h1 text700">
						<?php echo get_sub_field('title'); ?>
					</span>
				<?php endif; ?>
				<?php if (get_sub_field('text')) : ?>
					<?php echo get_sub_field('text'); ?>
				<?php endif; ?>
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default black">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
			<?php if (get_sub_field('image_position') === 'right') : ?>
				<div class="col-lg-7">
					<img data-src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="bg-cover lazy">
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>