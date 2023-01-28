// components
import Page from '@layout/Page';
import Balance from '@widgets/Balance';
import CreditCards from '@widgets/CreditCards';
import PaymentsFeed from '@widgets/PaymentsFeed';

const Finances = () => {
    return (
        <Page title="Finances">
            <div key="balance">
                <Balance/>
            </div>
            <div key="payments-feed">
                <PaymentsFeed/>
            </div>
            <div key="credit-cards">
                <CreditCards/>
            </div>
        </Page>
    )
}

export default Finances;