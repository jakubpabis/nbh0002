<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>

<?php woocommerce_breadcrumb(); ?>

<section id="singlePage" class="scene_element scene_element scene_element--fadeindown scene_element--delayed2">
	<main id="main" class="site-main" role="main">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-10 col-12">

					<section class="error-404 not-found text-center">
						<header class="page-header">
							<h1 class="page-title mb-3"><?php esc_html_e('Nie ma bata!', 'nbhd'); ?></h1>
						</header><!-- .page-header -->

						<div class="page-content">
							<h4 class="mb-3"><?php esc_html_e('Nie da rady tego znaleźć...', 'nbhd'); ?></h4>
							<h5><?php esc_html_e('Ale spróbuj szczęścia z szukajką poniżej, ziom!', 'nbhd'); ?></h5>
							<?php
							get_search_form();
							?>

						</div><!-- .page-content -->
					</section><!-- .error-404 -->

				</div>
			</div>
		</div>
	</main><!-- #main -->
</section><!-- #primary -->

<?php get_footer();
