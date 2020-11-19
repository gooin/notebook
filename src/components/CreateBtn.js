import React from 'react';
import {Button, Row, Col} from "antd";

const CreateBtn = ({onCreate}) => {
    return (
        <div style={{margin: "1rem 0"}}>
            <Row>
                <Col span={4}/>
                <Col span={16}>
                    <Button
                        className={"creat-item-button"}
                        onClick={onCreate}
                        type="primary"
                        block={true}
                    >创建一条新的记录</Button>
                </Col>
                <Col span={4}/>
            </Row>
        </div>
    );
};

export default CreateBtn;
