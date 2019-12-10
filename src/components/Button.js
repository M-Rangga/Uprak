import React, { Component } from 'react';

const Button = props => {
    return(
        <div style={styles.button}>
     {props.title}
      </div>
    )
}

export default Button
const styles ={
    button:{
        display:'flex', backgroundColor: '#DADADA', padding: 16, paddingLeft: 40, paddingRight: 40, color: '#00B894', borderRadius: 10, marginLeft: 10
        }
}