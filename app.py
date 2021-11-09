from flask import Flask, request, jsonify
import json
import requests
from flask_cors import CORS
from config import nomics_api_key

app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods=['GET'])
def main():

    nomics_url = "https://api.nomics.com/v1/currencies/ticker?key=" + nomics_api_key + "&ids=BTC,ETH&interval=1d,30d&convert=USD"
    nomics_response = requests.request("GET", nomics_url)

    messari_url_eth = "https://data.messari.io/api/v1/assets/eth/metrics"
    messari_response_eth = requests.request("GET", messari_url_eth)

    messari_url_bit = "https://data.messari.io/api/v1/assets/btc/metrics"
    messari_response_bit = requests.request("GET", messari_url_bit)

    stats = {}
    stats['nomics'] = json.loads(nomics_response.text)
    stats['messari_response_eth'] = json.loads(messari_response_eth.text)
    stats['messari_response_bit'] = json.loads(messari_response_bit.text)

    return stats
