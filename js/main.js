var cartIcon=$('#cart-icon');
var cart=$('.cart');
var closeCart=$('#close-cart');

$(cartIcon).click(function(){
    $(cart).toggleClass("active");
 })
$(closeCart).click(function(){
    $(cart).removeClass("active");
 })

$(document).ready(function(){
    $('.cart-box').hide();
    $('.total-price-now')
})
$('.add-cart').click(function(){
    $(cart).addClass("active");
    var title=$(this).siblings('.product-title').text();
    var price=$(this).siblings('.price').text();
    var itemImg=$(this).siblings('.product-img').html();
    var itemTemp='<div class="cart-box"><div class="cart-img">'+itemImg+'</div><div class="detail-box"><div class="cart-product-title">'+title+'</div><div class="cart-price">'+price+'</div><input type="number" value="1" class="cart-quantity" name="quantity-count"></div><span class="remove-cart"><i class="bx bxs-trash-alt cart-remove"></span></i></div>'
    $('.appendArea').append(itemTemp);
})
$(document).on('click','input[name="quantity-count"]',function(){
    var priceText=$(this).siblings('.cart-price').text().replace("$","");
    var priceCount=parseInt(priceText);
    var priceByQt=priceCount*$(this).val();
    $('.total-price').text('$'+priceByQt);
})
$(document).on('click','.add-cart',function(){
    var thisPrice=$(this).siblings('.price').text().replace("$","");
    var thisPriceNum=parseInt(thisPrice)
    var totalNow=$('.total-price').text().replace("$","");
    var totalNowNum=parseInt(totalNow)
    if(totalNowNum=='0'){
        $('.total-price').text($(this).siblings('.price').text());
    }
    else{
        var thisNowNum=thisPriceNum+totalNowNum;
        $('.total-price').text('$'+thisNowNum)
    }
})
$(document).on('click','.remove-cart',function(){
    $(this).parents('.cart-box').html('');
    //remove
    if($('.total-price').text()!=='0'){
        var priceText=$('input[name="quantity-count"]').siblings('.cart-price').text().replace("$","");
        var priceCount=parseInt(priceText);
        var priceByQt=priceCount*$('input[name="quantity-count"]').val();
         $('.total-price').text('$'+priceByQt);
    }
    
})
