#!/bin/bash

mkdir -p images && cd images

# Place your corresponding assets the right location as stated to make the application work properly.
# @see https://stackoverflow.com/questions/4944295/skip-download-if-files-exist-in-wget
# The corresponding licenses should be respected; use the images and audios at your own risk.

# Globally icons needed.
wget -N -O icon.png https://www.iconfinder.com/icons/1553066/download/png/128
wget -N -O traveler.png https://www.iconfinder.com/icons/4698587/download/png/128

# Personal Applications
wget -N -O dashboards.png https://www.iconfinder.com/icons/4170656/download/png/128
wget -N -O workspace.png https://cdn2.iconfinder.com/data/icons/free-version/128/workplace-128.png
wget -N -O schedules.png https://www.iconfinder.com/icons/5027858/download/png/128
wget -N -O noting.png https://www.iconfinder.com/icons/1296370/download/png/128

# Campus Applications
wget -N -O activities.png https://cdn2.iconfinder.com/data/icons/free-version/128/baseball-128.png
wget -N -O satelite.png https://cdn2.iconfinder.com/data/icons/free-version/128/satelite-128.png
cp satelite.png marketplace.png
wget -N -O calendar.png https://www.iconfinder.com/icons/1296363/download/png/128
wget -N -O news.png https://www.iconfinder.com/icons/221797/download/png/128

# Infra Tools
wget -N -O text-tailor.png https://www.iconfinder.com/icons/3213307/download/png/128
