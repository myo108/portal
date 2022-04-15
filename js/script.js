$(document).ready(function(){
    $(document).tooltip({
        position:{
            my:0,at:'top-20px',
        }
    });
    $('#toFF').click(function(){
        $('#TRPG').css(
            {
                "width":"0",
                "opacity":'1',
                "transition":'all 1s'
            }
        )
        $('#TRPGcontent').css(
            {
                "opacity":'0',
                "transition":'all 1s',
            }
            
        )
        $('#FFcontent').css(
            {
                "opacity":'1',
                "transition":'all 1s',
            }
            
        )
        $('#FFcontent').fadeIn();
        $('#FF').css(
            {
                "opacity":'1',
                "width":"80vw",
                "transition":'all 1s'
            }
        )
        $('#main').css({
            "width":"20vw",
            "transition":'all 1s',
        })
    })
    $('#toTRPG').click(function(){
        $('#FF').css(
            {
                "width":"0",
                "transition":'all 1s',
            }
        )
        $('#FFcontent').css(
            {
                "opacity":'0',
                "transition":'all 1s',
            }
            
        )
        $('#FFcontent').fadeOut();
        $('#TRPG').css(
            {
                "opacity":'1',
                "width":"80vw",
                "transition":'all 1s'

            }
        )
        $('#TRPGcontent').css(
            {

                "opacity":'1',
                "transition":'all 1s',
            }
            
        )
        $('#main').css(
            {
            "width":"20vw",
            "transition":'all 1s',
        })
    })
    $('#btnAll').click(function(){
        $(this).addClass('active');
        $('#btn2022').removeClass('active');
        $('#btn2021').removeClass('active');
        $('.2022').fadeIn();
        $('.2021').fadeIn();
    })
    $('#btn2022').click(function(){
        $(this).addClass('active');
        $('#btnAll').removeClass('active');
        $('#btn2021').removeClass('active');
        $('.2022').fadeIn();
        $('.2021').fadeOut();
    })
    $('#btn2021').click(function(){
        $(this).addClass('active');
        $('#btnAll').removeClass('active');
        $('#btn2022').removeClass('active');
        $('.2022').fadeOut();
        $('.2021').fadeIn();
    })
})