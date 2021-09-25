$(document).ready(() => {
    $("#btn_guardar").click(() => {
        const comment = $("#comment").val();
        $.ajax({
            async: true,
            type: "POST",
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            url: "comment.php",
            data: "comment=" + comment,
            beforeSend: () => { },
            success: (data) => {
                //console.log(data)
                $("#container").append("<div>" + data + "</div>")
            },
            //timeout: 4000,
            error: (err) => {
                console.log(err)
            }
        });
        return false;
    })
})