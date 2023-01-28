// styled components
import {Menu, UserWrapper} from '../style';

// components
import Avatar from '@ui/Avatar';

// utils
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {useState} from 'react';

// assets
import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';

const CurrentUser = () => {
    const [open, setOpen] = useState(false);
    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    const src = {
        jpg: doc1jpg,
        webp: doc1webp
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserWrapper>
                <Avatar avatar={src} alt="avatar"/>
                <div className="info">
                    <span className="h3">Sallie McBride</span>
                    <span className="position">Surgeon</span>
                    <Menu className={open ? 'visible' : ''}>
                        <button>
                            <i className="icon icon-circle-user" /> Change user
                        </button>
                        <button>
                            <i className="icon icon-logout" /> Logout
                        </button>
                    </Menu>
                </div>
                <button className="trigger" onClick={handleClick} aria-label="Show menu">
                    <i className="icon icon-chevron-down" />
                </button>
            </UserWrapper>
        </ClickAwayListener>
    )
}

export default CurrentUser;