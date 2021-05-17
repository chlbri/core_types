import { isN } from "./_";

export const SERVER_ERROR_STATUS = [
  500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512,
  513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525,
  526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538,
  539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551,
  552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564,
  565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577,
  578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590,
  591, 592, 593, 594, 595, 596, 597, 598, 599,
] as const;

export type ServerErrorStatus = typeof SERVER_ERROR_STATUS[number];

export function isStatusServerError(
  val: number
): val is ServerErrorStatus {
  return isN(SERVER_ERROR_STATUS, val);
}
