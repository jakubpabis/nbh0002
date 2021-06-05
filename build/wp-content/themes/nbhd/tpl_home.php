<?php

/**
 * Template Name: Homepage
 */

get_header();

if (get_field('slides')) {
	get_template_part('template-parts/content', 'slider');
} ?>

<section class="cards my-4 py-3">
	<div class="container-xl">
		<div class="row">
			<div class="col-lg-4">
				<div class="cards__card bg-grey d-flex justify-content-center align-items-center py-5 flex-wrap text-center">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/return.svg" alt="" class="w-25 mb-4">
					<span class="color-grey9 h4 text700 w-100 pt-2">
						30 dni na zwrot towaru
					</span>
					<p class="color-grey7 d-block m-0">
						lub wymianę towaru
					</p>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="cards__card bg-grey d-flex justify-content-center align-items-center py-5 flex-wrap text-center">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/offer.svg" alt="" class="w-25 mb-4">
					<span class="color-grey9 h4 text700 w-100 pt-2">
						Program lojalnościowy
					</span>
					<p class="color-grey7 d-block m-0">
						Zbieraj punkty, odbieraj nagrody
					</p>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="cards__card bg-grey d-flex justify-content-center align-items-center py-5 flex-wrap text-center">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/delivery.svg" alt="" class="w-25 mb-4">
					<span class="color-grey9 h4 text700 w-100 pt-2">
						Wysyłka w 48h
					</span>
					<p class="color-grey7 d-block m-0">
						Albo nawet szybciej!
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="copy my-5 py-3">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col text-center">
				<h2 class="text700">
					Skateshop inny niż wszystkie
				</h2>
				<p class="w-50 mb-4">
					Habitasse imperdiet enim, porttitor amet varius nunc, in consectetur. Feugiat in tellus venenatis scelerisque
					leo duis duis massa.
				</p>
				<div class="d-flex justify-content-center pt-2">
					<a href="" class="h5 text700 mx-5 text-underline">
						Nowości
					</a>
					<a href="" class="h5 text700 mx-5 text-underline color-red">
						Wyprzedaż
					</a>
					<a href="" class="h5 text700 mx-5 text-underline">
						Bestsellery
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="cards mb-5 pb-4">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 mb-2">
				<div class="cards__card position-relative mb-4 p-0">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/card1.jpg" alt="" class="bg-cover">
					<div class="cards__card-corner position-absolute bottom-0 left-0 bg-white p-3 pr-5">
						<span class="h3 text700 d-block">
							Deskorolka
						</span>
						<span class="text-underline">
							Sprawdź
						</span>
					</div>
					<a href="" class="whole-element-link"></a>
				</div>
			</div>
			<div class="col-lg-6 mb-2">
				<div class="cards__card position-relative mb-4 p-0">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/card2.jpg" alt="" class="bg-cover">
					<div class="cards__card-corner position-absolute bottom-0 left-0 bg-white p-3 pr-5">
						<span class="h3 text700 d-block">
							Obuwie
						</span>
						<span class="text-underline">
							Sprawdź
						</span>
					</div>
					<a href="" class="whole-element-link"></a>
				</div>
			</div>
			<div class="col-lg-6 mb-2">
				<div class="cards__card position-relative mb-4 p-0">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/card3.jpg" alt="" class="bg-cover">
					<div class="cards__card-corner position-absolute bottom-0 left-0 bg-white p-3 pr-5">
						<span class="h3 text700 d-block">
							Odzież
						</span>
						<span class="text-underline">
							Sprawdź
						</span>
					</div>
					<a href="" class="whole-element-link"></a>
				</div>
			</div>
			<div class="col-lg-6 mb-2">
				<div class="cards__card position-relative mb-4 p-0">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/card4.jpg" alt="" class="bg-cover">
					<div class="cards__card-corner position-absolute bottom-0 left-0 bg-white p-3 pr-5">
						<span class="h3 text700 d-block color-red">
							Wyprzedaż
						</span>
						<span class="text-underline color-red">
							Sprawdź
						</span>
					</div>
					<a href="" class="whole-element-link"></a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="img-aside py-5 bg-grey2">
	<div class="container-xl py-5">
		<div class="row justify-content-between">
			<div class="col-lg-7">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/polar.jpg" alt="" class="bg-cover">
			</div>
			<div class="col-xl-4 col-lg-5 d-flex flex-wrap align-content-between">
				<span class="text-upper text-spacing d-block text500">
					Nowa dostawa
				</span>
				<span class="h1 text700">
					Polar Winter 20 Hardgoods
				</span>
				<p>
					Polar Skate Co. to jedna z wiodących europejskich firm deskorolkowych na całym świecie. Ta szwedzka marka
					została założona przez Pontusa Alv w 2011 roku.
				</p>
				<a href="" class="btn btn__default black">
					Pokaż artykuły
				</a>
			</div>
		</div>
	</div>
</section>



<section class="bestsellers py-5 bg-grey">
	<div class="container-xl pt-5">
		<div class="row align-content-center justify-content-between pb-4 mb-2">
			<div class="col-auto">
				<span class="h2 text700">
					Bestsellery
				</span>
			</div>
			<div class="col-auto">
				<a href="" class="btn btn__medium black">
					Pokaż wszystkie
				</a>
			</div>
		</div>
		<?php echo do_shortcode('[products limit="15" columns="3" visibility="featured" orderby="date"]'); ?>
	</div>
</section>



<section class="img-aside py-5 bg-grey2">
	<div class="container-xl py-5">
		<div class="row justify-content-between">
			<div class="col-xl-4 col-lg-5 d-flex flex-wrap align-content-between">
				<span class="text-upper text-spacing w-100 text500">
					Nowa dostawa
				</span>
				<span class="h1 text700">
					Raw Hide
				</span>
				<p>
					Raw Hide to nowa marka odzieżowa, której promocją był film pt. Raw Hide Video - premiery odbyły się w całym
					kraju jak i za granicą. Robimy ubrania i produkujemy filmy. Podróżujemy i angażując w projekt nagrywamy filmy
					z nowo poznanymi ludźmi. Dzięki nowym kontaktom możemy tworzyć dobre produkty.
				</p>
				<a href="" class="btn btn__default black">
					Pokaż artykuły
				</a>
			</div>
			<div class="col-lg-7">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/raw.jpg" alt="" class="bg-cover">
			</div>
		</div>
	</div>
</section>

<?php get_footer();
