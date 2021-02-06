import React from "react"
import { useForm } from "react-hook-form";
import { ContratoDto } from "../../../../service/src/dto"

export const Form: React.FunctionComponent<{ onSubmit: (c: ContratoDto) => void }> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<ContratoDto>();

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">
          <span>Filtros</span>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="mb-3 col col-12">
              <label className="form-label">Descrição</label>
              <input ref={register} type="text" className="form-control" name="descricao" required />
            </div>
            <div className="mb-3 col col-12 col-md-6">
              <label className="form-label">Palavras Chave</label>
              <input ref={register} type="date" className="form-control" name="inicio" required />
            </div>
            <div className="mb-3 col col-12 col-md-6">
              <label className="form-label">Fim</label>
              <input ref={register} type="date" className="form-control" name="fim" required />
            </div>
          </div>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2">
              <input type="submit" className="btn btn-primary" value="Adicionar" />
            </div>
            <div className="btn-group">
              <button className="btn btn-outline-secondary" onClick={() => reset()}>Limpar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}