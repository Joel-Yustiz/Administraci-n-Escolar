import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import { bindActionCreators }from 'redux'

import SeccionesLayout from '../components/secciones-layout'
import * as seccionActions from '../../actions/pages-seccion'
import * as actions from '../../actions/index'
import Botonera from '../../widgets/containers/botonera-seccion'
import ElegirSecciones from '../components/elegir-secciones'
import Table from '../../widgets/components/table'
import TableSeccion from '../../table/components/table-secciones'

class Secciones extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      handleCLickSecciones = event => {
        
        !this.props.visibilitySeccion ? this.props.seccionActions.openSeccion(2) : this.props.seccionActions.closeSeccion()
      }

    render(){
        return(
            <SeccionesLayout>
                <Botonera />
                {!this.props.visibilitySeccion &&
                     <ElegirSecciones handleCLickSecciones={this.handleCLickSecciones} />
                }
                {this.props.visibilitySeccion &&
                    <TableSeccion alumnos={this.props.alumnos}></TableSeccion>
                }
                
            </SeccionesLayout>
        )
        
    }
}


function mapStateToProps(state, props) {
  const alumnos = state.get('alumnos').get('alumno')

  let searchResults = list()//los array son listas y los objetos son mapas
  const secciones = state.get('seccion')
  // console.log(alumnos)


  return {
      alumnos: alumnos,
      secciones: secciones,
      visibilitySeccion: state.get('pageSecciones').get('visibilitySeccion'),
      isLoading: state.get('isLoading').get('active'),
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch),
      seccionActions: bindActionCreators(seccionActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Secciones);