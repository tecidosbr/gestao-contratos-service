import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ContratoDto, ContratoListDto } from '../dto';
import { ContratoService } from '../service';

@Controller('contrato')
export class ContratoController {
  public constructor(private readonly service: ContratoService) {}

  @Post()
  @ApiOkResponse({
    type: ContratoDto,
  })
  private async create(@Body() contrato: ContratoDto): Promise<ContratoDto> {
    console.log(contrato);
    return this.service.create(contrato);
  }

  @Get()
  @ApiOkResponse({
    type: ContratoListDto,
  })
  private async findAll(): Promise<ContratoListDto> {
    return {
      list: await this.service.findAll(),
    };
  }
  @Delete(':id')
  @ApiOkResponse({
    type: ContratoListDto,
  })
  private async remove(@Param('id') id: string): Promise<void> {
    await this.service.remove(+id);
  }
}
