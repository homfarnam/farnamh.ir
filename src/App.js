import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap' 
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:"Farnam Homayounfar",
       headerLinks:[
         {title:'Home',path:'/'},
         {title:'About',path:'/'},
         {title:'Contact',path:'/'}
       ],
       Home:{
         title:'Farnam Homayounfar',
         job:'Frontend developer'
       },
       About:{
        title:'About me',
        
      },
      Contact:{
        title:'Contact with me',
        
      },
      
    }
  }
  
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true} >
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand> FARNAM </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'> Home</Link>
                <Link className='nav-link' to='/about'> About me</Link>
                <Link className='nav-link' to='/contact'> Contact me</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={()=> <HomePage title={this.state.Home.title} job={this.state.Home.job} />} />
          <Route path='/about'  render={()=> <About title={this.state.About.title} />} />
          <Route path='/contact'  render={()=> <Contact title={this.state.Contact.title} />} />


          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App
