import { RedirectStatus } from "../../status";
import { Nullish } from "../../types";

export type RedirectData<T = any> = {
  status: RedirectStatus;
  payload?: Nullish<T>;
};

export const REDIRECT_DATA_CONSTANTS = {
  300: { status: 300, payload: undefined } as const,
  301: { status: 301, payload: undefined } as const,
  302: { status: 302, payload: undefined } as const,
  303: { status: 303, payload: undefined } as const,
  304: { status: 304, payload: undefined } as const,
  305: { status: 305, payload: undefined } as const,
  306: { status: 306, payload: undefined } as const,
  307: { status: 307, payload: undefined } as const,
  308: { status: 308, payload: undefined } as const,
  309: { status: 309, payload: undefined } as const,
  310: { status: 310, payload: undefined } as const,
  311: { status: 311, payload: undefined } as const,
  312: { status: 312, payload: undefined } as const,
  313: { status: 313, payload: undefined } as const,
  314: { status: 314, payload: undefined } as const,
  315: { status: 315, payload: undefined } as const,
  316: { status: 316, payload: undefined } as const,
  317: { status: 317, payload: undefined } as const,
  318: { status: 318, payload: undefined } as const,
  319: { status: 319, payload: undefined } as const,
  320: { status: 320, payload: undefined } as const,
  321: { status: 321, payload: undefined } as const,
  322: { status: 322, payload: undefined } as const,
  323: { status: 323, payload: undefined } as const,
  324: { status: 324, payload: undefined } as const,
  325: { status: 325, payload: undefined } as const,
  326: { status: 326, payload: undefined } as const,
  327: { status: 327, payload: undefined } as const,
  328: { status: 328, payload: undefined } as const,
  329: { status: 329, payload: undefined } as const,
  330: { status: 330, payload: undefined } as const,
  331: { status: 331, payload: undefined } as const,
  332: { status: 332, payload: undefined } as const,
  333: { status: 333, payload: undefined } as const,
  334: { status: 334, payload: undefined } as const,
  335: { status: 335, payload: undefined } as const,
  336: { status: 336, payload: undefined } as const,
  337: { status: 337, payload: undefined } as const,
  338: { status: 338, payload: undefined } as const,
  339: { status: 339, payload: undefined } as const,
  340: { status: 340, payload: undefined } as const,
  341: { status: 341, payload: undefined } as const,
  342: { status: 342, payload: undefined } as const,
  343: { status: 343, payload: undefined } as const,
  344: { status: 344, payload: undefined } as const,
  345: { status: 345, payload: undefined } as const,
  346: { status: 346, payload: undefined } as const,
  347: { status: 347, payload: undefined } as const,
  348: { status: 348, payload: undefined } as const,
  349: { status: 349, payload: undefined } as const,
  350: { status: 350, payload: undefined } as const,
  351: { status: 351, payload: undefined } as const,
  352: { status: 352, payload: undefined } as const,
  353: { status: 353, payload: undefined } as const,
  354: { status: 354, payload: undefined } as const,
  355: { status: 355, payload: undefined } as const,
  356: { status: 356, payload: undefined } as const,
  357: { status: 357, payload: undefined } as const,
  358: { status: 358, payload: undefined } as const,
  359: { status: 359, payload: undefined } as const,
  360: { status: 360, payload: undefined } as const,
  361: { status: 361, payload: undefined } as const,
  362: { status: 362, payload: undefined } as const,
  363: { status: 363, payload: undefined } as const,
  364: { status: 364, payload: undefined } as const,
  365: { status: 365, payload: undefined } as const,
  366: { status: 366, payload: undefined } as const,
  367: { status: 367, payload: undefined } as const,
  368: { status: 368, payload: undefined } as const,
  369: { status: 369, payload: undefined } as const,
  370: { status: 370, payload: undefined } as const,
  371: { status: 371, payload: undefined } as const,
  372: { status: 372, payload: undefined } as const,
  373: { status: 373, payload: undefined } as const,
  374: { status: 374, payload: undefined } as const,
  375: { status: 375, payload: undefined } as const,
  376: { status: 376, payload: undefined } as const,
  377: { status: 377, payload: undefined } as const,
  378: { status: 378, payload: undefined } as const,
  379: { status: 379, payload: undefined } as const,
  380: { status: 380, payload: undefined } as const,
  381: { status: 381, payload: undefined } as const,
  382: { status: 382, payload: undefined } as const,
  383: { status: 383, payload: undefined } as const,
  384: { status: 384, payload: undefined } as const,
  385: { status: 385, payload: undefined } as const,
  386: { status: 386, payload: undefined } as const,
  387: { status: 387, payload: undefined } as const,
  388: { status: 388, payload: undefined } as const,
  389: { status: 389, payload: undefined } as const,
  390: { status: 390, payload: undefined } as const,
  391: { status: 391, payload: undefined } as const,
  392: { status: 392, payload: undefined } as const,
  393: { status: 393, payload: undefined } as const,
  394: { status: 394, payload: undefined } as const,
  395: { status: 395, payload: undefined } as const,
  396: { status: 396, payload: undefined } as const,
  397: { status: 397, payload: undefined } as const,
  398: { status: 398, payload: undefined } as const,
  399: { status: 399, payload: undefined } as const,
} as const;
