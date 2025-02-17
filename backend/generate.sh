# brew install protobuf
# npm install twirp-ts

PROTOC_GEN_TWIRP_BIN="./node_modules/.bin/protoc-gen-twirp_ts"
PROTOC_GEN_TS_BIN="./node_modules/.bin/protoc-gen-ts"

OUT_DIR="./src/generated"

protoc -I ../proto ../proto/flutter_lodz.proto \
--plugin=protoc-gen-ts=${PROTOC_GEN_TS_BIN} \
--plugin=protoc-gen-twirp_ts=${PROTOC_GEN_TWIRP_BIN} \
--ts_out=${OUT_DIR} \
--twirp_ts_out=${OUT_DIR}
