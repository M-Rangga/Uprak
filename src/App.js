import React, { Component } from 'react';
import Background from './bg.png';
import { Button, Button2 } from './components';

class App extends Component {
    render(){  
      return(
          <div style={styles.background}>
          <div style={styles.overlay}>
                <div style={styles.container}>
                        <div style={styles.h1}>
                            Save your Earth
                            <div style={styles.h2}>
                            Menanam satu pohon, menghasilkan sejuta manfaat.
                            </div>
                        </div>
                        <div style={styles.wrapperInput}> 
                            <Button2 title="Donasi Pohon"/>
                            <Button title="Hubungi Kami"/>
                        </div>

                    </div>
                </div>
            </div>
      );
    }
  }
  
  let w = window.innerWidth;
  let h = window.innerHeight;
  const styles = {
    background: {
      display: 'flex',
      backgroundImage: `url(${Background})`,
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right:0,
      backgoundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  }, 

  container: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Pangolin'
  },
  h1: {
    position: 'absolute',
    left: '156px',
    top: '269px',

    fontFamily: 'Pangolin',
    fontStyle: 'normal',
    fontSize: '48px',
  },
  h2: {
    left: '1px',
    top: '50px',
    
    fontFamily: 'Pangolin',
    fontStyle: 'normal',
    fontSize: '24px',
  },

  wrapperInput: {
    display: 'flex', 
    marginTop: 400,
    marginLeft: 150
  }, 

  subTittle: {
      color: 'white',
      fontFamily: 'Pangolin',
      marginTop: 20
  },
 }
  
  export default App;
  
  
