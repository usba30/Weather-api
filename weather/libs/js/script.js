	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: parseFloat($('#lat').val()),
				lng: parseFloat($('#lng').val())
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtElevation').html(result['data']['elevation']);
					$('#txtObservation').html(result['data']['observation']);
					$('#txtClouds').html(result['data']['clouds']);
					$('#txtHumidity').html(result['data']['humidity']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});