
$(document).ready(function() {
    $.ajax({
        url: 'http://45.33.76.177:8500/address/divisions/',
        type: 'get',
        success:function(data){

            var options ="";
            for (var i = 0; i < data.length; i++) {
              options += "<option value=" + data[i] + ">" + data[i] + "</option>";
            }

            $("#division").append(options);

         }
    });


    $('#division').on('change', function(){
        var division = $(this).val();

        if(division !== "0" ){

            $.ajax({
                url: 'http://45.33.76.177:8500/address/districts/',
                type: 'get',
                data:{
                    'division':division
                },
                success:function(data){

                    var options ="<option value='0'>-------</option>";

                    $('#district option').each(function(){
                        $(this).remove();
                    });

                    for (var i = 0; i < data.length; i++) {
                        options += "<option value="+data[i]+">" + data[i] + "</option>";
                    }
                    $("#district").append(options);
                }
            });
        }
    });

    $('#district').on('change', function(){
        var district = $(this).val();

        if(district !== "0" )
        {
            $.ajax({
                url: 'http://45.33.76.177:8500/address/thanas/',
                type: 'get',
                data:{
                    'division':division,
                    'district':district
                },
                success:function(data){

                    var options ="<option value='0'>-------</option>";

                    $('#thana option').each(function(){
                        $(this).remove();
                    });

                    for (var i = 0; i < data.length; i++) {
                        options += "<option value=" + data[i] + ">" + data[i] + "</option>";
                    }
                    $("#thana").append(options);
                }
            });
        }
  });

$('#thana').on('change', function(){

    var thana = $(this).val();
    var district = $('#district').val();

    if(thana !== "0" )
    {
        $.ajax({
            url: 'http://45.33.76.177:8500/address/postal-code/',
            type: 'get',
            data:{
                'district':district,
                'thana':thana,
            },
            success:function(data){

                var options ="<option value='0'>-------</option>";

                $('#postal option').each(function(){
                    $(this).remove();
                });

                for (var i = 0; i < data.length; i++) {
                    options += "<option value="+data[i]+">" + data[i] + "</option>";
                }
                $("#postal").append(options);
            }
        });
    }
});

  });