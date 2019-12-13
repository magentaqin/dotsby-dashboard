import React from 'react';
import { Icon, Button, Card } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setDocsList } from '../store/reducerActions/docs';

import docBackground from '../assets/doc-background.svg';

class Dashboard extends React.Component {
  renderList = () => {
    return this.props.docsList.map(item => {
      return (
        <li key={item.id}>
          <Card>
            <div>
              <img src={docBackground} alt="doc-background"/>
              <div className="card-bottom">
                <h6>{item.title}</h6>
                <div className="card-info">
                  <p>{item.isPrivate ? 'Private' : 'Public'}</p>
                  <p>{item.updated_at}</p>
                </div>
              </div>
            </div>
          </Card>
        </li>
      )
    })
  }
  render() {
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
        <div className="docs-list-container">
          <ul className="docs-list-inner-wrapper">{this.renderList()}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    docsList: state.docsReducer.docsList,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setDocsList,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);