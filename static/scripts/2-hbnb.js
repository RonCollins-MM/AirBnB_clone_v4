$(function () {
    let checkedAmenities = {};
    // $(document).on('change', "input[type='checkbox']", function () {
        // if ($(this).is(':checked')) {
        // console.log($(this).is(':checked'))
        // console.log(this.checked)

    $('input:checkbox').change(function(){
        // console.log(this);
        if (this.checked) {
            checkedAmenities[$(this).data('id')] = $(this).data('name');
            // console.log(checkedAmenities);
        } else {
            delete checkedAmenities[$(this).data('id')];
            // console.log(checkedAmenities);
        }

        let amens = Object.values(checkedAmenities);
        if (amens.length > 0){
            $('div.amenities > h4').text(amens.join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });


    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
        if (status == 'success') {
            data.status == 'OK'
                ? $('div#api_status').addClass('available')
                : $('div#api_status').removeClass('available');
        }
    });
});
