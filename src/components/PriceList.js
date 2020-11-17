import React from 'react';
import {Row, Col, Tooltip, Button, Divider} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Icons from './Icons';
import PropTypes from 'prop-types';

const PriceList = ({items, onEdit, onDelete}) => {
    console.log('items :>> ', items);
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <Divider/>
                        <Row>
                            <Col span={4}>
                                <Icons iconName={item.category.name}/>
                            </Col>
                            <Col span={8}>{item.title}</Col>
                            <Col span={4}>
                                {item.category.type === "outcome" ? "-" : "+"}
                                {item.price}</Col>
                            <Col span={6}>{item.date}</Col>
                            <Col span={1}>
                                <Tooltip title="编辑">
                                    <Button type="primary" size="small" shape="circle" icon={<EditOutlined/>}
                                            onClick={() => {
                                                onEdit(item)
                                            }}
                                    />
                                </Tooltip>
                            </Col>
                            <Col span={1}>
                                <Tooltip title="删除">
                                    <Button type="primary" size="small" danger shape="circle" icon={<DeleteOutlined/>}
                                            onClick={() => {
                                                onDelete(item)
                                            }}
                                    />
                                </Tooltip>
                            </Col>
                        </Row>

                    </div>
                ))
            }

        </>
    )
}

PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}
PriceList.defaultProps = {
    onEdit: () => {
        console.log("xxxxx")
    }
}

export default PriceList;