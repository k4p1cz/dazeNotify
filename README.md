Hello, thank you for buying our script.

1. How to install
This script is Dron'n Go and standalone.

2. Usage
You can trigger notification either on Client side or Server side by using these examples:

# Client
    exports['dazeNotify']:Alert("Title", "Message", Time, 'type')
# Server
    TriggerClientEvent('dazeNotify:Alert', source, "Title", "Message", Time, 'type')

Also this script is fully replacing okokNotify as it's based on same style of functionality, if you want to replace it just rename this script to okokNotify and rename colors like this:
 - Red - warning or error
 - Green - success
 - Blue - info

3. Add own colors
Of course you can add own colors by puting this to script.js line 55!
```
            else if (event.data.color == 'color') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.wrapper-${number}`).addClass('color color-border')
                sound.play();
            }
```

And this to style.css line 74!
```
/*  color */

.color {
    background-color: rgba(20, 20, 20, 0.85);
    color: #fff;
    padding: 5px 5px 5px 5px;
}

.color-border {
    border: 2.5px solid color;
}
```