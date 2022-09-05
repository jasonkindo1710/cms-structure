import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Image,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const EditMedia = () => {
    return (
        <div>
            <div className="cms-media-edit">
                <h1 className="cms-media-edit-title">Edit Media</h1>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    layout="horizontal"
                >
                    <Form.Item label="File Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Image">
                        <div className="cms-media-edit-item-image">
                            <Image
                                width={200}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Button className="cms-media-edit-item-image-btn" type="dashed">
                                Edit
                            </Button>
                        </div>
                    </Form.Item>

                    <Form.Item label="Description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Button">
                        <Button>Save</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default EditMedia;
