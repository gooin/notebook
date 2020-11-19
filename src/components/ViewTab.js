import React from 'react';
import {Tabs} from 'antd';
import {CHART_VIEW, LIST_VIEW, CHART_MODE, LIST_MODE} from '../utility'
import {UnorderedListOutlined, PieChartOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

const {TabPane} = Tabs;


const ViewTab = ({activeTab, onTabViewChange}) => (
    <Tabs type="card"
        // activeKey={activeTab}
        //   onChange={(key) => {
        //       console.log("tabs changed.", key);
        //   }}
          onChange={onTabViewChange}
    >
        <TabPane tab={
            <span>
            <UnorderedListOutlined/>
                {LIST_MODE}
            </span>
        }
                 key={LIST_VIEW}
        >
            {/*Content of Tab Pane {LIST_VIEW}*/}
        </TabPane>
        <TabPane tab={
            <span>
            <PieChartOutlined/>
                {CHART_MODE}
        </span>
        }
                 key={CHART_VIEW}
        >
            {/*Content of Tab Pane {CHART_VIEW}*/}
        </TabPane>
    </Tabs>
);

ViewTab.propType = {
    onTabChange: PropTypes.func.isRequired
}


export default ViewTab;