import React from 'react'

import {Link} from 'react-router-dom'

const Questions = ({ question }) => {
    return (
        <div className='display-question-container'>
            <div className='display-votes-ans'>
                <p>{ question.votes }</p>
                <p>votes</p>
            </div>
            <div className='display-votes-ans'>
                <p>{ question.noOfAnswers }</p>
                <p>answers</p>
            </div>
            <div className='display-questions-details'>
                <Link className='question-title-link' to = {`/Questions/${question.id}`}> {question.questionTitle} </Link>
                <div className='display-tags-time'>
                    <div className='display-tags'>
                    {
                            question.questionTags.map(tag => (
                            <p key={tag}>{tag}</p>
                        ))
                    }
                    </div>
                </div>
            </div>
            <p className='display-time'>
                asked {question.askedOn} {question.userPosted}
            </p>
        </div>
    )
}

export default Questions
