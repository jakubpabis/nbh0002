<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>

<div class="container-fluid">
	<?php woocommerce_breadcrumb(); ?>
</div>

<section id="singlePage">
	<main id="main" class="site-main" role="main">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12">

					<?php
					while (have_posts()) : the_post();

						get_template_part('template-parts/content', get_post_format());

						the_post_navigation();

						// If comments are open or we have at least one comment, load up the comment template.
						if (comments_open() || get_comments_number()) :
							comments_template();
						endif;

					endwhile; // End of the loop.
					?>

				</div>
			</div>
		</div>
	</main><!-- #main -->
</section><!-- #primary -->

<?php get_footer();
