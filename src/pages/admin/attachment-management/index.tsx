import { AppstoreOutlined, SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Input, Select, Image } from "antd";
import React from "react";
import type { ColumnsType } from 'antd/es/table';

import { Table } from "antd";
import { useState } from "react";
import { Attachment } from "../../../models";
import { Option } from "antd/lib/mentions";

const columns: ColumnsType<Attachment> = [
    {
        title: "File",
        dataIndex: "path",
        render: (img, record) => {
            return (
                <div style={{display: "flex", gap: 20, alignItems:"center"}}>
                    <Image
                        width={40}
                        height={40}
                        src={img}
                    />
                    <h3 style={{margin:0, padding:0,fontSize: "15px"}}>{record.filename}</h3>
                </div>
            );
        },
    },
    {
        title: "Author",
        dataIndex: "createdBy",
    },
    {
        title: "Description",
        dataIndex: "description",
    },
    {
        title: "Date",
        dataIndex: "created",
        width: 130
    },
];
const data: Attachment[] = [];

for (let i = 0; i < 46; i++) {
    data.push({
        id: i,
        filename: `Doraemon tập ${i}`,
        path: "https://cdn02.ticketbox.vn/poster/81dcbcaa-cc90-11ea-8541-0242ac110006",
        createdBy: 1,
        description: 'Nobita ở thế giới khủng long',
        created: Date.now(),
    });
}
const MediaManagement = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);

        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div className="cms-media">
            <div className="cms-media-header">
                <h1>Media Library</h1>
                <a>Add New</a>
            </div>

            <nav className="cms-media-navbar">
                <div className="cms-media-navbar-filter">
                    <UnorderedListOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
                    <AppstoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
                    <Select defaultValue="All media items" style={{ width: 150 }} allowClear>
                        <Option value="All media items">All media items</Option>
                    </Select>
                    <Select defaultValue="All media items" style={{ width: 150 }} allowClear>
                        <Option value="All media items">All dates</Option>
                    </Select>
                    <a>Filter</a>
                </div>
                <div className="cms-media-navbar-search">
                    <SearchOutlined
                        style={{
                            fontSize: "20px",
                            cursor: "pointer",
                            position: "absolute",
                            zIndex: 1,
                            right: "10px",
                        }}
                    />
                    <Input placeholder="Search" style={{ width: 200 }} />
                </div>
            </nav>
            <div className="cms-media-content">
                <div>
                    <div style={{ marginBottom: 16 }}>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
                        </span>
                    </div>
                    <Table
                        className="cms-media-content-table"
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={{
                          style: {marginRight: "10px"}
                        }}
                        
                    />
                </div>
            </div>
        </div>
    );
};

export default MediaManagement;
