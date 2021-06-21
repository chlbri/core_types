import { isStatusPermission } from './permission';
import { generateStatusTests } from './setup_test';

generateStatusTests(isStatusPermission, [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  false,
  false,
]);
