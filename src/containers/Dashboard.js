/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon, Button, Card, message, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { setDocsList } from '@src/store/reducerActions/docs';
import { logoutApi, listDocsApi } from '@src/service/request';
import { initUserInfo } from '@src/store/reducerActions/user';

class Dashboard extends React.Component {

  componentDidMount() {
    listDocsApi(this.props.token).then((resp) => {
      this.props.setDocsList(resp.data.data);
    }).catch(err => {

    })
  }

  logout = () => {
    logoutApi(this.props.token).then(() => {
      this.props.initUserInfo()
    }).catch(err => {
      console.log(err)
    })
  }

  renderList = () => {
    return this.props.docsList.map(item => {
      return (
        <li key={item.id}>
          <Card>
            <div>
              <div className="card-core">
                <CopyToClipboard text="hello world" onCopy={() => message.success('Copied!')}>
                  <Button id="copy-button">Copy Meta Info</Button>
                </CopyToClipboard>
              </div>
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

  renderMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={this.logout}>
          Log out
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="top-bar">
          <div className="top-inner-wrapper">
            <h3>Dotsby Dashboard</h3>
            <Dropdown overlay={this.renderMenu()} placement="bottomCenter" trigger={['click']}>
              <a className="antd-dropdown-link" href="#">
                {this.props.email}
                <Icon type="down" />
              </a>
            </Dropdown>
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
    email: state.userReducer.email,
    token: state.userReducer.token,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setDocsList,
  initUserInfo,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);