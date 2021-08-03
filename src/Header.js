import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

export default function Header() {
    return (
        <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header___icon"/>
        </IconButton>
        <img className="header___logo" src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg" alt="" />
        <IconButton>
        <ForumIcon fontSize="large" className="header___icon"/>
        </IconButton>
        </div>
    )
}
