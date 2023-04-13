import { homeConfig } from './home';
import { loginConfig } from './login';
import { carConfig } from './car';
import { lineConfig } from './line';
import { flowConfig } from './flow';

const routes = [
	...homeConfig,
	...loginConfig,
	...carConfig,
	...lineConfig,
	...flowConfig
];

export default routes;