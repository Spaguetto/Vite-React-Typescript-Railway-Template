// components
import Page from '@layout/Page';
import TasksList from '@widgets/TasksList';
import ConfirmedDiagnoses from '@widgets/ConfirmedDiagnoses';
import DiagnosesDonut from '@widgets/DiagnosesDonut';
import RadarAreaChart from '@widgets/RadarAreaChart';

const DashboardC = () => {
    return (
        <Page title="Doctor Dashboard">
            <div key="task-list">
                <TasksList />
            </div>
            <div key="confirmed">
                <ConfirmedDiagnoses nav="arrows" />
            </div>
            <div key="diagnoses-donut">
                <DiagnosesDonut variant="rays" />
            </div>
            <div key="radar">
                <RadarAreaChart />
            </div>
        </Page>
    )
}

export default DashboardC;