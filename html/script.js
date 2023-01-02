$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 0.45;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.lead').append(`
            <div class="wrapper-${number}">
                <div class="notification_main-${number}">
                    <div class="title-${number}"></div>
                    <div class="text-${number}">
                        ${event.data.message}
                    </div>
                </div>
            </div>`)
            $(`.wrapper-${number}`).css({
                "margin-bottom": "10px",
                "width": "275px",
                "margin": "0 0 8px 180px",
                "border-radius": "10px"
            })
            $('.notification_main-'+number).addClass('main')
            $('.text-'+number).css({
                "font-size": "14px"
            })

            if (event.data.color == 'blue') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.wrapper-${number}`).addClass('blue blue-border')
                sound.play();
            } else if (event.data.color == 'green') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.wrapper-${number}`).addClass('green green-border')
                sound.play();
            } else if (event.data.color == 'red') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.wrapper-${number}`).addClass('red red-border')
                sound.play();
            } else if (event.data.color == 'grey') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.wrapper-${number}`).addClass('grey grey-border')
                sound.play();
            }

            anime({
                targets: `.wrapper-${number}`,
                translateY: 50,
                duration: 1500,
                easing: 'spring(1, 70, 100, 10)',
            })
            setTimeout(function () {
                anime({
                    targets: `.wrapper-${number}`,
                    translateY: -1000,
                    duration: 1500,
                    easing: 'spring(1, 80, 100, 0)'
                })
                setTimeout(function () {
                    $(`.wrapper-${number}`).remove()
                }, 1500)
            }, event.data.time)
        }
    })
})