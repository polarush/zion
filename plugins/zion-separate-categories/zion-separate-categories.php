<?php
/**
 * Plugin Name: Zion Separate Categories display WooCommerce products and categories/subcategories separately in archive pages
 * Description: Display products and categories / subcategories as two separate lists in product archive pages
 * Version: 1.0
 * Author: Rachel McCollin
 * Author URI: http://rachelmccollin.co.uk
 *
 *
 */
function zion_product_subcategories( $args = array() ) {
    $parentid = get_queried_object_id();
         
    $args = array(
        'parent' => $parentid
    );
     
    $terms = get_terms( 'product_cat', $args );
     
    if ( $terms ) {

        echo '<div class="categories-wrapper">';
            
            echo '<div class="title-container">';
                echo '<h2 class="body-title">Категории</h2>';
                echo '<div class="mainpage__category-toggler">Все категории</div>';
            echo '</div>'; 



            echo '<ul class="categories-cards">';

                foreach ( $terms as $term ) {

                    echo '<a href="' .  esc_url( get_term_link( $term ) ) . '" class="nodecorate">';
                        echo '<li class="category-card">';                 

                            woocommerce_subcategory_thumbnail( $term );

                            echo '<span class="category-card__title">';
                                echo $term->name;
                            echo '</span>';

                        echo '</li>';
                    echo '</a>';

                
            }

            echo '</ul>';

        echo '</div">';
    
    }
     
}
add_action( 'woocommerce_before_shop_loop', 'zion_product_subcategories', 50 );
