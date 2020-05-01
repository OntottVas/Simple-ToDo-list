$('#add').click(() => {
    let todo = document.getElementById("do").value;
    $('ul').append("<li>" + todo + "</li>");
});

$('li').click(() => {
    $(this).css('text-decoration', 'line-through');
});