import { Button, Col, Collapse, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { MenuItems, Menus } from "../../../models";

type Props = {};
type LayoutType = Parameters<typeof Form>[0]["layout"];

const MenuManagement = (props: Props) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { Panel } = Collapse;
    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const formItemLayout = { labelCol: { span: 4, offset: 1 }, wrapperCol: { span: 19 } };
    const item1: MenuItems = {
        id: 1,
        text: "about",
        link: "http://link",
        target: "about us",
        menuId: 1,
        deleted: false,
    };

    const item2: MenuItems = {
        id: 1,
        text: "contact",
        link: "http://contact",
        target: "contact us",
        menuId: 2,
        deleted: false,
    };

    const item3: MenuItems = {
        id: 1,
        text: "news",
        link: "http://news",
        target: "news",
        menuId: 3,
        deleted: false,
    };

    const menu1: Menus = {
        id: 1,
        name: "primary",
        menus: [item1, item2, item3],
        deleted: false,
    };

    return (
        <div className="cms-menus">
            <div className="cms-menus-header">
                <h1>Menus Management</h1>
            </div>

            <div className="cms-menus-selectedit">
                <p>Select a menu to edit:</p>
                <Select
                    className="cms-menus-selectedit-select"
                    labelInValue
                    style={{ width: 250 }}
                    onChange={handleChange}
                    placeholder="Select a menu to select"
                >
                    <Option value="1">Primary Menu</Option>
                    <Option value="2">Footer Menu</Option>
                </Select>

                <Button
                    className="cms-menus-selectedit-btn"
                    type="primary"
                    style={{ width: "120px" }}
                >
                    Select
                </Button>
                <p>
                    Or <a href="#">create a new menu.</a> Do not forget to save your changes!
                </p>
            </div>

            <div className="cms-menus-content">
                <Row>
                    <Col span={8}>
                        <h2>Add new menu item</h2>
                        <div className="cms-menus-content-addnew">
                            <Collapse accordion>
                                <Panel header="Custom Link" className="panel-customlink" key="1">
                                    <Form {...formItemLayout} form={form}>
                                        <Form.Item label="Name" name="name">
                                            <Input placeholder="Name" />
                                        </Form.Item>
                                        <Form.Item label="Target" name="target">
                                            <Input placeholder="Target" />
                                        </Form.Item>
                                        <Form.Item label="Link" name="link">
                                            <Input placeholder="htttp://" />
                                        </Form.Item>
                                        <Form.Item className="form-item-btn">
                                            <Button type="primary" style={{ width: 120 }}>
                                                Add new item
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Panel>
                                <Panel header="This is panel header 2" key="2">
                                    <p>Hello</p>
                                </Panel>
                                <Panel header="This is panel header 3" key="3">
                                    <p>Hello</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </Col>

                    <Col span={15} offset={1}>
                        <h2>Menu structure</h2>
                        <div className="cms-menus-content-structure">
                            <Form>
                                <div className="cms-menus-content-structure-menuname">
                                    <Form.Item
                                        label="Menu Name"
                                        name="name"
                                        className="cms-menus-content-structure-menuname-input"
                                    >
                                        <Input style={{width: "250px"}} value={menu1.name} />
                                    </Form.Item>
                                </div>
                                <div className="cms-menus-content-structure-box">
                                    <p>
                                        Drag the items into the order you prefer. Click the arrow on
                                        the right of the item to reveal additional configuration
                                        options.
                                    </p>
                                    {menu1.menus.map((item) => {
                                        return (
                                            <Row className="cms-menus-content-structure-box-item">
                                                <Col span={16}>
                                                    <Collapse onChange={onChange}>
                                                        <Panel
                                                            header={`${item.text}`}
                                                            key={item.menuId}
                                                        >
                                                            <Form.Item
                                                                {...formItemLayout}
                                                                label="Link"
                                                            >
                                                                <Input value={item.link} />
                                                            </Form.Item>
                                                            <Form.Item
                                                                {...formItemLayout}
                                                                label="Target"
                                                            >
                                                                <Input value={item.target} />
                                                            </Form.Item>
                                                        </Panel>
                                                    </Collapse>
                                                </Col>
                                            </Row>
                                        );
                                    })}
                                    <Form.Item>
                                        <Button style={{ width: 100 }}>Save</Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default MenuManagement;
