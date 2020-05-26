import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Choice extends Component {

    render() {
        const newChoiceCount = (this.props.choiceCount + 1)
        const choicePercent = Math.round((this.props.choiceCount / this.props.total) * 100) + "%"
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
                            <h1>{newChoiceCount}</h1>
                            {(choicePercent === "NaN%") ? <h1> </h1> : <h1>{choicePercent}</h1>}
                        </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        }
    }
}

