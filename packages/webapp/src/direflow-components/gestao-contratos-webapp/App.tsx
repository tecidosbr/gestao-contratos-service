import React from 'react';

import { ContratoDto, ContratoListDto } from "../../../../service/src/dto";
import { Form } from './Form';
import { Table } from './Table';

const bodyStyle = {
  margin: 0,
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.5',
  color: '#212529'
};

type Props = { idToken: string }
type State = { contratos: ContratoDto[] };
export class App extends React.Component<Props, State> {
  public readonly state: State = {
    contratos: [],
  };

  public async componentDidMount() {
    await this.load();
  }

  private readonly load = async (): Promise<void> => {
    const res = await fetch(`${process.env.SERVICE_URL}/contrato`, {
      headers: {
        'Authorization': `Bearer ${this.props.idToken}`,
      }
    });

    const { list: contratos = [] }: ContratoListDto = await res.json();

    this.setState({ contratos });
  }

  private readonly save = async (contrato: ContratoDto): Promise<void> => {
    await fetch(`${process.env.SERVICE_URL}/contrato`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.idToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contrato),
    });
    alert(`Contrato cadastrado com sucesso`);
    this.load();
  }

  private readonly remove  = async (id: number | string): Promise<void> => {
    await fetch(`${process.env.SERVICE_URL}/contrato/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.idToken}`,
      }
    });
    alert(`Contrato ${id} removido com sucesso`);
    this.load();
  }

  public render() {

    return (
      <div style={bodyStyle}>
        <Form onSubmit={this.save} />
        <Table contratos={this.state.contratos} onDelete={this.remove} />
      </div>
    );
  }
}
