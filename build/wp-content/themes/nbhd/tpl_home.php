<?php

/**
 * Template Name: Homepage
 */

get_header();

if (get_field('slides')) {
	get_template_part('template-parts/content', 'slider');
} ?>

<?php if (have_rows('sections')) : ?>
	<?php while (have_rows('sections')) : the_row(); ?>
		<?php if (get_row_layout() == 'promo_with_cards') : ?>
			<?php get_template_part('flexparts/promo'); ?>
		<?php elseif (get_row_layout() == 'cards_with_icons') : ?>
			<?php get_template_part('flexparts/icons'); ?>
		<?php elseif (get_row_layout() == 'products') : ?>
			<?php get_template_part('flexparts/products'); ?>
		<?php elseif (get_row_layout() == 'image_and_text') : ?>
			<?php get_template_part('flexparts/image-text'); ?>
		<?php endif; ?>
	<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();
