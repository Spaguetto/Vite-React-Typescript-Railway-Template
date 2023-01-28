// styled components
import Field from '@ui/Field';
import {Footer, Header, List} from '@components/Messenger/style';
import {Container, Button} from '@ui/TabNav/style';

// components
import Widget from '@components/Widget';
import Nav from 'react-bootstrap/Nav';
import User from '@components/Messenger/UsersList/User';
import ScrollContainer from '@components/ScrollContainer';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import PropTypes from 'prop-types';

// hooks
import {useRef, useState} from 'react';
import useContentHeight from '@hooks/useContentHeight';

// data placeholder
import {doctor, patient} from '@db/messenger';

const UserList = ({variant, user, onUserSelect, setModal, activeList, setActiveList}) => {
    const [query, setQuery] = useState('');
    const placeholder = variant === 'doctor' && activeList !== 'doctors' ? 'Search patients' : 'Search doctor or medical department';

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const drawList = (arr, role) => {
        const list = arr.filter(item => {
            const fullName = `${item.firstName} ${item.lastName}`;
            return fullName.toLowerCase().includes(query.toLowerCase()) && item.role === role;
        })
            .map(item => (
                <Nav.Link as="div" key={item.id} eventKey={item.id} onClick={() => onUserSelect(item.id)}>
                    <User user={user} data={item} onUserSelect={onUserSelect} setModal={setModal}/>
                </Nav.Link>
            ));
        return list.length ? list : <NoDataPlaceholder/>;
    }

    return (
        <Widget name="MessengerUserList">
            {
                variant === 'doctor' && (
                    <>
                        <Header ref={headerRef}>
                            <Container>
                                <Button className={activeList === 'patients' ? 'active' : ''} onClick={() => setActiveList('patients')}>
                                    Patients
                                </Button>
                                <Button className={activeList === 'doctors' ? 'active' : ''} onClick={() => setActiveList('doctors')}>
                                    Doctors
                                </Button>
                            </Container>
                        </Header>
                        <ScrollContainer height={height}>
                            <List className="track">
                                <div style={{margin: '2px 0'}}>
                                    {
                                        activeList === 'patients' ?
                                            drawList(doctor, 'patient') : drawList(doctor, 'doctor')
                                    }
                                </div>
                            </List>
                        </ScrollContainer>
                    </>
                )
            }
            {
                variant === 'patient' &&
                <ScrollContainer height={height}>
                    <List className="track">
                        {drawList(patient, 'doctor')}
                    </List>
                </ScrollContainer>
            }
            <Footer ref={footerRef}>
                <div className="search">
                    <Field type="search" placeholder={placeholder} value={query}
                           handler={e => setQuery(e.target.value)}/>
                    <button className={query !== '' ? 'visible' : ''} onClick={() => setQuery('')}>
                        <i className="icon icon-close"/>
                    </button>
                </div>
            </Footer>
        </Widget>
    );
}

UserList.propTypes = {
    variant: PropTypes.oneOf(['doctor', 'patient']).isRequired,
    onUserSelect: PropTypes.func.isRequired,
    user: PropTypes.any.isRequired
}

export default UserList;