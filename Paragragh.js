import React, { Component } from 'react'
import {Paragraph} from '../Styled/ParagraghSty'
import {Content} from '../Styled/ParagraghSty'
import {Container} from '../Styled/ButtonSty'
export default class Paragraph2 extends Component {
  render() {
    return (
        
        <Container>
            <Content>
        <Paragraph>
        “I love rain. It makes me feel like it’s not just me – that other people are feeling it too.”
        – John Green 
        </Paragraph>
        </Content>
        </Container>
        
    )
  }
}
