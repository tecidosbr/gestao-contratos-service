import { ApiProperty } from '@nestjs/swagger';
import { ListDto } from './list.dto';

export class ContratoDto {
  @ApiProperty()
  public readonly id: number;
  @ApiProperty()
  public readonly descricao: string;
  @ApiProperty()
  public readonly inicio: Date;
  @ApiProperty()
  public readonly fim: Date;
}

export class ContratoListDto extends ListDto<ContratoDto> {
  @ApiProperty({ type: ContratoDto, isArray: true })
  readonly list: ContratoDto[];
}
