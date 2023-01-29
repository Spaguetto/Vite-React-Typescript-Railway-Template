// styling
import styled from 'styled-components/macro';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import {Navbar} from '@components/Widget/style';
import Btn from '@ui/Btn'
import TodosLegend from '@components/Todos/TodosLegend';
import AddForm from '@components/Todos/AddForm';
import DnDLayout from '@components/Todos/DnDLayout';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useSelector} from 'react-redux';
import {useState, useRef, useEffect} from 'react';
import useContentHeight from '@hooks/useContentHeight';

const Footer = styled.div`
  padding: 2px 24px 22px 24px;
`;

const TasksList = () => {
    const todos = useSelector(state => state['todos'].todos);
    const [isFormVisible, setFormVisible] = useState(false);

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    useEffect(() => {
        listRef.current.scrollTo(0, 0);
    }, [isFormVisible]);

    return (
        <Widget name="TasksList" mobile={600}>
            <WidgetHeader title="Tasks list" flex="column" style={{paddingBottom: 2}} elRef={headerRef}>
                <Navbar as="div" style={{margin: '0 -22px'}}>
                    <TodosLegend/>
                </Navbar>
            </WidgetHeader>
            <ScrollContainer height={height}>
                <div className="track" ref={listRef} style={{overflowY: isFormVisible ? 'hidden' : 'auto'}}>
                    <AddForm isVisible={isFormVisible} visibilityHandler={setFormVisible} variant="list"/>
                    {todos.length !== 0 ? <DnDLayout variant="list"/> : null}
                </div>
            </ScrollContainer>
            <Footer ref={footerRef}>
                <Btn text="Add new task" handler={() => setFormVisible(true)}/>
            </Footer>
        </Widget>
    )
}

export default TasksList;