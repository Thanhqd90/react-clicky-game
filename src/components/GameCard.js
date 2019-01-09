import React from 'react'
import { Col, CardPanel } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GameCard.css'

const GameCard = props => (
    <Col s={6} m={4} l={3}>
        <CardPanel onClick={() => props.clickHandler(props.icon.iconName)} className={"hoverable black lighten-4 white-text center" + (props.correct === false ? " shake" : "")}>
            <FontAwesomeIcon icon={props.icon} />
        </CardPanel>
    </Col>
)

export default GameCard
