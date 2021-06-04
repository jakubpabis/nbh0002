<header id="home_carousel" class="header d-flex justify-content-center align-items-center swiper-container">
	<?php if (have_rows('slides')) : ?>
		<div class="swiper-wrapper">
			<?php while (have_rows('slides')) : the_row(); ?>
				<div class="swiper-slide d-flex align-items-center justify-content-center">
					<?php if (get_sub_field('video')) : ?>
						<div class="embed-container full">
							<iframe class="lazy" data-src="<?= get_sub_field('video'); ?>?controls=0&autoplay=1&mute=1&rel=0&loop=1&showinfo=0" allow="autoplay; encrypted-media;" frameborder="0" allowfullscreen></iframe>
						</div>
					<?php else :
						$mobileS = get_sub_field('image')['sizes']['medium'];
						$mobileL = get_sub_field('image')['sizes']['medium_large'];
						$tablet = get_sub_field('image')['sizes']['large'];
					?>
						<picture class="bg-cover h-100 bg-cover-abs">
							<source class="lazyset h-100 bg-cover-abs" media="(max-width: 400px)" data-srcset="<?= esc_url($mobileS); ?>">
							<source class="lazyset h-100 bg-cover-abs" media="(max-width: 720px)" data-srcset="<?= esc_url($mobileL); ?>">
							<source class="lazyset h-100 bg-cover-abs" media="(max-width: 1200px)" data-srcset="<?= esc_url($tablet); ?>">
							<source class="lazyset h-100 bg-cover-abs" data-srcset="<?= get_sub_field('image')['url']; ?>">
							<img class="h-100 bg-cover-abs lazy" data-src="<?= get_sub_field('image')['url']; ?>" alt="<?= get_sub_field('image')['title']; ?>">
						</picture>
					<?php endif; ?>
					<div class="over-50"></div>

					<?php if (get_sub_field('title') || get_sub_field('text') || get_sub_field('button')) : ?>
						<div class="position-relative text-center">
							<?php if (get_sub_field('title')) : ?>
								<span class="h1 text-white text700 d-block mt-5 mb-4">
									<?= get_sub_field('title'); ?>
								</span>
							<?php endif; ?>
							<?php if (get_sub_field('text')) :
								get_sub_field('text');
							endif; ?>
							<?php if (get_sub_field('button')) : ?>
								<a href="<?= get_sub_field('button')['url']; ?>" class="btn btn__default white">
									<?= get_sub_field('button')['title']; ?>
								</a>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>
			<?php endwhile; ?>
		</div>
		<!-- If we need pagination -->
		<div class="swiper-pagination"></div>

		<!-- If we need navigation buttons -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	<?php endif; ?>
</header>