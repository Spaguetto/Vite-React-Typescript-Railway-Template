// styled components
import {UserItem} from '@components/Messenger/UsersList/User/style';

// components
import Avatar from '@ui/Avatar';
import {QtyBadge} from '@ui/Badge/style';

// utils
import PropTypes from 'prop-types';

const User = ({data, user, onUserSelect, setModal}) => {
    const {firstName, lastName, online, isTyping, chatHistory, avatar} = data;
    const unread = chatHistory.filter(item => !item.read).length;
    const lastUnread = chatHistory.filter(item => !item.read)[unread - 1];
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleClick = () => {
        onUserSelect(data.id);
        smallScreen && setModal(true);
    }

    const Preview = () => {
        if (lastUnread.audio !== undefined) {
            return (
                <span className="preview">
                    <i className="icon icon-play"/> Audio message
                </span>
            )
        } else if (lastUnread.media !== undefined) {
            return (
                <span className="preview">
                    <i className="icon icon-image"/> Photo
                </span>
            )
        } else if (isTyping) {
            return (
                <span className="preview">
                    <i className="icon icon-pen"/> Typing...
                </span>
            )
        } else {
            return <span className="preview">{lastUnread.message}</span>
        }
    }

    return (
        <UserItem className={user === data.id ? 'active' : ''} onClick={handleClick} hasUnread={unread > 0}>
            <div className="container">
                <div className="main">
                    <Avatar avatar={avatar} alt={`${firstName} ${lastName}`} online={online} />
                    <div className="main_wrapper">
                        <span className="name">{firstName} {lastName}</span>
                        {
                            lastUnread ? <Preview /> : data.speciality && <span className="preview">{data.speciality}</span>
                        }
                    </div>
                </div>
                {unread > 0 && <QtyBadge className="qty-badge">{unread}</QtyBadge>}
            </div>
        </UserItem>
    )
}

User.propTypes = {
    data: PropTypes.object.isRequired,
    onUserSelect: PropTypes.func.isRequired
}

export default User;