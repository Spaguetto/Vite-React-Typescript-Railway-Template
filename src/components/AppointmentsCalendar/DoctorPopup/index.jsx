// styled components
import {Container} from './style';

// components
import ShapeButton from '@ui/ShapeButton';
import Btn from '@ui/Btn';
import ModalWindow from '@components/ModalWindow';

const DoctorPopup = ({name, open, handler, elemsHeight}) => {
    return (
        <ModalWindow isVisible={open} visibilityHandler={handler}>
            <Container className={open ? 'visible' : ''} top={elemsHeight}>
                <div className="header">
                    <div className="user">{name}</div>
                    <ShapeButton shape="round" icon="comment-text" label="Message"/>
                </div>
                <div className="main">
                    <div className="track">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="hours">
                        {
                            [9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((hour, index) => (
                                <span key={index}>{hour}</span>
                            ))
                        }
                    </div>
                </div>
                <Btn text="Make an appointment" handler={() => handler(false)}/>
            </Container>
        </ModalWindow>
    )
}

export default DoctorPopup;