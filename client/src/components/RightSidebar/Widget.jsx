import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src = { pen } alt="pen" width="18px"/>
                    <p>Obervability is key to the future of software (and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src = { pen } alt="pen" width="18px"/>
                    <p>Podcasr 374: How valuable is your screen name?</p>
                </div>
            </div>
            <h4>Features on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src = { comment } alt="pen" width="18px"/>
                    <p>Review queue workflows - Final release....</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src = { comment } alt="pen" width="18px"/>
                    <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src = { blacklogo } alt="pen" width="18px"/>
                    <p>Outdated Answers: accepted answer is now unpinned on stack overflow</p>
                </div>
            </div>
            <h4>Hot meat Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Obervability is key to the future of software (and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>Podcasr 374: How valuable is your screen name?</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>Podcasr 374: How valuable is your screen name?</p>
                </div>
            </div>
        </div>
    )
}


export default Widget
