#!/bin/bash

mkdir -p images sounds

# Place your corresponding assets the right location as stated to make the application work.
# @see https://stackoverflow.com/questions/4944295/skip-download-if-files-exist-in-wget
# The corresponding licenses should be respected; use the images and audios at your own risk.
wget -N -O images/icon.png https://www.iconfinder.com/icons/1553066/download/png/128
wget -N -O sounds/noti-regular.mp3 https://notificationsounds.com/notification-sounds/clearly-602/download/mp3
wget -N -O sounds/noti-general.mp3 https://notificationsounds.com/message-tones/open-up-587/download/mp3
wget -N -O sounds/noti-important.mp3 https://notificationsounds.com/notification-sounds/eventually-590/download/mp3
wget -N -O sounds/noti-warning.mp3 https://notificationsounds.com/notification-sounds/inflicted-601/download/mp3
wget -N -O sounds/noti-error.mp3 https://notificationsounds.com/animals/bullfrog-477/download/mp3
