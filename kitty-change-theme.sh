#!/bin/bash

echo 'PLEASE INSTALL ROFI(ON LINUX) OR CHOOSE(MACOS) FIRST!!!!!'

theme=$(find $HOME/.config -name 'kitty-themes')/themes

cd $theme

if [[ $(uname) == *'Darwin'* ]]; then
    result=$(ls | choose)
else
    result=$(ls | rofi -dmenu)
fi

if [ -f "$theme/../../theme.conf" ]; then
    rm "$theme/../../theme.conf"
fi

ln -s "$theme/$result" "$theme/../../theme.conf"

if [ -f "$theme/../../kitty.conf" ]; then
    cat 'kitty.conf' > 'temp'
    echo $'include ./theme.conf\n' > 'kitty.conf'
    cat 'temp' >> 'kitty.conf'
    rm 'temp'
else 
    cd ../../
    echo $'include ./theme.conf\n' > 'kitty.conf'
fi

killall kitty
