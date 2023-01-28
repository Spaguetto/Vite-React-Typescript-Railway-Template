// components
import Page from '@layout/Page';
import ReviewsRatingList from '@components/Reviews/List';
import Content from '@components/Reviews/Content';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';

// hooks
import {useState} from 'react';

const DoctorsReviews = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    return (
        <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
            <Page title="Doctors Reviews">
                <div key="doctors-rating-list">
                    <ReviewsRatingList tab={selectedTab} setTab={setSelectedTab} setModal={setOpenModal}/>
                </div>
                <div key="doctors-reviews-content">
                    {
                        smallScreen ?
                            <ModalWindow isVisible={openModal} visibilityHandler={handleModalClose}>
                                <Content selectedTab={selectedTab} variant="doctor"/>
                            </ModalWindow>
                            :
                            <Content selectedTab={selectedTab} variant="doctor"/>
                    }
                </div>
            </Page>
        </Tab.Container>
    )
}

export default DoctorsReviews;