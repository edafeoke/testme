import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div style={styles.container}>
        <Link style={{textDecoration:'none'}} to='/'><h2 style={styles.span}>Test<span style={styles.title}>SK</span></h2></Link>
        <nav style={styles.nav}>
          <ul style={styles.nav}>
            <li style={styles.li}><Link style={styles.link} to='/login'>Sign in</Link></li>
            <li style={styles.li}><Link style={styles.link} to='/register'>Sign up</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar

const styles = {
  container : {
    backgroundColor:'#fff',
    minHeight:70,
    display: 'flex',
    alignItems:'center',
    width:'100%',
    borderBottom:'1px solid #ccc',
    justifyContent:'space-between',
  },
  title: {
    color:'#484848',
    fontSize: '1.6rem',
    cursor: 'pointer',
    textDecoration:'none',
  },
  span:{
    marginLeft: 10,
    color:'#FF5A5F',
    fontSize:'1.4rem',
    textDecoration:'none',
  },
  nav:{
    display:'flex',
    flexDirection:'row',
    listStyleType:'none',
    marginRight:10,
  },
  li:{
    marginLeft: 10,
  },
  link:{
    padding: 15,
    borderRadius:5,
    textDecoration:'none',

  }
}