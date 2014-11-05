<div class="module">

    <div class="module__inner">
     
        <?php
        // check if the nested repeater field has rows of data
        if( have_rows('slides') ): ?>
        
        <div class="slider">
          <ul>

            <?php
            // loop through the rows of data
            while ( have_rows('slides') ) : the_row();

            $image = get_sub_field('image');
            ?>
            
            <li>
              <img src="<?php echo $image[url]; ?>" />
              <p class="slider__caption"><?php the_sub_field('caption'); ?></p>
            </li>
           
            <?php
              endwhile;
            ?> 

          </ul>
        </div>

      <?php endif; ?>

  </div>
</div>