import React from 'react' 
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messari_eth: 0,
      messari_bit: 0,
      nomics_bit: 0,
      nomics_eth: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000').then(res => {
      
      const messari_eth = res.data['messari_response_eth']['data']['market_data']['price_usd']
      const messari_bit = res.data['messari_response_bit']['data']['market_data']['price_usd']
      const nomics_bit = res.data['nomics'][0]['price']
      const nomics_eth = res.data['nomics'][1]['price']
      this.setState({messari_bit: messari_bit})
      this.setState({messari_eth: messari_eth})
      this.setState({nomics_bit: nomics_bit})
      this.setState({nomics_eth: nomics_eth})
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
      </div>
      
    )
  }
}

export default Home;