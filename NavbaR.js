import React, { Component } from 'react'
import {Navbar} from '../Styled/NavbarSty';
export default class Navbar2 extends Component {
    render() {
      return (
        <Navbar>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#About">About</a></li>
      </ul>
      </Navbar>
      )
    }
  }
