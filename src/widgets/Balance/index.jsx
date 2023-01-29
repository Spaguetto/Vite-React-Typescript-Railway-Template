// styled components
import {Wrapper, Block, BalanceInfo} from './style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Btn from '@ui/Btn';

const Balance = () => {
    return (
        <Widget name="Balance">
            <WidgetHeader title="Account Balance" style={{paddingBottom: 10}} />
            <WidgetBody>
                <Wrapper>
                    <Block>
                        <span className="label">Active balance</span>
                        <BalanceInfo className="h1" color="azure">$ 754.40</BalanceInfo>
                    </Block>
                    <span className="divider"></span>
                    <Block>
                        <span className="label">Bonus balance</span>
                        <BalanceInfo className="h1" color="orange">B 45.27</BalanceInfo>
                    </Block>
                </Wrapper>
                <Btn text="Refill balance" />
            </WidgetBody>
        </Widget>
    )
}

export default Balance;