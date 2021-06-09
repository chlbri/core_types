import { RedirectStatus } from "../../status";
import { Nullish } from "../../types";

export type RedirectData<T = any> = {
  status: RedirectStatus;
  payload?: Nullish<T>;
};

export const REDIRECT_DATA_CONSTANTS = {
  300: { status: 300, payload: undefined } as RedirectData<undefined>,
  301: { status: 301, payload: undefined } as RedirectData<undefined>,
  302: { status: 302, payload: undefined } as RedirectData<undefined>,
  303: { status: 303, payload: undefined } as RedirectData<undefined>,
  304: { status: 304, payload: undefined } as RedirectData<undefined>,
  305: { status: 305, payload: undefined } as RedirectData<undefined>,
  306: { status: 306, payload: undefined } as RedirectData<undefined>,
  307: { status: 307, payload: undefined } as RedirectData<undefined>,
  308: { status: 308, payload: undefined } as RedirectData<undefined>,
  309: { status: 309, payload: undefined } as RedirectData<undefined>,
  310: { status: 310, payload: undefined } as RedirectData<undefined>,
  311: { status: 311, payload: undefined } as RedirectData<undefined>,
  312: { status: 312, payload: undefined } as RedirectData<undefined>,
  313: { status: 313, payload: undefined } as RedirectData<undefined>,
  314: { status: 314, payload: undefined } as RedirectData<undefined>,
  315: { status: 315, payload: undefined } as RedirectData<undefined>,
  316: { status: 316, payload: undefined } as RedirectData<undefined>,
  317: { status: 317, payload: undefined } as RedirectData<undefined>,
  318: { status: 318, payload: undefined } as RedirectData<undefined>,
  319: { status: 319, payload: undefined } as RedirectData<undefined>,
  320: { status: 320, payload: undefined } as RedirectData<undefined>,
  321: { status: 321, payload: undefined } as RedirectData<undefined>,
  322: { status: 322, payload: undefined } as RedirectData<undefined>,
  323: { status: 323, payload: undefined } as RedirectData<undefined>,
  324: { status: 324, payload: undefined } as RedirectData<undefined>,
  325: { status: 325, payload: undefined } as RedirectData<undefined>,
  326: { status: 326, payload: undefined } as RedirectData<undefined>,
  327: { status: 327, payload: undefined } as RedirectData<undefined>,
  328: { status: 328, payload: undefined } as RedirectData<undefined>,
  329: { status: 329, payload: undefined } as RedirectData<undefined>,
  330: { status: 330, payload: undefined } as RedirectData<undefined>,
  331: { status: 331, payload: undefined } as RedirectData<undefined>,
  332: { status: 332, payload: undefined } as RedirectData<undefined>,
  333: { status: 333, payload: undefined } as RedirectData<undefined>,
  334: { status: 334, payload: undefined } as RedirectData<undefined>,
  335: { status: 335, payload: undefined } as RedirectData<undefined>,
  336: { status: 336, payload: undefined } as RedirectData<undefined>,
  337: { status: 337, payload: undefined } as RedirectData<undefined>,
  338: { status: 338, payload: undefined } as RedirectData<undefined>,
  339: { status: 339, payload: undefined } as RedirectData<undefined>,
  340: { status: 340, payload: undefined } as RedirectData<undefined>,
  341: { status: 341, payload: undefined } as RedirectData<undefined>,
  342: { status: 342, payload: undefined } as RedirectData<undefined>,
  343: { status: 343, payload: undefined } as RedirectData<undefined>,
  344: { status: 344, payload: undefined } as RedirectData<undefined>,
  345: { status: 345, payload: undefined } as RedirectData<undefined>,
  346: { status: 346, payload: undefined } as RedirectData<undefined>,
  347: { status: 347, payload: undefined } as RedirectData<undefined>,
  348: { status: 348, payload: undefined } as RedirectData<undefined>,
  349: { status: 349, payload: undefined } as RedirectData<undefined>,
  350: { status: 350, payload: undefined } as RedirectData<undefined>,
  351: { status: 351, payload: undefined } as RedirectData<undefined>,
  352: { status: 352, payload: undefined } as RedirectData<undefined>,
  353: { status: 353, payload: undefined } as RedirectData<undefined>,
  354: { status: 354, payload: undefined } as RedirectData<undefined>,
  355: { status: 355, payload: undefined } as RedirectData<undefined>,
  356: { status: 356, payload: undefined } as RedirectData<undefined>,
  357: { status: 357, payload: undefined } as RedirectData<undefined>,
  358: { status: 358, payload: undefined } as RedirectData<undefined>,
  359: { status: 359, payload: undefined } as RedirectData<undefined>,
  360: { status: 360, payload: undefined } as RedirectData<undefined>,
  361: { status: 361, payload: undefined } as RedirectData<undefined>,
  362: { status: 362, payload: undefined } as RedirectData<undefined>,
  363: { status: 363, payload: undefined } as RedirectData<undefined>,
  364: { status: 364, payload: undefined } as RedirectData<undefined>,
  365: { status: 365, payload: undefined } as RedirectData<undefined>,
  366: { status: 366, payload: undefined } as RedirectData<undefined>,
  367: { status: 367, payload: undefined } as RedirectData<undefined>,
  368: { status: 368, payload: undefined } as RedirectData<undefined>,
  369: { status: 369, payload: undefined } as RedirectData<undefined>,
  370: { status: 370, payload: undefined } as RedirectData<undefined>,
  371: { status: 371, payload: undefined } as RedirectData<undefined>,
  372: { status: 372, payload: undefined } as RedirectData<undefined>,
  373: { status: 373, payload: undefined } as RedirectData<undefined>,
  374: { status: 374, payload: undefined } as RedirectData<undefined>,
  375: { status: 375, payload: undefined } as RedirectData<undefined>,
  376: { status: 376, payload: undefined } as RedirectData<undefined>,
  377: { status: 377, payload: undefined } as RedirectData<undefined>,
  378: { status: 378, payload: undefined } as RedirectData<undefined>,
  379: { status: 379, payload: undefined } as RedirectData<undefined>,
  380: { status: 380, payload: undefined } as RedirectData<undefined>,
  381: { status: 381, payload: undefined } as RedirectData<undefined>,
  382: { status: 382, payload: undefined } as RedirectData<undefined>,
  383: { status: 383, payload: undefined } as RedirectData<undefined>,
  384: { status: 384, payload: undefined } as RedirectData<undefined>,
  385: { status: 385, payload: undefined } as RedirectData<undefined>,
  386: { status: 386, payload: undefined } as RedirectData<undefined>,
  387: { status: 387, payload: undefined } as RedirectData<undefined>,
  388: { status: 388, payload: undefined } as RedirectData<undefined>,
  389: { status: 389, payload: undefined } as RedirectData<undefined>,
  390: { status: 390, payload: undefined } as RedirectData<undefined>,
  391: { status: 391, payload: undefined } as RedirectData<undefined>,
  392: { status: 392, payload: undefined } as RedirectData<undefined>,
  393: { status: 393, payload: undefined } as RedirectData<undefined>,
  394: { status: 394, payload: undefined } as RedirectData<undefined>,
  395: { status: 395, payload: undefined } as RedirectData<undefined>,
  396: { status: 396, payload: undefined } as RedirectData<undefined>,
  397: { status: 397, payload: undefined } as RedirectData<undefined>,
  398: { status: 398, payload: undefined } as RedirectData<undefined>,
  399: { status: 399, payload: undefined } as RedirectData<undefined>,
} as const;
