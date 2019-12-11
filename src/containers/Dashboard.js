import React from 'react';
import { Icon, Button } from 'antd';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="top-inner-wrapper">
          <h3>Dotsby Dashboard</h3>
          <div>
            <p>hello@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="add-button-container">
        <div className="add-button-inner-wrapper">
          <Button type="primary">
            <Icon type="plus" />
            Create New Document
          </Button>
        </div>
      </div>
      <ul>
        <li>Docs List</li>
      </ul>
    </div>
  )
}

export default Dashboard;