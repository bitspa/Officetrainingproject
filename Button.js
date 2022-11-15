import React, { Component } from 'react'
import {Container} from '../Styled/ButtonSty'
import {Button} from '../Styled/ButtonSty'
export default class Button2 extends Component {
  render() {
    return (
        <Container>
        <Button secondary>click</Button>
        <Button primary>cancel</Button>
      </Container>
    )
  }
}
