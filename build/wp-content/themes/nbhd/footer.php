<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
<?php
if (is_archive()) {
	$padding = null;
} else {
	$padding = 'pt-5 mt-5';
}
if (!is_single() && !is_archive() && !is_cart() && !is_checkout() && !is_page('konto')) : ?>
	<section class="pre-footer py-5">
		<div class="container py-5">
			<div class="row">
				<div class="col-lg-3">
					<span class="h2 text700 mb-2 d-block">
						Dołącz do nas
					</span>
					<a href="" class="text-upper text-spacing d-block text500">
						@nbhdskate.pl
					</a>
				</div>
				<div class="col-lg-9">
					<?= do_shortcode('[instagram-feed]'); ?>
				</div>
			</div>
		</div>
	</section>
<?php $padding = null;
endif; ?>
<footer class="footer <?php echo $padding; ?>">
	<div class="footer__newsletter">
		<div class="container">
			<div class="row justify-content-between align-items-center">
				<div class="col-lg-6">
					<p class="text-size-large text700 mt-0 mb-1">
						Bądź na bierząco, zapisz się do newsletter’a
					</p>
					<p class="color-red mt-1 mb-0">
						Odbierz kupon 10% zniżki!
					</p>
				</div>
				<div class="col-lg-5">
					<!-- Begin Mailchimp Signup Form -->
					<div id="mc_embed_signup" class="mt-3">
						<form action="https://nbhdskate.us19.list-manage.com/subscribe/post?u=db235ebb14bd6255c04b21a45&amp;id=f2471e3797" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							<div id="mc_embed_signup_scroll" class="line form-group mb-0 d-flex justify-content-end">
								<input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Adres email">
								<div id="mce-responses" class="clear">
									<div class="response" id="mce-error-response" style="display:none"></div>
									<div class="response" id="mce-success-response" style="display:none"></div>
								</div>
								<div style="position: absolute; left: -5000px;" aria-hidden="true">
									<input type="text" name="b_db235ebb14bd6255c04b21a45_f2471e3797" tabindex="-1" value="">
								</div>
								<button type="submit" name="subscribe" id="mc-embedded-subscribe" class="btn btn__border">Zapisz mnie</button>
							</div>
						</form>
					</div>
					<!--End mc_embed_signup-->
				</div>
			</div>
		</div>
	</div>
	<div class="footer__upper py-5">
		<div class="container py-3">
			<div class="row">
				<div class="col-lg-3 col-md-5 col-sm-8 col-auto">
					<a class="d-block mb-3" href="/" style="max-width: 164px;">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 101">
							<g fill="#FFF" fill-rule="evenodd">
								<path d="M12.507 85.332h2.414v13.962h-2.054l-7.699-9.933v9.933H2.754V85.332h2.274l7.48 9.654zm29.321 2.194H33.93v3.63h7v2.194h-7v3.75h7.997v2.194h-10.45V85.332h10.35zm16.117 11.768h2.453V85.332h-2.453zm25.77.239c-4.369 0-7.24-3.11-7.24-7.2 0-3.929 2.991-7.24 7.2-7.24 2.433 0 3.93.678 5.365 1.895l-1.556 1.855c-1.077-.918-2.134-1.496-3.909-1.496-2.573 0-4.528 2.234-4.528 4.946 0 2.892 1.895 5.007 4.747 5.007 1.317 0 2.513-.42 3.371-1.058V93.63h-3.57v-2.134h5.944v5.864c-1.377 1.177-3.351 2.174-5.824 2.174m24.434-6.124v5.884h-2.454V85.332h2.454v5.804h6.661v-5.804h2.453v13.962h-2.453V93.41zm34.845 1.775c0-1.196-.938-1.895-2.872-1.895h-3.89v3.83h4.07c1.675 0 2.692-.658 2.692-1.935m-.778-5.883c0-1.137-.878-1.796-2.453-1.796h-3.53v3.71h3.35c1.576 0 2.633-.618 2.633-1.914m2.453-.4c0 1.716-.957 2.593-1.994 3.132 1.635.559 2.772 1.496 2.772 3.41 0 2.514-2.054 3.85-5.166 3.85h-6.462V85.332h6.262c2.813 0 4.588 1.376 4.588 3.57m23.177-1.555c-2.772 0-4.707 2.214-4.707 4.946 0 2.733 1.975 4.987 4.748 4.987 2.772 0 4.706-2.214 4.706-4.947 0-2.732-1.974-4.986-4.747-4.986m0 12.186c-4.288 0-7.28-3.25-7.28-7.2 0-3.949 3.032-7.24 7.32-7.24 4.289 0 7.28 3.251 7.28 7.2 0 3.95-3.031 7.24-7.32 7.24m34.985-6.283c0 4.17-2.353 6.263-6.004 6.263-3.63 0-5.943-2.094-5.943-6.143v-8.038h2.453v7.939c0 2.593 1.336 3.988 3.53 3.988 2.175 0 3.51-1.316 3.51-3.889v-8.038h2.454v7.919zm22.359-5.684h-3.57v4.688h3.59c1.755 0 2.873-.918 2.873-2.354 0-1.535-1.078-2.334-2.892-2.334zm2.932 11.728l-3.43-4.866h-3.071v4.866h-2.454V85.332h6.223c3.21 0 5.185 1.696 5.185 4.428 0 2.314-1.376 3.71-3.33 4.249l3.77 5.285h-2.893zm20.884-5.884v5.884h-2.453V85.332h2.453v5.804h6.662v-5.804h2.453v13.962h-2.453V93.41zm62.29 3.867h-30.033c-2.711-.062-4.63-2.289-4.63-4.986 0-2.706 1.895-4.9 4.63-4.942h29.995c2.772 0 4.744 2.25 4.744 4.985 0 2.73-1.934 4.943-4.706 4.943m.772-12.147a8.347 8.347 0 00-.772-.038l-30.033.005c-4.223.052-7.204 3.323-7.204 7.237 0 3.924 2.957 7.161 7.204 7.2h29.995c.275 0 .545-.015.81-.039 3.853-.384 6.507-3.502 6.507-7.204 0-3.706-2.635-6.8-6.507-7.161m27.652 2.436h-2.752v9.494h2.752c2.932 0 4.847-1.974 4.847-4.726 0-2.753-1.915-4.768-4.847-4.768m0 11.728h-5.205V85.332h5.205c4.388 0 7.42 3.012 7.42 6.961 0 3.95-3.032 7-7.42 7M60.137.173V63.56H47.672l-34.35-42.507V63.56H.856V.173H13.32l34.351 42.616V.173zm189.951.04v63.35h-12.464V38.098h-29.946v25.465h-12.465V.213h12.465v25.42h29.946V.213zm68.725 50.861h-11.87a.003.003 0 01-.004-.004V12.692c0-.002.001-.004.003-.004H319.1c10.888 0 19.688 9.115 19.17 20.115-.484 10.28-9.164 18.27-19.456 18.27m-.058-50.85h-24.278l-.002.004v63.308c0 .002 0 .003.002.003H319.1c17.76 0 32.15-14.7 31.644-32.572C350.256 13.787 335.94.224 318.755.224m-182.61 51.114h-20.53V38.03h20.53a6.665 6.665 0 016.656 6.656c0 3.666-2.986 6.652-6.656 6.652zm-20.53-38.913h17.482c3.66 0 6.638 2.973 6.638 6.633 0 3.656-2.977 6.638-6.638 6.638h-17.483v-13.27zm32.756 17.773a18.788 18.788 0 003.642-11.14c0-10.429-8.486-18.91-18.916-18.91L103.303.135v63.513h32.842c10.457 0 18.967-8.506 18.967-18.963 0-5.804-2.621-11.01-6.74-14.488z" />
							</g>
						</svg>
					</a>
					<div class="d-flex justify-content-between mb-md-4 mb-3">
						<p class="text700 mx-0">
							NBHD SKATE<br />
							Dolna 2A<br />
							32-540 Trzebinia
						</p>
						<p class="text700 text-right ml-sm-auto ml-5 mr-0">
							<a class="text-underline" href="mailto:info@nbhdskate.pl">info@nbhdskate.pl</a><br />
							<a href="tel:+48 735 970 079">+48 735 970 079</a><br />
							<a href="tel:+48 505 485 958">+48 505 485 958</a>
						</p>
					</div>
					<div class="d-flex">
						<a href="https://www.facebook.com/Neighbourhood-Skateshop-436289680462922/" target="_blank" class="mr-4 text-center">
							<i data-feather="facebook" class="text-center" style="width: 28px; height: 28px; color: #1877f2;"></i>
						</a>
						<a href="https://www.instagram.com/nbhdskate.pl/" target="_blank" class="mr-4 text-center">
							<i data-feather="instagram" class="text-center" style="width: 28px; height: 28px; color: #c32aa3;"></i>
						</a>
						<a href="https://www.youtube.com/channel/UCQAnw7wS8peE9UFIjT3EF2Q" target="_blank" class="mr-4 text-center">
							<i data-feather="youtube" class="text-center" style="width: 28px; height: 28px; color: #ff0000;"></i>
						</a>
					</div>
				</div>
				<div class="offset-md-1 col-lg-2 col-md-3 col-6 pt-4 mt-md-2 mt-5">
					<span class="text-size-medium text700 d-block mb-3 pb-3">
						Pomoc
					</span>
					<ul class="list-unstyled text-size-small color-grey5">
						<li>
							<a href="">Płatności</a>
						</li>
						<li>
							<a href="">Tabela rozmiarów</a>
						</li>
						<li>
							<a href="">Wysyłka i czas dostawy</a>
						</li>
						<li>
							<a href="">Zwroty i reklamacje</a>
						</li>
						<li>
							<a href="">Polityka prywatności</a>
						</li>
						<li>
							<a href="">Regulamin sklepu</a>
						</li>
						<li>
							<a href="">Moje konto</a>
						</li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-3 col-6 pt-4 mt-md-2 mt-5">
					<span class="text-size-medium text700 d-block mb-3 pb-3">
						Mapa strony
					</span>
					<ul class="list-unstyled text-size-small color-grey5">
						<li>
							<a href="">Strona główna</a>
						</li>
						<li>
							<a href="">Sklep</a>
						</li>
						<li>
							<a href="">Sale</a>
						</li>
						<li>
							<a href="">Team</a>
						</li>
						<li>
							<a href="">Koszyk</a>
						</li>
						<li>
							<a href="">Kontakt</a>
						</li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-4 col-6 pt-4 mt-lg-2 mt-5">
					<span class="text-size-medium text700 d-block mb-3 pb-3">
						Płatności
					</span>
					<div style="width: 125px;" class="mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 125 22">
							<path fill="#DDD" d="M9.648 2.83c-.619.746-1.609 1.332-2.599 1.248-.123-1.005.363-2.076.932-2.73C8.601.586 9.681.042 10.563 0c.1 1.038-.305 2.069-.915 2.83zm.899 1.441c-1.435-.084-2.665.83-3.341.83-.693 0-1.732-.788-2.87-.763-1.477.025-2.847.871-3.597 2.22-1.551 2.704-.405 6.699 1.097 8.902.734 1.088 1.608 2.286 2.763 2.244 1.097-.042 1.526-.72 2.846-.72 1.328 0 1.716.72 2.871.703 1.196-.025 1.947-1.089 2.681-2.177.833-1.24 1.18-2.437 1.196-2.504-.025-.025-2.31-.913-2.334-3.593-.025-2.244 1.806-3.308 1.889-3.375-1.031-1.558-2.64-1.725-3.201-1.767zm8.282-3.032v16.323h2.5v-5.578h3.456c3.16 0 5.37-2.203 5.37-5.385s-2.177-5.36-5.287-5.36h-6.039zm2.5 2.136h2.879c2.17 0 3.407 1.172 3.407 3.233 0 2.06-1.238 3.249-3.415 3.249h-2.871V3.375zm13.38 14.312c1.568 0 3.02-.804 3.68-2.085h.049v1.96h2.31V9.437c0-2.353-1.856-3.877-4.71-3.877-2.649 0-4.612 1.54-4.686 3.651h2.252c.19-1.005 1.105-1.667 2.36-1.667 1.525 0 2.383.72 2.383 2.052v.905l-3.118.192c-2.896.176-4.463 1.382-4.463 3.476.008 2.11 1.625 3.517 3.943 3.517zm.677-1.934c-1.329 0-2.178-.654-2.178-1.642 0-1.03.817-1.625 2.376-1.717l2.771-.175v.92c0 1.525-1.278 2.614-2.97 2.614zM43.84 22c2.434 0 3.58-.946 4.579-3.802L52.8 5.72h-2.54l-2.938 9.639h-.049l-2.937-9.64H41.73l4.224 11.884-.23.72c-.38 1.223-1 1.7-2.105 1.7-.198 0-.577-.024-.734-.041v1.96c.149.033.767.058.957.058zM81.54 7.499v3.521h4.613a4.383 4.383 0 01-.586 1.576 4.14 4.14 0 01-1.122 1.207c-.77.56-1.754.878-2.908.878-2.23 0-4.114-1.614-4.79-3.775a5.903 5.903 0 010-3.5c.676-2.174 2.56-3.788 4.79-3.788a4.342 4.342 0 011.767.34 4.54 4.54 0 011.505 1.033l2.447-2.614C85.715.83 83.665-.023 81.54 0a8.193 8.193 0 00-4.493 1.374 8.858 8.858 0 00-3.131 3.672A9.618 9.618 0 0073 9.152c0 1.425.314 2.83.916 4.105v.013a8.845 8.845 0 003.132 3.668 8.18 8.18 0 004.492 1.368c2.3 0 4.245-.813 5.655-2.212 1.616-1.588 2.537-3.94 2.537-6.736.001-.623-.046-1.244-.141-1.86h-8.05zm31.457-.342c-.818-.8-1.933-1.207-3.343-1.207-1.815 0-3.178.712-4.08 2.123l1.685 1.132c.616-.968 1.458-1.452 2.525-1.452a2.67 2.67 0 011.838.75c.245.226.442.504.577.817.135.313.205.652.205.996v.47c-.735-.432-1.66-.661-2.798-.661-1.328 0-2.395.331-3.19 1.005-.795.673-1.197 1.563-1.197 2.694a3.547 3.547 0 00.277 1.47c.195.461.485.87.849 1.2.747.711 1.696 1.067 2.81 1.067 1.316 0 2.36-.623 3.151-1.869h.081v1.513h1.826v-6.718c.006-1.413-.397-2.532-1.216-3.33zm-1.553 7.624c-.28.3-.614.54-.983.704a2.873 2.873 0 01-1.164.248c-.537.01-1.06-.179-1.48-.533a1.64 1.64 0 01-.464-.589 1.738 1.738 0 01-.164-.745c0-.598.26-1.094.771-1.488.51-.393 1.173-.597 1.944-.597 1.063-.014 1.895.242 2.488.75 0 .864-.32 1.614-.948 2.25zm-7.565-12.122a4.496 4.496 0 00-1.502-1.049 4.292 4.292 0 00-1.771-.343h-5.062v15.941h1.909v-6.457h3.15c1.292 0 2.383-.457 3.272-1.36l.214-.228a4.8 4.8 0 001.153-3.3 4.77 4.77 0 00-1.363-3.208v.004zm-1.34 5.312c-.24.271-.533.486-.858.628-.325.143-.675.21-1.027.198h-3.201V3.231h3.201a2.514 2.514 0 011.825.788 2.91 2.91 0 01.789 1.961c.011.738-.25 1.45-.729 1.988v.003zm20.086-1.667l-2.952 7.828h-.036l-3.023-7.828h-2.075l4.183 10.205L116.351 22h1.967L124.7 6.304h-2.075z" />
						</svg>
					</div>
					<div style="width: 84px;" class="mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 20">
							<path fill="#DDD" d="M72.444 4.49A8.235 8.235 0 0069.603 4c-3.127 0-5.337 1.58-5.35 3.841-.026 1.662 1.566 2.599 2.77 3.159 1.236.573 1.65.93 1.643 1.439-.006.784-.988 1.134-1.891 1.134-1.256 0-1.938-.172-2.988-.612l-.39-.184-.445 2.612c.764.311 2.134.585 3.547.611 3.331 0 5.503-1.566 5.528-3.982.025-1.324-.827-2.33-2.643-3.158-1.096-.535-1.782-.9-1.782-1.447 0-.484.586-.993 1.809-.993.811-.02 1.618.13 2.369.44l.3.132.438-2.515-.074.013zm8.128-.273h-2.446c-.764 0-1.331.204-1.669.962l-4.7 10.655h3.324l.67-1.745 4.057.006c.101.407.387 1.737.387 1.737h2.936L80.572 4.217zM59.75 4.12h3.166l-1.98 11.622h-3.167L59.75 4.115v.006zm-8.05 6.4l.324 1.618 3.102-7.922h3.356l-4.994 11.597h-3.342l-2.74-9.82a.62.62 0 00-.299-.388c-.984-.512-2.027-.9-3.107-1.153l.038-.244h5.108c.688.026 1.248.244 1.44.982l1.114 5.337v-.006zm24.954 1.192l1.268-3.254c-.02.03.26-.67.42-1.11l.216 1 .734 3.356h-2.638v.008zM3.507 19.956v-1.328c0-.509-.32-.84-.87-.84-.276 0-.574.088-.78.376-.16-.244-.39-.376-.734-.376a.75.75 0 00-.642.31v-.266H0v2.124h.481v-1.173c0-.376.207-.553.528-.553.32 0 .481.2.481.553v1.173h.482v-1.173c0-.376.229-.553.527-.553.32 0 .481.2.481.553v1.173h.527zm7.13-2.124h-.78v-.642h-.481v.642H8.94v.42h.436v.974c0 .486.206.774.756.774.207 0 .436-.066.596-.155l-.137-.398a.775.775 0 01-.413.11c-.23 0-.32-.132-.32-.354v-.95h.778v-.421zm4.08-.044a.651.651 0 00-.573.31v-.266h-.482v2.124h.482V18.76c0-.354.16-.553.458-.553.092 0 .207.022.298.044l.138-.442c-.092-.022-.23-.022-.321-.022zm-6.167.22c-.229-.154-.55-.22-.894-.22-.55 0-.916.265-.916.685 0 .355.275.553.756.62l.23.022c.251.044.389.11.389.221 0 .155-.183.266-.504.266s-.574-.11-.734-.221l-.23.354c.253.176.597.265.94.265.642 0 1.01-.288 1.01-.686 0-.376-.299-.575-.757-.641l-.23-.023c-.206-.022-.366-.066-.366-.199 0-.154.16-.243.412-.243.276 0 .55.11.688.177l.206-.376zm12.792-.22a.651.651 0 00-.573.31v-.266h-.482v2.124h.482V18.76c0-.354.16-.553.458-.553.092 0 .206.022.298.044l.138-.442c-.092-.022-.23-.022-.321-.022zm-6.144 1.106c0 .641.459 1.106 1.17 1.106.32 0 .55-.066.779-.243l-.23-.377a.948.948 0 01-.573.2c-.39 0-.664-.266-.664-.686 0-.398.275-.664.664-.686.207 0 .39.066.573.2l.23-.377c-.23-.177-.459-.243-.78-.243-.71 0-1.169.464-1.169 1.106zm4.447 0v-1.062h-.481v.265c-.16-.199-.39-.31-.688-.31-.619 0-1.1.465-1.1 1.107 0 .641.481 1.106 1.1 1.106.321 0 .55-.11.688-.31v.266h.481v-1.062zm-1.765 0c0-.376.252-.686.665-.686.39 0 .665.288.665.686 0 .376-.275.686-.665.686-.413-.023-.665-.31-.665-.686zm-5.753-1.106c-.642 0-1.1.442-1.1 1.106 0 .664.458 1.106 1.122 1.106.321 0 .642-.089.894-.288l-.229-.331a1.12 1.12 0 01-.642.22c-.298 0-.596-.132-.665-.508h1.628v-.177c.023-.686-.39-1.128-1.009-1.128zm0 .398c.297 0 .504.177.55.509H11.53c.046-.288.253-.51.597-.51zm11.943.708V16.99h-.482v1.106c-.16-.199-.39-.31-.688-.31-.618 0-1.1.465-1.1 1.107 0 .641.482 1.106 1.1 1.106.321 0 .55-.11.688-.31v.266h.482v-1.062zm-1.766 0c0-.376.253-.686.665-.686.39 0 .665.288.665.686 0 .376-.275.686-.665.686-.413-.023-.665-.31-.665-.686zm-16.092 0v-1.062h-.481v.265c-.16-.199-.39-.31-.688-.31-.619 0-1.1.465-1.1 1.107 0 .641.481 1.106 1.1 1.106.321 0 .55-.11.688-.31v.266h.481v-1.062zm-1.788 0c0-.376.252-.686.665-.686.39 0 .665.288.665.686 0 .376-.275.686-.665.686-.413-.023-.665-.31-.665-.686zM11.42 13.536l.181.145a7.414 7.414 0 01-4.132 1.247A7.465 7.465 0 117.464 0c1.53 0 2.954.456 4.134 1.242a2.08 2.08 0 00-.166.154 8.023 8.023 0 00-2.78 6.068 8.05 8.05 0 002.77 6.072h-.001zM16.7 0a7.425 7.425 0 00-4.134 1.242c.06.052.118.103.166.154a8.022 8.022 0 012.78 6.068 8.06 8.06 0 01-2.77 6.072l-.18.145a7.406 7.406 0 004.132 1.247A7.465 7.465 0 1016.698 0zM12.08 1.6a7.442 7.442 0 00-2.85 5.865 7.444 7.444 0 002.85 5.868 4.94 4.94 0 00.284-.236 7.442 7.442 0 002.568-5.632A7.444 7.444 0 0012.08 1.6z" />
						</svg>
					</div>
					<div style="width: 75px;">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 25">
							<path fill="#DDD" d="M15.518 14.41l6.129-.012-.223 1.397-5.127 4.88h4.3l-.248 1.495h-6.326l.26-1.545 4.905-4.707h-3.917l.247-1.507zM8.834 12.026a1.627 1.627 0 00-.531-.333 4.358 4.358 0 00-.717-.198 8.4 8.4 0 00-.815-.086c-.198-.013-.322-.013-.322-.013H1.78L0 22.17h1.668l.655-3.99 3.237.012s1.26.05 2.15-.42c.89-.47 1.136-1.545 1.136-1.545s.1-.395.186-.89c.086-.53.185-1.173.222-1.52.025-.147.037-.246.037-.246s.025-.111.025-.284c0-.235-.037-.593-.222-.94-.087-.11-.161-.222-.26-.32zM7.55 13.93c0 .025-.148.89-.346 1.915-.074.396-.37.606-.716.68-.569.123-1.187.099-1.187.099l-2.705-.013.593-3.583 2.446.013h.395c.26 0 .606.012.902.049.247.037.445.086.507.16.086.1.111.235.123.359.013.16-.012.309-.012.321zM29.937 11.396h1.606L29.752 22.17h-1.607l1.792-10.774zM38.5 14.41l1.544-.012.543 5.474 2.36-5.474h1.903l.556 5.499 2.36-5.499h1.606l-3.398 7.772h-1.89l-.544-5.436-2.397 5.436H39.29l-.79-7.76zM26.984 14.473c-.445-.149-1.223-.173-1.89-.173-.643.012-.927.037-1.174.086 0 0-1.137.16-1.78.964-.642.803-.84 2.545-.84 2.545s-.382 1.928-.271 2.57c.111.643.309 1.236 1.038 1.52.729.284 1.346.272 1.346.272s1.298.098 2.274-.124a2.759 2.759 0 001.495-.914s.235-.297.395-.655c.16-.358.21-.593.222-.63l.1-.42H26.23s-.086 1.1-.988 1.198c-.902.1-1.372.062-1.557.05-.173-.013-1.136.037-1.062-.766v-.05c.037-.914.148-1.149.148-1.149l5.226-.012.223-1.297c.284-1.47.099-2.583-1.236-3.015zm-.358 2.83h-3.583l.136-.57s.123-.444.37-.63c.247-.185.569-.222.865-.246.297-.025 1.087-.087 1.742.049.21.037.42.16.47.346.136.408 0 1.05 0 1.05z" />
							<path fill="#DDD" d="M22.66 19.959v.037c-.013.061 0-.037 0-.037zM36.831 14.473c-.445-.149-1.223-.173-1.89-.173-.643.012-.927.037-1.174.086 0 0-1.137.16-1.78.964-.641.803-.84 2.545-.84 2.545s-.382 1.928-.271 2.57c.111.643.309 1.236 1.038 1.52.729.284 1.346.272 1.346.272s1.298.098 2.274-.124c.976-.235 1.495-.914 1.495-.914s.235-.297.395-.655c.16-.358.21-.593.223-.63l.099-.42h-1.668s-.087 1.1-.989 1.198c-.902.1-1.371.062-1.557.062-.173-.012-1.136.037-1.062-.766v-.05c.037-.914.148-1.148.148-1.148l5.226-.013.223-1.297c.284-1.47.111-2.595-1.236-3.027zm-.358 2.83H32.89l.136-.57s.123-.444.37-.63c.248-.185.569-.222.865-.246.297-.025 1.088-.087 1.742.049.21.037.42.16.47.346.136.408 0 1.05 0 1.05zM51.213 14.41l1.026 5.684 2.903-5.683 1.63.012-4.188 8.118s-.753 1.47-1.223 1.84c-.47.371-.753.544-1.136.581-.383.038-.544.062-.902 0l-.396-.074.247-1.445s.655.123 1.038-.037c.383-.149.692-.816.692-.816l.198-.333-1.52-7.87 1.631.024zM57.378 15.177h1.68l.1-.655s.185-1.186.58-1.409c.123-.074.334-.135.58-.185.446-.074 1.002-.086 1.459-.074.704.025.963.037 1.68.111.717.087.531.766.531.766l-.136 1.026s-.061.457-.222.741c-.148.26-.544.433-.779.507-.556.185-2.458.667-2.458.667l-1.495.432s-.915.272-1.433.828a3.394 3.394 0 00-.791 1.557c-.074.334-.47 2.669-.47 2.669h8.068l.272-1.607-6.375.013.111-.655s.074-.68.346-.902c.087-.074.123-.16.643-.346.308-.111 1.346-.383 1.346-.383l2.41-.655s1.31-.333 1.828-1.062c.519-.717.717-2.088.717-2.088s.136-1.335.037-1.755c-.111-.42-.507-.914-.976-1.136-.482-.21-.976-.347-2.434-.322-1.446.025-2.175.087-2.904.358-.741.272-1.161.767-1.433 1.458-.309.68-.482 2.1-.482 2.1zM72.563 18.18l1.137-6.772h-2.002l-6.24 6.697-.283 1.693h5.448l-.395 2.384h1.68l.396-2.384h1.544l.272-1.619h-1.557zm-1.656 0h-3.52l4.287-4.572-.767 4.571zM12.368 12.286h5.14s1.149-.927 1.964-1.532c.816-.593 2.31-1.545 2.31-1.545L18.88 7.85s-2.459 1.52-3.497 2.236c-1.013.668-3.014 2.2-3.014 2.2zM23.401 8.258l-2.384-1.606s2.15-1.224 5.028-2.373c2.867-1.136 4.399-1.618 4.399-1.618l.482 2.273s-2.756.927-4.337 1.668A29.324 29.324 0 0023.4 8.258zM32.692 4.44l-.42-2.323s2.94-.778 5.634-1.285C40.6.326 44.17.092 44.17.092l-1.186 3.594s-3.138-.432-6.09-.024c-2.287.272-4.202.778-4.202.778zM44.862 3.995l1.99-3.99s4.349-.087 8.105.494c3.756.58 7.19 1.47 7.116 1.507l-9.526 4.98s-2.224-1.41-4.991-2.274c-1.557-.457-2.694-.717-2.694-.717zM54.265 8.073l2.088 1.593H73.55s-.037-.556-.494-1.346c-.284-.495-.803-1.013-1.347-1.557-.197-.198-.988-.816-1.581-1.199-1.52-.988-2.372-1.371-3.941-2.075L54.265 8.073zM13.48 14.398c-.643 0-1.26.26-1.78.544l.087-.544h-1.705l-1.371 7.735h1.717l.754-4.287c.16-.865.803-1.94 2.075-1.94h.89l.272-1.508h-.94z" />
						</svg>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-6 pt-4 mt-lg-2 mt-5">
					<span class="text-size-medium text700 d-block mb-3 pb-3">
						Wysyłka
					</span>
					<div class="mb-4">
						<img style="width: 68px;" class="lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/inpost.png" alt="">
					</div>
					<div class="mb-4">
						<img style="width: 68px;" class="lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/dpd.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer__lower">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-auto">
					<span class="text700 text-size-small">Copyright © 2021 NBHDSKATE</span>
				</div>
				<div class="col-auto">
					<span class="sative text700 text-size-small">
						<a href="https://www.sative.co.uk" target="_blank">Made with <i class="fas fa-heart"></i> by
							<span>sative</span></a>
					</span>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
</div><!-- #wrapper -->
<!-- Modals -->
<div class="modal fade" id="open-modal-newsletter" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 560px;">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title">
					Zapisz się do newslettera i odbierz <br /><span style="color: #ff0000;">kod rabatowy -10%</span>
				</h3>
				<button type="button" class="close text-size-xxxlarge" data-dismiss="modal" aria-label="Zamknij">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<form class="d-flex align-items-center flex-wrap" method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" id="newsletter-form-modal" enctype="multipart/form-data">
					<input class="mr-3 my-2" type="email" name="newsletter-email" value="" placeholder="Wpisz tutaj swój e-mail" required>
					<input type="hidden" name="action" value="newsletter_form">
					<?php wp_nonce_field('newsletter_form', 'newsletter_form_nonce'); ?>
					<button type="submit" class="btn btn__normal my-2"><span>Zapisz się</span></button>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="nbhdModalCart" tabindex="-1" role="dialog" aria-labelledby="nbhdModalCartLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-slideout" role="document">
		<div class="modal-content">
			<div class="modal-topbar bg-black color-white d-flex align-items-center justify-content-between position-absolute left-0">
				<h5 class="h4 text-uppercase text700 mb-0" id="nbhdModalCartLabel">Koszyk</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Zamknij">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="widget_shopping_cart_content"><?php woocommerce_mini_cart(); ?></div>
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="nbhdModalSearch" tabindex="-1" role="dialog" aria-labelledby="nbhdModalSearchLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-slideout" role="document">
		<div class="modal-content">
			<div class="modal-topbar bg-black color-white d-flex align-items-center justify-content-between position-absolute left-0">
				<h5 class="h4 text-uppercase text700 mb-0" id="nbhdModalSearchLabel">Wyszukiwarka</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Zamknij">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">
				<?php echo do_shortcode('[fibosearch]'); ?>
			</div>
		</div>
	</div>
</div>
<?php if (isset($_GET['already'])) : ?>
	<div class="modal fade" id="already-modal-newsletter" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h3 class="modal-title">Sorka, ale przyznaliśmy Ci już kupon...</h3>
					<button type="button" class="close text-size-xxxlarge" data-dismiss="modal" aria-label="Zamknij">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>
<?php if (isset($_GET['code'])) : ?>
	<div class="modal fade" id="code-modal-newsletter" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h3 class="modal-title">
						Dzięki! Wysłaliśmy właśnie twój kod rabatowy na maila!
					</h3>
					<button type="button" class="close text-size-xxxlarge" data-dismiss="modal" aria-label="Zamknij">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>
<!-- Your customer chat code -->
<div class="fb-customerchat" attribution=setup_tool page_id="436289680462922" theme_color="#F5A623" logged_in_greeting="Siemanko! Potrzebujesz pomocy Ziomuś? Pisz co jest grane..." logged_out_greeting="Siemanko! Potrzebujesz pomocy Ziomuś? Pisz co jest grane...">
</div>
<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
<script>
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#000"
			},
			"button": {
				"background": "#F5A623"
			}
		},
		"position": "bottom-left",
		"content": {
			"message": "Używamy ciasteczek jak każdy, wiadomo... Kliknij, że wiesz o co kaman, albo sobie poczytaj, jak wolisz...",
			"dismiss": "Czaje, czaje...",
			"link": "Chce poczytać o cookies",
			"href": "/polityka-prywatnosci/"
		}
	});
</script>
<?php wp_footer(); ?>
</body>

</html>