import React, { componet } from 'react';
import check from 'react';

class Favoritos extends component {
    render() {
        return (
          <center>
            <H1> Áreas de interesse </H1>
            <View style={{ flexDirection: 'column'}}>
              <CheckBox />
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{marginTop: 5}}> Direito </Text>
              </View>
            </View> 

            <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Administração </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Pedagogia </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Engenharia Civil</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column'}}>
              
              <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Ciências Contabeis</Text>
                </View>
              </View>  

              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Enfermagem </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Psicologia </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Educação Física </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Arquitetura e Urbanismo </Text>
                </View>
              </View>
              
              <View style={{ flexDirection: 'column'}}>
                <CheckBox />
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Sistemas de Informação </Text>
                </View>
              </View>              
         </center>
        )

    }
}

export default Favoritos;