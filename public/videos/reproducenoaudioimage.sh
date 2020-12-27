input_file='./studiogoindol(itsokayevenifyoucantseetheend).mp4'
output_file='./studiogoindol(itsokayevenifyoucantseetheend)-ns.mp4'

ffmpeg -i $input_file -c copy -an $output_file