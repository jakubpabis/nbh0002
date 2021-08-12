<?php

/**
 * Template Name: Team
 */

get_header(); ?>


<section class="bg-grey general-template-section nbhd-products-archive with_header_img">
	<div class="nbhd-products-archive with_header_img">
		<div class="container-fluid">
			<?php woocommerce_breadcrumb(); ?>

			<header class="woocommerce-products-header with_header_img">
				<img class="lazy bg-cover loaded m-0" alt="" src="https://nbh0002.test/wp-content/uploads/2020/11/photo-1573871247695-8bc38c8eaab4.jpg">
				<h1 class="woocommerce-products-header__title page-title with_header_img ">
					<?php echo get_field('team-title'); ?>
				</h1>

			</header>
		</div>
	</div>
</section>

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
					<div class="col-xl-4 col-lg-5 d-flex flex-wrap align-content-between">

						<span class="text-upper text-spacing d-block text500">
							Lorem ipsum
						</span>

						<?php if (get_sub_field('name')) : ?>
							<span class="h1 text700">
								<?php echo get_sub_field('name'); ?>
							</span>
						<?php endif; ?>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sint laudantium quam possimus sed facilis deserunt suscipit odio, architecto tenetur dolores labore, earum quaerat enim eaque hic quis totam sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam eveniet numquam nesciunt facilis dolore mollitia debitis dolorum cum vero ducimus, delectus, quibusdam cumque molestiae aliquam doloribus autem, pariatur voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima corporis, voluptate iusto id praesentium rem necessitatibus quibusdam! Consequuntur sit ut sapiente asperiores, excepturi consequatur molestias eum odit quo iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum laboriosam adipisci, laborum quia expedita facilis similique quisquam.
						</p>

						<a href="" class="btn btn__default black">
							Czytaj więcej
						</a>
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


<?php get_footer();
