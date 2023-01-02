function Alert(title, message, time, color)
	SendNUIMessage({action = 'open', title = title, color = color, message = message, time = time})
end

RegisterNetEvent('dazeNotify:Alert')
AddEventHandler('dazeNotify:Alert', function(title, message, time, color)
	Alert(title, message, time, color)
end)

RegisterCommand('daze_ntf', function()
	exports['dazeNotify']:Alert("test of Daze Notification", "this is DazeNotify", 5000, 'green')
end)
