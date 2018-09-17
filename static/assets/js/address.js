
$('#district').hide();
$('#thana').hide();
$('#postal').hide();
$(document).ready(function() {
    $.ajax({
        url: 'http://45.33.76.177:8500/address/divisions/',
        type: 'get',
        success:function(data){
            //var result = $('select').find('option');
            console.log(data);
            var options ="";
            for (var i = 0; i < data.length; i++) {
              options += "<option value="+data[i]+">" + data[i] + "</option>";
            }
            $("#division").append(options);

         }
    });


    $('#division').on('change', function(){
        var division = $(this).val();
        console.log(division);
        if(division !== "0" ){

            $.ajax({
            url: 'http://45.33.76.177:8500/address/districts/',
            type: 'get',
            data:{
                'division':division
            },
            success:function(data){
                //var result = $('select').find('option');
                console.log(data);
                var options ="";
                 $('select #district').children('option:not(:first)').remove();
                 for (var i = 0; i < data.length; i++) {
                 options += "<option value="+data[i]+">" + data[i] + "</option>";
            }
            $("#district").append(options);
        }


    });
      $('#district').show();

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
        //var result = $('select').find('option');
        console.log(data);
        var options ="";

        for (var i = 0; i < data.length; i++) {
      $('select #thana').children('option:not(:first)').remove();
        options += "<option value="+data[i]+">" + data[i] + "</option>";
        }
        $("#thana").append(options);

        }

    });
    $('#thana').show();
        console.log(district);

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
                    //var result = $('select').find('option');
                     console.log(data);
        var options ="";

        for (var i = 0; i < data.length; i++) {
        $('select #postal').children('option:not(:first)').remove();
        options += "<option value="+data[i]+">" + data[i] + "</option>";
        }
        $("#postal").append(options);
                    console.log(data[1]);
                }
            });
             $('#postal').show();

       }
  });
   }
   else{
   $('#district').hide();}

  });





});