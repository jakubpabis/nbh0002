<section class="header <?php echo get_sub_field('slider_height'); ?> d-flex justify-content-center align-items-center swiper-container">
	<?php if (have_rows('slides')) : ?>
		<div class="swiper-wrapper">
			<?php while (have_rows('slides')) : the_row(); ?>
				<div class="swiper-slide d-flex align-items-end justify-content-start">
					<div class="picture-cont d-flex align-items-end justify-content-start">
						<div class="pic">
							<?php if (get_sub_field('video')) : ?>
								<div class="embed-container full">
									<iframe class="lazy" data-src="<?php echo get_sub_field('video'); ?>?controls=0&autoplay=1&mute=1&rel=0&loop=1&showinfo=0" allow="autoplay; encrypted-media;" frameborder="0" allowfullscreen></iframe>
								</div>
							<?php else :
								$mobileS = get_sub_field('image')['sizes']['medium'];
								$mobileL = get_sub_field('image')['sizes']['medium_large'];
								$tablet = get_sub_field('image')['sizes']['large'];
							?>
								<picture class="bg-cover h-100 bg-cover-abs">
									<source class="lazyset h-100 bg-cover-abs" media="(max-width: 400px)" data-srcset="<?php echo esc_url($mobileS); ?>">
									<source class="lazyset h-100 bg-cover-abs" media="(max-width: 720px)" data-srcset="<?php echo esc_url($mobileL); ?>">
									<source class="lazyset h-100 bg-cover-abs" media="(max-width: 1200px)" data-srcset="<?php echo esc_url($tablet); ?>">
									<source class="lazyset h-100 bg-cover-abs" data-srcset="<?php echo get_sub_field('image')['url']; ?>">
									<img class="h-100 bg-cover-abs lazy" data-src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" width="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['width']; ?>" height="<?php echo wp_get_attachment_metadata(get_sub_field('image')['id'])['height']; ?>">
								</picture>
							<?php endif; ?>
						</div>


						<?php if (get_sub_field('title') || get_sub_field('text') || get_sub_field('button')) : ?>
							<div class="position-relative header-text-container">
								<?php if (get_sub_field('title')) : ?>
									<span class="text-size-xxxxlarge text-white text700 d-block mt-0 mb-2">
										<?php echo get_sub_field('title'); ?>
									</span>
								<?php endif; ?>
								<?php if (get_sub_field('text')) :
									get_sub_field('text');
								endif; ?>
								<?php if (get_sub_field('link')) : ?>
									<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__medium white full">
										<?php echo get_sub_field('link')['title']; ?>
									</a>
								<?php endif; ?>
							</div>
						<?php endif; ?>

					</div>
				</div>
			<?php endwhile; ?>
		</div>
		<!-- If we need pagination -->
		<div class="swiper-pagination"></div>

		<!-- If we need navigation buttons -->
		<div class="swiper-button-prev"><i class="fal fa-chevron-left fa-3x"></i></div>
		<div class="swiper-button-next"><i class="fal fa-chevron-right fa-3x"></i></div>
	<?php endif; ?>
</section>