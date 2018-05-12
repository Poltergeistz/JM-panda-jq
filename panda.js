$(document).ready(function(){
    console.log('toto est petit');
    $(".panda").click(function(){
        var data = $(this).attr('data-type')
        // Variable data qui va chercher l'attribu du data-type
        var tendance = $(this).attr('data-tendance')
        // variable tendance qui fait la même chose, sauf qu'elle va chercher l'attribu data-tendance
        console.log(
        data);
        alert(data + " = " + tendance)
});
    });
