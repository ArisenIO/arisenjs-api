
function arisecli() {
  docker-compose exec awalletd arisecli -u http://aosd:8888 --wallet-url http://localhost:8900 "$@"
}

function awalletd() {
  docker exec docker_aosd_1 awalletd "$@"
}

function pkill() {
  docker exec docker_aosd_1 pkill "$@"
}
