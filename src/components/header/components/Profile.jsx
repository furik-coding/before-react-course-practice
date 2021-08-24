import React from 'react';
import i from '../../../i/man-t.png';

const Profile = (props) => {

    return (
        <div className="header-profile">
            <div className="header-profile__photo"><img src={i} alt="" /></div>
            <div className="header-profile__info">
                <div className="header-profile__name">Vadym Furik</div>
                <div className="header-profile__login">fureg</div>
            </div>
        </div>
    )
}

export default Profile;