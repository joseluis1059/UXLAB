import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ClassTable extends Component {
    state = {
        Clase1: '',
        clase11: '',
        clase2: '',
        clase22: '',
        clase3: '',
        clase33: '',
        nota1:'0',
        nota11:'0',
        nota2:'0',
        nota22:'0',
        nota3:'0',
        nota33:'0',
        notas1:'0',
        notas11:'0',
        notas2:'0',
        notas22:'0',
        notas3:'0',
        notas33:'0',
        shown:false
      };
    
        /*const handleChange = event => {
            this.setState({ Clase1: event.target.value });
          };
        
          const update(){
              this.setState({clase11:this.state.Clase1})
          }*/
  render() {
    var shown = {
        display: this.state.shown ? "block" : "none"

    };


    const handleChange = (event,state) => {
        if(state === 'Clase1'){
            this.setState({ Clase1: event.target.value });
        }
            
        if(state === 'clase2') {
            
            this.setState({ clase2: event.target.value });
        }  
        if(state === 'clase3'){
            this.setState({ clase3: event.target.value });
        }   
        if(state === 'nota1'){
            this.setState({ nota1: event.target.value });
        }
            
        if(state === 'nota2') {
            
            this.setState({ nota2: event.target.value });
        }  
        if(state === 'nota3'){
            this.setState({ nota3: event.target.value });
        }   
            
      };
      
      const hide=()=>{
        this.setState({shown:false});   
      }

      const update=()=>{
          if(this.state.Clase1 !== '' && this.state.clase2 !== '' && this.state.clase3 !== '' && this.state.nota1 !== '0' && this.state.nota2 !== '0' && this.state.nota3 !== '0'){
            this.setState({clase11:this.state.Clase1});
            this.setState({clase22:this.state.clase2});
            this.setState({clase33:this.state.clase3});
            this.setState({nota11:this.state.nota1});
            this.setState({nota22:this.state.nota2});
            this.setState({nota33:this.state.nota3});
            this.setState({shown:true});
          }
         
      }
    return (
      <div>
        <Input placeholder="Nombre de Clase"  onChange={(e)=>handleChange(e,'Clase1')}/> <span>   </span><Input placeholder="Nota Parcial 1" type='number'  onChange={(e)=>handleChange(e,'nota1')}/> 
        <br/>
        <Input placeholder="Nombre de Clase" onChange={(e)=>handleChange(e,'clase2')}/>  <span>  </span><Input placeholder="Nota Parcial 1" type='number' onChange={(e)=>handleChange(e,'nota2')}/> 
        <br/>
        <Input placeholder="Nombre de Clase" onChange={(e)=>handleChange(e,'clase3')}/>  <span>  </span><Input placeholder="Nota Parcial 1" type='number' onChange={(e)=>handleChange(e,'nota3')}/> 
        <br/>
        <br/>
        <Button variant="contained" color="primary" onClick={update} >Continuar</Button>
        <br/>
        <br/>

        <div style={shown}>    
        <Paper >
         
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Clase</TableCell>
            <TableCell align="right">Parcial 1</TableCell>
            <TableCell align="right">Parical 2</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell component="th" scope="row">{this.state.clase11}</TableCell>
              <TableCell align="right">{this.state.nota11}</TableCell>
              <TableCell align="right">{this.state.notas11}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">{this.state.clase22}</TableCell>
              <TableCell align="right">{this.state.nota22}</TableCell>
              <TableCell align="right">{this.state.notas22}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">{this.state.clase33}</TableCell>
              <TableCell align="right">{this.state.nota33}</TableCell>
              <TableCell align="right">{this.state.notas33}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <Button variant="contained" color="secondary" onClick={hide} >Hide</Button>
        </div>   


      </div>
    );
  }
}

export default ClassTable;
