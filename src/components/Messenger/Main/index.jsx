// styled components
import {Container, Animation} from '@components/Messenger/style';

// components
import Header from '@components/Messenger/Header';
import Message from '@components/Messenger/Message';
import Input from '@components/Messenger/Input';
import Lottie from 'lottie-react';
import GroupSeparator from '@ui/GroupSeparator';
import Tab from 'react-bootstrap/Tab';
import ScrollContainer from '@components/ScrollContainer';

// utils
import moment from 'moment';

// hooks
import {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import useContentHeight from '@hooks/useContentHeight';

// assets
import typing from '@assets/typing.json';

const Main = ({user, variant}) => {
    const doctor = useSelector(state => state['messenger']['doctor']);
    const patient = useSelector(state => state['messenger']['patient']);
    const db = variant === 'patient' ? patient : doctor;
    const currentUser = user && db.find(item => item.id === user);

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const trackRef = useRef(null);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.scrollTop = trackRef.current.scrollHeight;
        }
    }, [db]);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.scrollTo(0, 0);
        }
    }, [user]);

    return (
        <Container>
            {
                currentUser && <Header variant={variant} user={currentUser} elRef={headerRef}/>
            }
            <ScrollContainer height={height}>
                <div className="track" ref={trackRef} style={{padding: '20px 0'}}>
                    {
                        db.map(item => {
                            const uniqueDates = [...new Set(item.chatHistory.map(message => moment(message.date).format('DD.MM.YYYY')))];
                            return (
                                <Tab.Pane eventKey={item.id} key={item.id}>
                                    {
                                        uniqueDates.map(date => {
                                            return (
                                                <div className="group" key={`${item.id}-${date}`}>
                                                    <GroupSeparator
                                                        text={date === moment().format('DD.MM.YYYY') ? 'Today' : date}/>
                                                    {
                                                        item.chatHistory.filter(message => moment(message.date).format('DD.MM.YYYY') === date)
                                                            .map((message, i) => {
                                                                return (
                                                                    <Message
                                                                        key={message.id}
                                                                        data={message}
                                                                        senderName={`${item.firstName} ${item.lastName}`}/>
                                                                )
                                                            })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        item.isTyping &&
                                        <Animation>
                                            <Lottie animationData={typing}/>
                                        </Animation>
                                    }
                                </Tab.Pane>
                            )
                        })
                    }
                </div>
            </ScrollContainer>
            <Input db={variant} id={user} elRef={footerRef}/>
        </Container>
    )
}

export default Main;