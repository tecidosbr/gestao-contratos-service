import { Provider } from '@nestjs/common';

import { ContratoService } from './contrato.service';

export { ContratoService };

export const providers: Provider[] = [ContratoService];
