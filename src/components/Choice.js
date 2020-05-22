import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Choice extends Component {

    render() {
        if (!this.props.choiceMade){
            return(
                <Card onClick={this.props.handleChoice}>
                    <Card.Content>
                        <Card.Description>
                        <div className='choice'>
                            <h1>{this.props.choice}</h1>
                        </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        } else {
            return(
                <Card>
                    <Card.Content>
                        <Card.Description>
                        <div className='choice'>
                            <h1>Choice Stats!!</h1>
                        </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        }
    }
}

