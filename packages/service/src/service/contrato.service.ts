import { Inject } from '@nestjs/common';
import { ContratoDto } from 'src/dto';
import { Repository } from 'typeorm';

export class ContratoService {
  constructor(
    @Inject('CONTRATO_REPOSITORY')
    private repository: Repository<ContratoDto>,
  ) { }

  public async create(contrato: ContratoDto): Promise<ContratoDto> {
    return this.repository.save(contrato);
  }

  public async findAll(): Promise<ContratoDto[]> {
    return this.repository.find();
  }

  public async remove(id: number): Promise<void> {
    const [e] = await this.repository.findByIds([id]);
    this.repository.delete(e);
  }
}
