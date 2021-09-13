<?php if (have_rows('cards')) : ?>
	<section class="cards my-4 py-3">
		<div class="container-xl">
			<div class="row justify-content-center">
				<?php while (have_rows('cards')) : the_row(); ?>
					<div class="col-md-4 col-sm-8 mb-md-0 mb-4">
						<div class="cards__card bg-grey d-flex justify-content-center align-items-center py-lg-5 py-4 flex-wrap text-center">
							<?php if (get_sub_field('icon')) : ?>
								<img src="<?php echo get_sub_field('icon')['url']; ?>" alt="<?php echo get_sub_field('icon')['title']; ?>" class="w-25 mb-4">
							<?php endif; ?>
							<?php if (get_sub_field('title')) : ?>
								<span class="color-grey9 h4 text700 w-100 pt-2">
									<?php echo get_sub_field('title'); ?>
								</span>
							<?php endif; ?>
							<?php if (get_sub_field('text')) : ?>
								<p class="color-grey7 d-block m-0">
									<?php echo get_sub_field('text'); ?>
								</p>
							<?php endif; ?>
						</div>
					</div>
				<?php endwhile; ?>
			</div>
		</div>
	</section>
<?php endif; ?>