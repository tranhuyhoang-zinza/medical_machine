(function($){"use strict";$(document.body).on('wc_fragments_refreshed wc_fragments_loaded added_to_cart',function(event){$('.cart-contents').on('click',function(){$('.site-header-cart__wrapper').toggleClass('open');});$(document).on('click',function(e){var target=e.target;if(!$(target).is('.site-header-cart__wrapper')&&!$(target).parents().is('.site-header-cart__wrapper')){$('.site-header-cart__wrapper').removeClass('open');}});});$(document).on('tm_wc_products_changed',initCountdown);function initCountdown(){$('.tm-products-sale-end-date[data-countdown]').each(function(){var $this=$(this),initalized=$this.data('initalized'),finalDate=$this.data('countdown'),format=$this.data('format');if(undefined!==initalized){return;}
$this.countdown(finalDate,function(event){$this.html(event.strftime(format));});$this.data('initalized',true);});}
initCountdown();function initQty($input){var min=$input.attr('min'),max=$input.attr('max');$(document).off('click.tmWillard');$(document).on('click.tmWillard','.tm-qty-minus',changeQty);$(document).on('click.tmWillard','.tm-qty-plus',changeQty);}
if($('.quantity input[type=number]').length){var $input=$('.quantity input[type=number]');$('.variations_form ').on('reset_data',function(event){$input.val('1');});initQty($input);}
$(document).on('tm-woo-quick-view-on-show',function(){var $input=$('.quantity input[type=number]');initQty($input);});function changeQty(){var $this=$(this),$parent=$this.closest('.quantity'),$input=$('input[type="number"]',$parent),min=$input.attr('min'),max=$input.attr('max'),current=$input.val();current=parseInt(current);min=parseInt(min);max=parseInt(max);if(typeof min===typeof NaN){min=1;}
if($this.hasClass('tm-qty-minus')){if(current>min){$input.val(current- 1).trigger('change');}}else if(typeof max===typeof NaN||current<max||''===max){$input.val(current+ 1).trigger('change');}}})(jQuery);