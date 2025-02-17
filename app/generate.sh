# brew install protobuf
# dart pub global activate -sgit https://github.com/cheddar-me/twirpd-protoc-plugin.git

protoc \
  --twirpd_out=app/lib/generated \
  -I proto flutter_lodz.proto