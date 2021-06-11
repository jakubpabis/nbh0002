<?php

/**
 * Single Product tabs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/tabs.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.8.0
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Filter tabs and allow third parties to add their own.
 *
 * Each tab is an array containing title, callback and priority.
 *
 * @see woocommerce_default_product_tabs()
 */
$product_tabs = apply_filters('woocommerce_product_tabs', array());

if (!empty($product_tabs)) : $i = 0; ?>

	<div id="accordion" class="woocommerce-tabs wc-tabs-wrapper" role="tablist">
		<div class="card bg-grey">
			<div class="card-body p-0" id="heading-D">
				<h5 class="px-3 py-4 mb-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#tab-D" aria-expanded="true" aria-controls="tab-D">
					Dostawa i zwrot
					<span>+</span>
				</h5>
				<div id="tab-D" class="collapse show" aria-labelledby="tab-D" data-parent="#accordion">
					<div class="collapse-content px-3 bg-grey2 pb-4">
						<p class="mt-0">
							Darmowa wysyłka już od 199 PLN<br />
							30 dni na zwrot lub wymianę produktu<br />
							<br />
							<strong>Wysyłka już w 48h</strong>
						</p>
					</div>
				</div>
				<hr />
			</div>
		</div>
		<?php foreach ($product_tabs as $key => $product_tab) : ?>
			<div class="card bg-grey">
				<div class="card-body p-0" id="heading-<?php echo esc_attr($key); ?>">
					<h5 class="px-3 py-4 mb-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#tab-<?php echo esc_attr($key); ?>" aria-expanded="false" aria-controls="tab-<?php echo esc_attr($key); ?>">
						<?php echo wp_kses_post(apply_filters('woocommerce_product_' . $key . '_tab_title', $product_tab['title'], $key)); ?>
						<span>+</span>
					</h5>
					<div id="tab-<?php echo esc_attr($key); ?>" class="collapse" aria-labelledby="tab-<?php echo esc_attr($key); ?>" data-parent="#accordion">
						<div class="collapse-content px-3 bg-grey2 pb-4">
							<?php
							if (isset($product_tab['callback'])) {
								call_user_func($product_tab['callback'], $key, $product_tab);
							}
							?>
						</div>
					</div>
					<hr />
				</div>
			</div>
		<?php $i++;
		endforeach; ?>
		<?php do_action('woocommerce_product_after_tabs'); ?>
	</div>

<?php endif; ?>