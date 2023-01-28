// styled components
import {HeaderContainer} from '@components/Messenger/Header/style';

// components
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import ActionButton from '@ui/ActionButton';

// utils
import PropTypes from 'prop-types';

const Header = ({user, variant, elRef}) => {
    const {role, firstName, lastName, online, avatar} = user;

    return (
        <HeaderContainer ref={elRef}>
            <div className="main">
                <Avatar avatar={avatar} online={online} alt={`${firstName} ${lastName}`}/>
                <h3 className="title">{role === 'doctor' && 'Dr.'} {firstName} {lastName}</h3>
            </div>
            <div className="actions">
                {
                    variant === 'doctor' && role !== 'doctor' ? <ActionButton/> : null
                }
                <ShapeButton shape="round" icon="phone" label="Call"/>
            </div>
        </HeaderContainer>
    )
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['doctor', 'patient']).isRequired
}

export default Header;