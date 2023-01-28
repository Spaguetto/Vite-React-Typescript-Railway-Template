// utils
import {lazy, Suspense} from 'react';

// components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import {Navigate, Route, Routes} from 'react-router-dom';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePageIsOverflow from '@hooks/usePageIsOverflow';
import {useRef, useEffect} from 'react';

// pages
const DashboardA = lazy(() => import('@pages/DashboardA'));
const DashboardB = lazy(() => import('@pages/DashboardB'));
const DashboardC = lazy(() => import('@pages/DashboardC'));
const DashboardD = lazy(() => import('@pages/DashboardD'));
const DashboardE = lazy(() => import('@pages/DashboardE'));
const DashboardF = lazy(() => import('@pages/DashboardF'));
const DashboardG = lazy(() => import('@pages/DashboardG'));
const DashboardH = lazy(() => import('@pages/DashboardH'));
const DashboardI = lazy(() => import('@pages/DashboardI'));
const DashboardJ = lazy(() => import('@pages/DashboardJ'));
const DashboardK = lazy(() => import('@pages/DashboardK'));
const DoctorAppointments = lazy(() => import('@pages/DoctorAppointments'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Patients = lazy(() => import('@pages/Patients'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const StaffList = lazy(() => import('@pages/Staff'));
const DoctorMessenger = lazy(() => import('@pages/DoctorMessenger'));
const PatientMessenger = lazy(() => import('@pages/PatientMessenger'));
const DoctorsReviews = lazy(() => import('@pages/DoctorsReviews'));
const PatientReviews = lazy(() => import('@pages/PatientReviews'));
const Finances = lazy(() => import('@pages/Finances'));
const Settings = lazy(() => import('@pages/Settings'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));

const AppLayout = () => {
    const appRef = useRef(null);
    const isOverflow = usePageIsOverflow();
    const {width} = useWindowSize();
    const isMobile = width < 768;

    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="app" ref={appRef}>
            {isOverflow ? <ScrollProgress/> : null}
            <Sidebar/>
            <div className="app_content">
                <Panel/>
                <Suspense fallback={<WidgetsLoader />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard_a"/>}/>
                        <Route path="/dashboard_a" element={<DashboardA/>}/>
                        <Route path="/dashboard_b" element={<DashboardB/>}/>
                        <Route path="/dashboard_c" element={<DashboardC/>}/>
                        <Route path="/dashboard_d" element={<DashboardD/>}/>
                        <Route path="/dashboard_e" element={<DashboardE/>}/>
                        <Route path="/dashboard_f" element={<DashboardF/>}/>
                        <Route path="/dashboard_g" element={<DashboardG/>}/>
                        <Route path="/dashboard_h" element={<DashboardH/>}/>
                        <Route path="/dashboard_i" element={<DashboardI/>}/>
                        <Route path="/dashboard_j" element={<DashboardJ/>}/>
                        <Route path="/dashboard_k" element={<DashboardK/>}/>
                        <Route path="/doctor_appointments" element={<DoctorAppointments/>}/>
                        <Route path="/patient_appointments" element={<PatientAppointments/>}/>
                        <Route path="/patients" element={<Patients/>}/>
                        <Route path="/tests" element={<Tests/>}/>
                        <Route path="/doctors" element={<Doctors/>}/>
                        <Route path="/staff" element={<StaffList/>}/>
                        <Route path="/doctor_messenger" element={<DoctorMessenger/>}/>
                        <Route path="/patient_messenger" element={<PatientMessenger/>}/>
                        <Route path="/doctor_reviews" element={<DoctorsReviews/>}/>
                        <Route path="/patient_reviews" element={<PatientReviews/>}/>
                        <Route path="/finances" element={<Finances/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/404" element={<PageNotFound/>}/>
                        <Route path="*" element={<Navigate to="/404" replace/>}/>
                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu/> : null}
        </div>
    )
}

export default AppLayout;