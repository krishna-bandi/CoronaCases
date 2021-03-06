import React from 'react';

import {Cards,Charts,CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './api/index';
class App extends React.Component {
    state = {
        data : {},
        country:'',
    }
   async componentDidMount()
    {
       
         const fdata  =await fetchData();
        
        this.setState({data:fdata});
        
    }
    handleCountryChange= async(country) =>
{
    const fdata  =await fetchData(country);
   console.log(fdata);
    //fetch the data
    this.setState({data : fdata,country : country});

}
    render(){
        const {data, country}=this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Charts data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
            </div>
            

        )
    }
   

}

export default App;