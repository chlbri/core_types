import { isStatusClientError } from './client';
import { generateStatusTests } from './setup_test';

generateStatusTests(isStatusClientError, [
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
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);
