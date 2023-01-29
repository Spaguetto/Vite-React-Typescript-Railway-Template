// styled components
import {Main} from './style';
import {Main as SlideContent, Footer} from '@components/AppointmentItem/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import WidgetNav from '@components/Widget/WidgetNav';
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import Truncated from '@components/Truncated';
import MenuDots from '@ui/MenuDots';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Thumbs} from 'swiper';

// utils
import {nanoid} from 'nanoid';
import moment from 'moment';

// hooks
import {useState, useEffect} from 'react';
import {useInterfaceContext} from '@contexts/interfaceContext';

// data placeholder
import {appointments} from '@db/appointments';

const NextPatient = () => {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [dateSwiper, setDateSwiper] = useState(null);
    const {direction} = useInterfaceContext();

    const config = {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        modules: [EffectFade, Thumbs],
        loop: true,
        dir: direction,
        speed: 700
    }

    useEffect(() => {
        if (mainSwiper && dateSwiper) {
            mainSwiper.changeLanguageDirection(direction);
            dateSwiper.changeLanguageDirection(direction);
            mainSwiper.update();
            dateSwiper.update();
        }
    }, [direction, mainSwiper, dateSwiper]);

    const handleNavigation = e => {
        if (e.currentTarget.dataset.direction === 'next') {
            mainSwiper.slideNext();
        } else {
            mainSwiper.slidePrev();
        }
    }

    return (
        <Widget name="NextPatient">
            <WidgetNav title="Next Patient" handler={handleNavigation}/>
            <WidgetBody style={{paddingBottom: 18}}>
                <Main>
                    <Swiper onSwiper={(swiper) => setMainSwiper(swiper)} thumbs={{swiper: dateSwiper}} {...config}>
                        {
                            appointments.map(data => {
                                    const {patient, type} = data;
                                    return (
                                        <SwiperSlide key={nanoid(5)}>
                                            <SlideContent style={{marginBottom: 0}}>
                                                <Avatar avatar={patient.avatar} alt={patient.name}/>
                                                <div className="info">
                                                    <Truncated className="name" text={patient.name}/>
                                                    <Truncated className="title" text={type}/>
                                                </div>
                                            </SlideContent>
                                        </SwiperSlide>
                                    )
                                }
                            )
                        }
                    </Swiper>
                    <ShapeButton shape="round" label="Call" icon="phone"/>
                </Main>
                <Footer>
                    <div className="details">
                        <span className="details_item">
                            <i className="icon icon-clock"/>
                            <Swiper onSwiper={(swiper) => setDateSwiper(swiper)}
                                    watchSlidesProgress={true}
                                    {...config}>
                                {
                                    appointments.map(data => {
                                        const {date} = data;
                                        return (
                                            <SwiperSlide key={nanoid(5)}>
                                                <p className="time">{moment(date).format('HH:mm')}</p>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </span>
                    </div>
                    <MenuDots/>
                </Footer>
            </WidgetBody>
        </Widget>
    )
}

export default NextPatient;