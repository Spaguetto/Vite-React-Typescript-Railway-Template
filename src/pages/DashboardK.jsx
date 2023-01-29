// components
import Page from '@layout/Page';
import Statistics from '@widgets/Statistics';
import PaymentsHistory from '@widgets/PaymentsHistory';
import RecentTests from '@widgets/RecentTests';

const DashboardK = () => {
    return (
        <Page title="Dashboard">
            <div key="stat-cause">
                <Statistics data={{type: 'cause', value: '84', text: 'Abdominal pain is the most common cause'}}/>
            </div>
            <div key="stat-teeth">
                <Statistics data={{type: 'teeth', value: '32', text: 'The average number of teeth of our patients'}}/>
            </div>
            <div key="stat-heart">
                <Statistics data={{type: 'heart', value: '72', text: 'The average number of heartbeats'}}/>
            </div>
            <div key="payments-history">
                <PaymentsHistory variant="compact"/>
            </div>
            <div key="recent-tests">
                <RecentTests/>
            </div>
        </Page>
    )
}

export default DashboardK;