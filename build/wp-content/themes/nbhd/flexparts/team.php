<?php if (have_rows('people')) : ?>
	<?php $i = 1;
	while (have_rows('people')) : the_row(); ?>
		<section class="img-aside py-5 bg-grey2">
			<div class="container-xl py-5">
				<div class="row justify-content-between">
					<?php if ($i % 2 !== 0) : ?>
						<div class="col-lg-7">
							<img data-src="<?php echo esc_url(get_sub_field('img')['sizes']['medium']); ?>" alt="<?php echo get_sub_field('img')['title']; ?>" class="bg-cover lazy">
						</div>
					<?php endif; ?>
					<div class="col-xl-4 col-lg-5 d-flex flex-wrap align-content-start">

						<?php if (get_sub_field('fb') || get_sub_field('insta')) : ?>
							<span class="text-upper d-flex text500 w-100 align-items-end mb-4 pb-2">
								<strong class="mr-2">Social Media</strong>
								<?php if (get_sub_field('fb')) : ?>
									<a href="<?php echo get_sub_field('fb'); ?>" target="_blank" class="ml-2">
										<i data-feather="facebook" class="text-center" style="width: 24px; height: 24px; color: #1877f2;"></i>
									</a>
								<?php endif; ?>
								<?php if (get_sub_field('insta')) : ?>
									<a href="<?php echo get_sub_field('insta'); ?>" target="_blank" class="ml-2">
										<i data-feather="instagram" class="text-center" style="width: 24px; height: 24px; color: #c32aa3;"></i>
									</a>
								<?php endif; ?>
							</span>
						<?php endif; ?>

						<?php if (get_sub_field('name')) : ?>
							<span class="h1 text700 mb-4 pb-2">
								<?php echo get_sub_field('name'); ?>
							</span>
						<?php endif; ?>

						<?php if (get_sub_field('bio')) : ?>
							<div class="bio d-block w-100">
								<?php echo get_sub_field('bio'); ?>
							</div>
						<?php endif; ?>
					</div>
					<?php if ($i % 2 === 0) : ?>
						<div class="col-lg-7">
							<img data-src="<?php echo esc_url(get_sub_field('img')['sizes']['medium']); ?>" alt="<?php echo get_sub_field('img')['title']; ?>" class="bg-cover lazy">
						</div>
					<?php endif; ?>
				</div>
			</div>
		</section>
	<?php $i++;
	endwhile; ?>
<?php endif; ?>