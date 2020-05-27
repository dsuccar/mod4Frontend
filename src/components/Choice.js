import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Choice extends Component {

    getChoiceCount = () => {
        if (this.props.picked){
            return this.props.choiceCount + 1
        } else {
            return this.props.choiceCount
        }
    }

    render() {
        const choiceCount = this.getChoiceCount()
        console.log(choiceCount)

        const choicePercent = Math.round((choiceCount / (this.props.total + 1)) * 100) + "%"
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
                            <h1>{choiceCount}</h1>
                            {(choicePercent === "NaN%") ? <h1> </h1> : <h1>{choicePercent}</h1>}
                        </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        }
    }
}

