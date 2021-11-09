import React from 'react' 
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messari_eth: 0,
      messari_bit: 0,
      nomics_bit: 0,
      nomics_eth: 0,
      bit_min: '',
      eth_min: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000').then(res => {
      
      const messari_eth = res.data['messari_response_eth']['data']['market_data']['price_usd']
      const messari_bit = res.data['messari_response_bit']['data']['market_data']['price_usd']
      const nomics_bit = Number(res.data['nomics'][0]['price'])
      const nomics_eth = Number(res.data['nomics'][1]['price'])

      this.setState({messari_bit: messari_bit})
      this.setState({messari_eth: messari_eth})
      this.setState({nomics_bit: nomics_bit})
      this.setState({nomics_eth: nomics_eth})
      console.log(Math.min(this.state.messari_bit, this.state.nomics_bit))
      console.log(Math.min(this.state.messari_eth, this.state.nomics_eth))
      // const int_bit_min = Math.min(this.state.messari_bit, this.state.nomics_bit)
      // const int_eth_min = Math.min(this.state.messari_eth, this.state.nomics_eth)

      if (messari_bit < nomics_bit) {
        this.setState({bit_min: 'Messari'})
      }
      else {
        this.setState({bit_min: 'Nomics'})
      }

      if (messari_eth < nomics_eth) {
        this.setState({eth_min: 'Messari'})
      }
      else {
        this.setState({eth_min: 'Nomics'})
      }

      console.log(this.state.bit_min)
      console.log(this.state.eth_min)
      

    })
  }

  render () {
    return (
      <div>
        <h3>Messari's Prices</h3>
        <p>BTC: {this.state.messari_bit}</p>
        <p>ETH: {this.state.messari_eth}</p>
        <h3>Nomics's Prices</h3>
        <p>BTC: {this.state.nomics_bit}</p>
        <p>ETH: {this.state.nomics_eth}</p>

        <h3>Recommended prices:</h3>
        <p>BTC: {this.state.bit_min}</p>
        <p>ETH: {this.state.eth_min}</p>
      </div>
      
    )
  }
}

export default Home;