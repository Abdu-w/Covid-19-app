
import React, {Component, createContext  } from 'react'
import './App.css'
import axios from 'axios'
export const GlobalState = createContext()

export default class  GlobalContext extends Component {
  state = {
    data: {},
    globalData: {},
    countries: [],
    selectedCountryData: {},
  }
  
  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary-`).then(res => {
      this.setState({
        data: res.data,   
        countries: res.data.Countries.map(countryData => countryData.Country),
        globalData: res.data.Global
      })
    ;
    }).catch(error => {
      console.log (error)
    })
  }

  selectCountry = (countryName) => {
    const countryArr = 
        this.state.data.Countries.filter(countryData => countryData.Country === countryName)
    this.setState({
      selectedCountryData: countryArr[0]
    })
  }


  render() {
    const context = {
      globalData: this.state.globalData, 
      countries: this.state.countries,
      selectedCountryData: this.state.selectedCountryData,
      selectCountry: this.selectCountry,
    }

    return (
      <div className='App'>
        <GlobalState.Provider value={context}>
            { this.props.children }
        </GlobalState.Provider>
      </div>
  )}
}

const CountryDataBoard = ({countryData}) => (
  <React.Fragment>
    <p>TotalRecovered: {countryData.TotalRecovered}</p>
  </React.Fragment>
)


function HomePage(){
  return( 
    <GlobalState.Consumer>
       {(context) => (
            <h2>Global Stats</h2>
        
       )}
   </GlobalState.Consumer>
  )
}










function App() {
  return (
    <div className="App">
      <header className="App-header">
        < GlobalContext />
      </header>
    </div>
  );
}

export default App;
