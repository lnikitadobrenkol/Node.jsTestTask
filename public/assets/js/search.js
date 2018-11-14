function search(message ) {
    $.ajax({
        type: "GET",
        url: "/search/" + message.date + "/" + message.from + "/" + message.to,
        dataType: "json"
    })
        .done(function (data) {
            console.log('GET response:', JSON.stringify(data, "", 2));
            $('#getResponse').html(JSON.stringify(data, "", 2));
        })
        .fail(function (jqXHR, textStatus, err) {
            console.log('AJAX error response: ', textStatus);
        });
}

function  getInput() {
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const date = document.getElementById('date');

    const massage = {
        from: from.value,
        to: to.value,
        date: date.value
    };

    search(massage);
}
