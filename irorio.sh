
###########################################################
# ワンライナーずんだもん

# server
docker run --rm -it -p '50021:50021' voicevox/voicevox_engine:cpu-ubuntu20.04-latest

# speaking!
_speaker=3 # ずんだもん
_text="ずんだもんなのだ"
_host="localhost:50021"
_text_encoded=$(node -e 'console.log(encodeURI(`'$_text'`))'); _temp=`mktemp`; curl -H 'accept: application/json' -XPOST "$_host/audio_query?text=$_text_encoded&speaker=$_speaker" | tee query.json | curl -H 'Accept: audio/wav' -H 'Content-Type: application/json' -XPOST "$_host/synthesis?speaker=$_speaker&enable_interrogative_upspeak=true" -d @- > $_temp; afplay $_temp; rm -f $_temp

