document.addEventListener("DOMContentLoaded", () => {
    let show = document.getElementById("showContent")
    let show2 = document.getElementById("showContent2")
    let content = document.getElementById("hide")

    show.addEventListener("click", () => {
        content.style.display = "flex"
        show.style.display = "none"
        show2.style.display = "inline-block"
    })

    show2.addEventListener("click", () => {
        content.style.display = "none"
        show.style.display = "inline-block"
        show2.style.display = "none"
    })
});
/*document.getElementsById('hider').onclick = function() {
    document.getElementsById('hide').display= flex;
}*/
document.addEventListener("DOMContentLoaded", () => {
    let show_about = document.getElementById("about-btn1")
    let show_about2 = document.getElementById("about-btn2")
    let show_about3 = document.getElementById("about-btn3")
    let show_about4 = document.getElementById("about-btn4")
    let content_about = document.getElementById("hide__text-1-2")
    let content_about2 = document.getElementById("hide__text-2-2")

    show_about.addEventListener("click", () => {
        content_about.style.display = "flex"
       
        show_about2.style.display = "inline-block"
        show_about.style.display = "none"
    })
    show_about2.addEventListener("click", () => {
        content_about.style.display = "none"
        
        show_about.style.display = "inline-block"
        show_about2.style.display = "none"
    })
    show_about3.addEventListener("click", () => {
        
        content_about2.style.display = "flex"
        show_about4.style.display = "inline-block"
        show_about3.style.display = "none"
    })
    show_about4.addEventListener("click", () => {
        
        content_about2.style.display = "none"
        show_about3.style.display = "inline-block"
        show_about4.style.display = "none"
    })
});
$(function () {

    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    
        $('select').styler();




});
/*
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); //  internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }*/

    $(document).ready(function() {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    });

