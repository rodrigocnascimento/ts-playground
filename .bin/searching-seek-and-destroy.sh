#!/bin/bash

md5sum_before=""
md5sum_after=""

inotifywait -r -m -e modify src --format "%e %w%f" 2>/dev/null |
	while read -r event file; do
		md5sum_before="$md5sum_after"
		md5sum_after=$(md5sum "$file" | awk '{ print $1 }')

		if [ "$md5sum_before" != "$md5sum_after" ]; then
			npm run start
			printf "\n"
			printf "$(date +"%Y-%m-%d %H:%M:%S %Z")\n"
		fi
	done
