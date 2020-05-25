// Modify /wp-content/plugins/js_composer/include/templates/shortcodes/vc_row.php

// added $lazy_bg to output
$output = $lazy_bg = $after_output = '';

// add this line under $wrapper_attributes = array(); which build attributes for wrapper
if (! empty( $lazy_bg ) ) {
    $wrapper_attributes[] = 'data-src="' . esc_url( $lazy_bg ) . '"';
}
