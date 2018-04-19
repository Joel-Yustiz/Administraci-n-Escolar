import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'


import * as seccionActions from '../../actions/pages-seccion'
import SeccionButton from '../components/seccion-button'
import BotoneraLayout from '../components/botonera-layout'
import PanelControlSecciones from '../components/panel-control-secciones'
class BotoneraSeccion extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleClick = event =>{
    console.log('BOTON')
  }
  render() {
    return (
      <BotoneraLayout>
           <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Herramientas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Información
            </NavLink>
          </NavItem>
        </Nav>


        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          {
            this.props.seccionElegida ?<SeccionButton></SeccionButton>: <PanelControlSecciones />
          }
               
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </BotoneraLayout>
       
    );
  }
}

function mapStateToProps(state, props) {
  const seccionElegida = state.get('pageSecciones').get('seccionElegida')
  return {
    seccionElegida
  }
}
export default connect(mapStateToProps)(BotoneraSeccion);