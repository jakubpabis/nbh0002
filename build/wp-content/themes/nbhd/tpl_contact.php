<?php

/**
 * Template Name: Kontakt
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

<section class="cards contact py-5">
	<div class="container">
		<div class="row cards__item">
			<div class="col-md-5 col-sm-10 col-12 cards__item-text contact__text">
				<h2 class="mb-4">
					<strong>
						Chcesz przyjechać?
					</strong>
				</h2>
				<p class="mb-4">
					<strong class="text-bold">NBHD Skate</strong><br />
					Dolna 2A<br />
					32-540 Trzebinia<br />
					<br />
					<a href="tel:+48735970079" class="text-bold">+48 735 970 079</a><br />
					<a href="tel:+48505485958" class="text-bold">+48 505 485 958</a><br />
					<br />
					<a href="mailto:info@nbhdskate.pl" class="text-bold">info@nbhdskate.pl</a><br />
				</p>
				<a class="mr-3 fa-2x" href="https://www.facebook.com/Neighbourhood-Skateshop-436289680462922/" target="_blank"><i class="fab fa-facebook-f"></i></a>
				<a class="mr-3 fa-2x" href="https://www.instagram.com/nbhdskate.pl/" target="_blank"><i class="fab fa-instagram"></i></a>
				<a class="mr-3 fa-2x" href="https://www.youtube.com/channel/UCQAnw7wS8peE9UFIjT3EF2Q" target="_blank"><i class="fab fa-youtube"></i></a>
			</div>
			<div class="col-md-7 col-sm-10 col-12 contact__form">
				<h3 class="mb-4 pb-2">
					<strong>Jakieś pytania?</strong>
				</h3>
				<?php the_content(); ?>
			</div>
		</div>
	</div>
</section>


<?php get_footer();
