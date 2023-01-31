$('#order-product .quantity').click(function() {

});

var removeProductOrder = function(id) {
    $('#order-product-'+id).remove();

    setTotalMoney();
}

var setTotalMoney = function() {
    let product_money = 0;
    $('#order-product .sum-price').each(function(){
        product_money = product_money + parseInt($(this).val());
    });

    $('#product_money').html(formatNumber(product_money) + ' đ');
    $('.product_money_bt').html(formatNumber(product_money) + ' đ');
    $('.total_money').html(formatNumber(product_money + parseInt($('#fee_ship').val())) + ' đ');
}

var changeQuantity = function(id) {
    let price = parseInt($('#order-product-' + id + ' .quantity').val()) * parseInt($('#order-product-' + id + ' .price').val());
    $('#order-product-' + id + ' .sum-price-txt').html(formatNumber(price) + ' đ');
    $('#order-product-' + id + ' .sum-price').val(price);

    setTotalMoney();
}

$('#apply_product').click(function() {
    $('#modalAddproduct .produce-id-modal').each(function () {
        if (this.checked) {
            let currentId = $(this).val();
            let check = false;
            $.each(orderProducts, function( key, value ) {
                if(currentId == value) {
                    check = true;
                }
            });

            if(check) {
                $('#order-product-' + currentId + ' .quantity').val(parseInt($('#order-product-' + currentId + ' .quantity').val()) + 1);
                changeQuantity(currentId);
            } else {
                orderProducts.push(parseInt(currentId));
                let avatar = $(this).attr('avatar'),
                    title = $(this).attr('title'),
                    price = parseInt($(this).attr('price'));

                let html = '<tr id="order-product-' + currentId + '">' +
                    '<td>' + 
                        currentId + 
                        '<input type="hidden" class="product-id" name="products[' + currentId + '][id]" value="' + currentId + '">' +
                    '</td>' +
                    '<td>' +
                        '<img src="' + avatar + '" class="tbl-img-avatar">' +
                        '<input type="hidden" class="avatar" name="products[' + currentId + '][avatar]" value="' + avatar + '">' +
                    '</td>' +
                    '<td class="tbl-title">'+ 
                        title +
                        '<input type="hidden" class="title" name="products[' + currentId + '][title]" value="' + title + '">' +
                    '/td>' +
                    '<td>' +
                        '<input type="text" value="1" class="quantity" onchange="changeQuantity(' + currentId + ')" onkeypress="onlyNumber(event)">' +
                        '<input type="hidden" name="products[' + currentId + '][quantity]" value="1">' +
                    '</td>' +
                    '<td>' +
                        formatNumber(price) +' đ' +
                        '<input type="hidden" class="price" name="products[' + currentId + '][price]" value="' + price + '">' +
                    '</td>' +
                    '<td>' +
                        '<span class="sum-price-txt"> ' + formatNumber(price) + ' đ</span>' +
                        '<input type="hidden" class="sum-price" name="products[' + currentId + '][sum-price]" value="' + price + '">' +
                    '</td>' +
                    '<td>' +
                        '<button type="button" class="btn btn-sm btn-action btn-outline-danger" onclick="removeProductOrder(' + currentId + ')"><i class="fas fa-trash"></i></button>' +
                    '</td>' +
                '</tr>';

                $('#order-product').append(html);
            }

            $(this).prop('checked', false); 
        }
    });

    $('#modalAddproduct').modal('hide');
    setTotalMoney();
});

// order validate
$('#order-form').validate({
    rules: {
        full_name: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        phone_number: {
            required: true,
        },
        city: {
            required: true,
        },
        district: {
            required: true,
        },
        address: {
            required: true,
        },
    },
    messages: {
        full_name: {
            required: "<small>Vui lòng nhập họ và tên.</small>"
        },
        email: {
            required: "<small>Vui lòng nhập email.</small>",
            email: "<small>Vui lòng nhập đúng định dạng email.</small>",
        },
        phone_number: {
            required: "<small>Vui lòng nhập số điện thoại.</small>"
        },
        city: {
            required: "<small>Vui lòng chọn tỉnh thành.</small>"
        },
        district: {
            required: "<small>Vui lòng chọn quận huyện.</small>"
        },
        address: {
            required: "<small>Vui lòng nhập địa chỉ.</small>"
        },
    }
});

// load city
$('#sl_city').change(function() {
    $.ajax({
        type: "get",
        url: BASE_API_URL + "/get-district",
        data: {
            name: $(this).val(),
        },
        beforeSend: function() {
            $('.district_loading').show();
            $('#host_district').attr('disabled', 'disabled');
        },
        dataType: "JSON",
        success: function (response) {
            html = '<option value="" selected disabled>-- Quận huyện  --</option>';
            $.each( response, function( key, district ) {
                if(old_district == district.name) {
                    html += '<option value="'+district.name+'" selected>'+district.name+'</option>';
                } else {
                    html += '<option value="'+district.name+'">'+district.name+'</option>';
                }
            });
            $('#host_district').html(html)
            $('.district_loading').hide();
            $('#host_district').removeAttr('disabled');
        },
        error: function() {
        }
    });
});

if($('#sl_city').val()) {
    $('#sl_city').trigger('change');
}
// end load city

$('#user_id').change(function(){
    $('.custom-radio').empty(); 
    $.ajax({
        type: 'GET',
        url: BASE_API_URL + "/users/get-address",
        data: {
            user_id: $(this).val(),
        },
        beforeSend: function() {
            $('#list_address').html('<img src="/images/loading-1.gif" with="40px" />');
        },
        dataType: "JSON",
        success: function (response) {
            $('#list_address').html(response.data)
        },
        error: function() {
        }
    });
});

// var checkComfirmCancelOrderAdmin = function(event) {
//     var status = $("input[name='status']:checked").val();
//     if(status == 'cancel'){
//         event.preventDefault();
//         Swal.fire({
//             title: 'Bạn có chắc chắn muốn hủy đơn hàng?',
//             type: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#f57224',
//             cancelButtonColor: 'gray',
//             confirmButtonText: 'Chắc chắn',
//             cancelButtonText: 'Hủy bỏ'
//         }).then((result) => {
//             if (result.value) {
//                 var note = $('.swal2-input').val();
//                 $('#order-form').submit();
//             }
//         })
 
//     }
// };

var checkCancelOrder = function(status){
    if (status.is(':checked')){
        if(status.val() == 'cancel'){
            $('.input_cancel_order').removeAttr('hidden');
        } else{
            $('.input_cancel_order').attr('hidden', 'hidden');
        }
    }

}
