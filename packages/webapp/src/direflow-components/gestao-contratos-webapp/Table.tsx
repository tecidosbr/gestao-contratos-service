import React from "react"
import { ContratoDto } from "../../../../service/src/dto";

type Props = {
  contratos: ContratoDto[];
  onDelete: (id: number | string) => void;
};

export const Table: React.FunctionComponent<Props> = ({ contratos, onDelete }) => {
  const onDeleteCb = React.useCallback((e: React.SyntheticEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    onDelete(button.dataset.id ?? '');
  }, [onDelete]);
  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col" className="d-none d-md-table-cell">Titulo</th>
                <th scope="col">Inicio</th>
                <th scope="col">Fim</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contratos?.map(c => (
                <tr key={c.id}>
                  <th>{c.id}</th>
                  <td>{c.descricao}</td>
                  <td className="d-none d-md-table-cell">{new Date(c.inicio).toLocaleDateString()}</td>
                  <td className="d-none d-md-table-cell">{new Date(c.fim).toLocaleDateString()}</td>
                  <td>
                    <button type="button" className="btn btn-danger" data-id={c.id} onClick={onDeleteCb}>
                      <i className="bi-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};