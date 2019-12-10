import React, { Component } from 'react';

const Button2 = props => {
    return(
        <div style={styles.button}>
     {props.title}
      </div>
    )
}

export default Button2
const styles ={
    button:{
        display:'flex', backgroundColor: '#00B894', padding: 16,paddingLeft: 40, paddingRight: 40, color: 'whitesmoke', borderRadius: 10, borderStyle: 'solid'
    }
}