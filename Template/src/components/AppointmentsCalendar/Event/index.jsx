// styled components
import {StyledEvent, EventModal} from './style';

// components
import ModalWindow from '@components/ModalWindow';

// utils
import moment from 'moment';
import PropTypes from 'prop-types';

// hooks
import {useTheme} from 'styled-components';
import {useState} from 'react';
import useWindowSize from '@hooks/useWindowSize';

const Event = ({event, variant}) => {
    const [open, setOpen] = useState(false);
    const {theme} = useTheme();
    let isEnded = moment(event.end).isBefore(moment());
    const isDesktop = useWindowSize().width >= 1280;

    const getTakenSlots = () => {
        const duration = moment.duration(moment(event.end).diff(moment(event.start)));
        return Math.ceil(duration.asMinutes() / 30);
    }

    const Title = () => <span className="event-title">{event.name}</span>;

    return (
        <StyledEvent className={`event event-${variant} ${isEnded ? 'isEnded' : ''}`}
                     type={event.type}
                     mode={theme}
                     slots={getTakenSlots()}>
            {event.type !== 'available' ? <Title/> : <i className="icon icon-plus-circle" />}
            <span className="overlay" onClick={() => setOpen(true)}/>
            {
                !isDesktop && event.type !== 'disabled' && (
                    <ModalWindow visibilityHandler={setOpen} isVisible={open}>
                        <EventModal>
                            <div className="block">
                                <span className="label">Event:</span>
                                <span className="value">{event.name}</span>
                            </div>
                            <div className="block">
                                <span className="label">Start:</span>
                                <span className="value">
                                    <span>{moment(event.start).format('MMM, D')}</span>
                                    at
                                    <span>{moment(event.start).format('HH:mm A')}</span>
                                </span>
                            </div>
                            <div className="block">
                                <span className="label">End:</span>
                                <span className="value">
                                    <span>{moment(event.end).format('MMM, D')}</span>
                                    at
                                    <span>{moment(event.end).format('HH:mm A')}</span>
                                </span>
                            </div>
                        </EventModal>
                    </ModalWindow>
                )
            }
            <div className="cover">
                <i className="icon icon-circle-minus-regular"/>
            </div>
        </StyledEvent>
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['day', 'week', 'month']).isRequired
}

export default Event;