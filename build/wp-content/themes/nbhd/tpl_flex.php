<?php

/**
 * Template Name: Flex
 */

get_header(); ?>

<?php if (have_rows('sections')) : ?>
	<?php while (have_rows('sections')) : the_row(); ?>
		<?php if (get_row_layout() == 'header') : ?>
			<?php get_template_part('flexparts/header'); ?>
		<?php elseif (get_row_layout() == 'promo_with_cards') : ?>
			<?php get_template_part('flexparts/promo'); ?>
		<?php elseif (get_row_layout() == 'cards_with_icons') : ?>
			<?php get_template_part('flexparts/icons'); ?>
		<?php elseif (get_row_layout() == 'products') : ?>
			<?php get_template_part('flexparts/products'); ?>
		<?php elseif (get_row_layout() == 'image_and_text') : ?>
			<?php get_template_part('flexparts/image-text'); ?>
		<?php elseif (get_row_layout() == 'slider') : ?>
			<?php get_template_part('flexparts/slider'); ?>
		<?php elseif (get_row_layout() == 'team') : ?>
			<?php get_template_part('flexparts/team'); ?>
		<?php elseif (get_row_layout() == 'marki') : ?>
			<?php get_template_part('flexparts/marki'); ?>
		<?php endif; ?>
	<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();
