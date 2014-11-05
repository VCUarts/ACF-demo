<div class="module module--wsiwyg">

  <?php 
    if (get_sub_field('select') == 2): ?>
      <div class="wsiwyg-one">
        <?php the_sub_field('wsiwyg_content_1'); ?>
      </div>
      <div class="wsiwyg-two">
        <?php the_sub_field('wsiwyg_content_2'); ?>
      </div>
    <?php else: ?>
      <p class="module--wsiwyg__content">
        <?php the_sub_field('wsiwyg_content_1'); ?>
      </p>
    <?php endif; 
  ?>

</div>