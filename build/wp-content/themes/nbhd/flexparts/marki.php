<?php
$row = get_sub_field('row')[0];
if ($row == 6) {
	$h = 1;
} elseif ($row == 4) {
	$h = 2;
} elseif ($row == 3) {
	$h = 3;
} else {
	$h = 4;
}
?>
<?php if (have_rows('marki')) : ?>
	<section class="img-aside py-5">
		<div class="container-xl py-5">
			<div class="row">
				<?php while (have_rows('marki')) : the_row(); ?>
					<div class="col-lg-<?php echo $row; ?> col-sm-4 col-6">
						<?php if (get_sub_field('title_link')) : ?>
							<?php if (get_sub_field('title_link')['url']) : ?>
								<a href="<?php echo get_sub_field('title_link')['url']; ?>">
								<?php endif; ?>
								<?php if (get_sub_field('title_link')['title']) : ?>
									<span class="h<?php echo $h ?> text700 mb-2">
										<?php echo get_sub_field('title_link')['title']; ?>
									</span>
								<?php endif; ?>
							<?php endif; ?>
							<img data-src="<?php echo esc_url(get_sub_field('image')['sizes']['medium']); ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="bg-cover lazy mb-4 p-4">
							<?php if (get_sub_field('title_link') && get_sub_field('title_link')['url']) : ?>
								</a>
							<?php endif; ?>
					</div>
				<?php endwhile; ?>
			</div>
		</div>
	</section>
<?php endif; ?>