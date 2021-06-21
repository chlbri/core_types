import { isStatusRedirect } from './redirect';
import { generateStatusTests } from './setup_test';

generateStatusTests(isStatusRedirect, [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
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
  false,
  false,
]);
