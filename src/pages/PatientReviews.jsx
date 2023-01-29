// components
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';

// hooks
import {useState} from 'react';

const PatientReviews = () => {
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
            <Page title="Patient Reviews">
                <div key="doctors-rating-list">
                    <ReviewsRatingList tab={selectedTab} setTab={setSelectedTab} setModal={setOpenModal} />
                </div>
                <div key="patient-reviews-content">
                    {
                        smallScreen ?
                            <ModalWindow isVisible={openModal} visibilityHandler={handleModalClose}>
                                <Content selectedTab={selectedTab} variant="patient" />
                            </ModalWindow>
                            :
                            <Content selectedTab={selectedTab} variant="patient" />
                    }
                </div>
            </Page>
        </Tab.Container>
    )
}

export default PatientReviews;