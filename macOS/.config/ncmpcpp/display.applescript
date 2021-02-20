#!/usr/bin/env osascript

set command to "/usr/local/bin/mpc current | sed 's/.mp3//g'"
set result to do shell script command
display notification "Now Playing: " & result
