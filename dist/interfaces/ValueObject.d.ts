import { Exception, IValidator } from "../validators";
declare type RV<T> = readonly IValidator<T>[];
export declare class ValueObject<T = any, V extends RV<any> = any> {
    private value;
    validators?: V | undefined;
    constructor(value: T, validators?: V | undefined);
    get unSafe(): T;
    get safe(): Exception<400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 419 | 420 | 421 | 422 | 423 | 424 | 425 | 426 | 427 | 428 | 429 | 430 | 431 | 432 | 433 | 434 | 435 | 436 | 437 | 438 | 439 | 440 | 441 | 442 | 443 | 444 | 445 | 446 | 447 | 448 | 449 | 450 | 451 | 452 | 453 | 454 | 455 | 456 | 457 | 458 | 459 | 460 | 461 | 462 | 463 | 464 | 465 | 466 | 467 | 468 | 469 | 470 | 471 | 472 | 473 | 474 | 475 | 476 | 477 | 478 | 479 | 480 | 481 | 482 | 483 | 484 | 485 | 486 | 487 | 488 | 489 | 490 | 491 | 492 | 493 | 494 | 495 | 496 | 497 | 498 | 499 | 6000 | 6001 | 6002 | 6003 | 6004 | 6005 | 6006 | 6007 | 6008 | 6009 | 6010 | 6011 | 6012 | 6013 | 6014 | 6015 | 6016 | 6017 | 6018 | 6019 | 6020 | 6021 | 6022 | 6023 | 6024 | 6025 | 6026 | 6027 | 6028 | 6029 | 6030 | 6031 | 6032 | 6033 | 6034 | 6035 | 6036 | 6037 | 6038 | 6039 | 6040 | 6041 | 6042 | 6043 | 6044 | 6045 | 6046 | 6047 | 6048 | 6049 | 6050 | 6051 | 6052 | 6053 | 6054 | 6055 | 6056 | 6057 | 6058 | 6059 | 6060 | 6061 | 6062 | 6063 | 6064 | 6065 | 6066 | 6067 | 6068 | 6069 | 6070 | 6071 | 6072 | 6073 | 6074 | 6075 | 6076 | 6077 | 6078 | 6079 | 6080 | 6081 | 6082 | 6083 | 6084 | 6085 | 6086 | 6087 | 6088 | 6089 | 6090 | 6091 | 6092 | 6093 | 6094 | 6095 | 6096 | 6097 | 6098 | 6099 | 6100 | 6101 | 6102 | 6103 | 6104 | 6105 | 6106 | 6107 | 6108 | 6109 | 6110 | 6111 | 6112 | 6113 | 6114 | 6115 | 6116 | 6117 | 6118 | 6119 | 6120 | 6121 | 6122 | 6123 | 6124 | 6125 | 6126 | 6127 | 6128 | 6129 | 6130 | 6131 | 6132 | 6133 | 6134 | 6135 | 6136 | 6137 | 6138 | 6139 | 6140 | 6141 | 6142 | 6143 | 6144 | 6145 | 6146 | 6147 | 6148 | 6149 | 6150 | 6151 | 6152 | 6153 | 6154 | 6155 | 6156 | 6157 | 6158 | 6159 | 6160 | 6161 | 6162 | 6163 | 6164 | 6165 | 6166 | 6167 | 6168 | 6169 | 6170 | 6171 | 6172 | 6173 | 6174 | 6175 | 6176 | 6177 | 6178 | 6179 | 6180 | 6181 | 6182 | 6183 | 6184 | 6185 | 6186 | 6187 | 6188 | 6189 | 6190 | 6191 | 6192 | 6193 | 6194 | 6195 | 6196 | 6197 | 6198 | 6199 | 6200 | 6201 | 6202 | 6203 | 6204 | 6205 | 6206 | 6207 | 6208 | 6209 | 6210 | 6211 | 6212 | 6213 | 6214 | 6215 | 6216 | 6217 | 6218 | 6219 | 6220 | 6221 | 6222 | 6223 | 6224 | 6225 | 6226 | 6227 | 6228 | 6229 | 6230 | 6231 | 6232 | 6233 | 6234 | 6235 | 6236 | 6237 | 6238 | 6239 | 6240 | 6241 | 6242 | 6243 | 6244 | 6245 | 6246 | 6247 | 6248 | 6249 | 6250 | 6251 | 6252 | 6253 | 6254 | 6255 | 6256 | 6257 | 6258 | 6259 | 6260 | 6261 | 6262 | 6263 | 6264 | 6265 | 6266 | 6267 | 6268 | 6269 | 6270 | 6271 | 6272 | 6273 | 6274 | 6275 | 6276 | 6277 | 6278 | 6279 | 6280 | 6281 | 6282 | 6283 | 6284 | 6285 | 6286 | 6287 | 6288 | 6289 | 6290 | 6291 | 6292 | 6293 | 6294 | 6295 | 6296 | 6297 | 6298 | 6299 | 6300 | 6301 | 6302 | 6303 | 6304 | 6305 | 6306 | 6307 | 6308 | 6309 | 6310 | 6311 | 6312 | 6313 | 6314 | 6315 | 6316 | 6317 | 6318 | 6319 | 6320 | 6321 | 6322 | 6323 | 6324 | 6325 | 6326 | 6327 | 6328 | 6329 | 6330 | 6331 | 6332 | 6333 | 6334 | 6335 | 6336 | 6337 | 6338 | 6339 | 6340 | 6341 | 6342 | 6343 | 6344 | 6345 | 6346 | 6347 | 6348 | 6349 | 6350 | 6351 | 6352 | 6353 | 6354 | 6355 | 6356 | 6357 | 6358 | 6359 | 6360 | 6361 | 6362 | 6363 | 6364 | 6365 | 6366 | 6367 | 6368 | 6369 | 6370 | 6371 | 6372 | 6373 | 6374 | 6375 | 6376 | 6377 | 6378 | 6379 | 6380 | 6381 | 6382 | 6383 | 6384 | 6385 | 6386 | 6387 | 6388 | 6389 | 6390 | 6391 | 6392 | 6393 | 6394 | 6395 | 6396 | 6397 | 6398 | 6399 | 6400 | 6401 | 6402 | 6403 | 6404 | 6405 | 6406 | 6407 | 6408 | 6409 | 6410 | 6411 | 6412 | 6413 | 6414 | 6415 | 6416 | 6417 | 6418 | 6419 | 6420 | 6421 | 6422 | 6423 | 6424 | 6425 | 6426 | 6427 | 6428 | 6429 | 6430 | 6431 | 6432 | 6433 | 6434 | 6435 | 6436 | 6437 | 6438 | 6439 | 6440 | 6441 | 6442 | 6443 | 6444 | 6445 | 6446 | 6447 | 6448 | 6449 | 6450 | 6451 | 6452 | 6453 | 6454 | 6455 | 6456 | 6457 | 6458 | 6459 | 6460 | 6461 | 6462 | 6463 | 6464 | 6465 | 6466 | 6467 | 6468 | 6469 | 6470 | 6471 | 6472 | 6473 | 6474 | 6475 | 6476 | 6477 | 6478 | 6479 | 6480 | 6481 | 6482 | 6483 | 6484 | 6485 | 6486 | 6487 | 6488 | 6489 | 6490 | 6491 | 6492 | 6493 | 6494 | 6495 | 6496 | 6497 | 6498 | 6499 | 6500 | 6501 | 6502 | 6503 | 6504 | 6505 | 6506 | 6507 | 6508 | 6509 | 6510 | 6511 | 6512 | 6513 | 6514 | 6515 | 6516 | 6517 | 6518 | 6519 | 6520 | 6521 | 6522 | 6523 | 6524 | 6525 | 6526 | 6527 | 6528 | 6529 | 6530 | 6531 | 6532 | 6533 | 6534 | 6535 | 6536 | 6537 | 6538 | 6539 | 6540 | 6541 | 6542 | 6543 | 6544 | 6545 | 6546 | 6547 | 6548 | 6549 | 6550 | 6551 | 6552 | 6553 | 6554 | 6555 | 6556 | 6557 | 6558 | 6559 | 6560 | 6561 | 6562 | 6563 | 6564 | 6565 | 6566 | 6567 | 6568 | 6569 | 6570 | 6571 | 6572 | 6573 | 6574 | 6575 | 6576 | 6577 | 6578 | 6579 | 6580 | 6581 | 6582 | 6583 | 6584 | 6585 | 6586 | 6587 | 6588 | 6589 | 6590 | 6591 | 6592 | 6593 | 6594 | 6595 | 6596 | 6597 | 6598 | 6599 | 6600 | 6601 | 6602 | 6603 | 6604 | 6605 | 6606 | 6607 | 6608 | 6609 | 6610 | 6611 | 6612 | 6613 | 6614 | 6615 | 6616 | 6617 | 6618 | 6619 | 6620 | 6621 | 6622 | 6623 | 6624 | 6625 | 6626 | 6627 | 6628 | 6629 | 6630 | 6631 | 6632 | 6633 | 6634 | 6635 | 6636 | 6637 | 6638 | 6639 | 6640 | 6641 | 6642 | 6643 | 6644 | 6645 | 6646 | 6647 | 6648 | 6649 | 6650 | 6651 | 6652 | 6653 | 6654 | 6655 | 6656 | 6657 | 6658 | 6659 | 6660 | 6661 | 6662 | 6663 | 6664 | 6665 | 6666 | 6667 | 6668 | 6669 | 6670 | 6671 | 6672 | 6673 | 6674 | 6675 | 6676 | 6677 | 6678 | 6679 | 6680 | 6681 | 6682 | 6683 | 6684 | 6685 | 6686 | 6687 | 6688 | 6689 | 6690 | 6691 | 6692 | 6693 | 6694 | 6695 | 6696 | 6697 | 6698 | 6699 | 6700 | 6701 | 6702 | 6703 | 6704 | 6705 | 6706 | 6707 | 6708 | 6709 | 6710 | 6711 | 6712 | 6713 | 6714 | 6715 | 6716 | 6717 | 6718 | 6719 | 6720 | 6721 | 6722 | 6723 | 6724 | 6725 | 6726 | 6727 | 6728 | 6729 | 6730 | 6731 | 6732 | 6733 | 6734 | 6735 | 6736 | 6737 | 6738 | 6739 | 6740 | 6741 | 6742 | 6743 | 6744 | 6745 | 6746 | 6747 | 6748 | 6749 | 6750 | 6751 | 6752 | 6753 | 6754 | 6755 | 6756 | 6757 | 6758 | 6759 | 6760 | 6761 | 6762 | 6763 | 6764 | 6765 | 6766 | 6767 | 6768 | 6769 | 6770 | 6771 | 6772 | 6773 | 6774 | 6775 | 6776 | 6777 | 6778 | 6779 | 6780 | 6781 | 6782 | 6783 | 6784 | 6785 | 6786 | 6787 | 6788 | 6789 | 6790 | 6791 | 6792 | 6793 | 6794 | 6795 | 6796 | 6797 | 6798 | 6799 | 6800 | 6801 | 6802 | 6803 | 6804 | 6805 | 6806 | 6807 | 6808 | 6809 | 6810 | 6811 | 6812 | 6813 | 6814 | 6815 | 6816 | 6817 | 6818 | 6819 | 6820 | 6821 | 6822 | 6823 | 6824 | 6825 | 6826 | 6827 | 6828 | 6829 | 6830 | 6831 | 6832 | 6833 | 6834 | 6835 | 6836 | 6837 | 6838 | 6839 | 6840 | 6841 | 6842 | 6843 | 6844 | 6845 | 6846 | 6847 | 6848 | 6849 | 6850 | 6851 | 6852 | 6853 | 6854 | 6855 | 6856 | 6857 | 6858 | 6859 | 6860 | 6861 | 6862 | 6863 | 6864 | 6865 | 6866 | 6867 | 6868 | 6869 | 6870 | 6871 | 6872 | 6873 | 6874 | 6875 | 6876 | 6877 | 6878 | 6879 | 6880 | 6881 | 6882 | 6883 | 6884 | 6885 | 6886 | 6887 | 6888 | 6889 | 6890 | 6891 | 6892 | 6893 | 6894 | 6895 | 6896 | 6897 | 6898 | 6899 | 6900 | 6901 | 6902 | 6903 | 6904 | 6905 | 6906 | 6907 | 6908 | 6909 | 6910 | 6911 | 6912 | 6913 | 6914 | 6915 | 6916 | 6917 | 6918 | 6919 | 6920 | 6921 | 6922 | 6923 | 6924 | 6925 | 6926 | 6927 | 6928 | 6929 | 6930 | 6931 | 6932 | 6933 | 6934 | 6935 | 6936 | 6937 | 6938 | 6939 | 6940 | 6941 | 6942 | 6943 | 6944 | 6945 | 6946 | 6947 | 6948 | 6949 | 6950 | 6951 | 6952 | 6953 | 6954 | 6955 | 6956 | 6957 | 6958 | 6959 | 6960 | 6961 | 6962 | 6963 | 6964 | 6965 | 6966 | 6967 | 6968 | 6969 | 6970 | 6971 | 6972 | 6973 | 6974 | 6975 | 6976 | 6977 | 6978 | 6979 | 6980 | 6981 | 6982 | 6983 | 6984 | 6985 | 6986 | 6987 | 6988 | 6989 | 6990 | 6991 | 6992 | 6993 | 6994 | 6995 | 6996 | 6997 | 6998 | 6999 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 309 | 310 | 311 | 312 | 313 | 314 | 315 | 316 | 317 | 318 | 319 | 320 | 321 | 322 | 323 | 324 | 325 | 326 | 327 | 328 | 329 | 330 | 331 | 332 | 333 | 334 | 335 | 336 | 337 | 338 | 339 | 340 | 341 | 342 | 343 | 344 | 345 | 346 | 347 | 348 | 349 | 350 | 351 | 352 | 353 | 354 | 355 | 356 | 357 | 358 | 359 | 360 | 361 | 362 | 363 | 364 | 365 | 366 | 367 | 368 | 369 | 370 | 371 | 372 | 373 | 374 | 375 | 376 | 377 | 378 | 379 | 380 | 381 | 382 | 383 | 384 | 385 | 386 | 387 | 388 | 389 | 390 | 391 | 392 | 393 | 394 | 395 | 396 | 397 | 398 | 399 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511 | 512 | 513 | 514 | 515 | 516 | 517 | 518 | 519 | 520 | 521 | 522 | 523 | 524 | 525 | 526 | 527 | 528 | 529 | 530 | 531 | 532 | 533 | 534 | 535 | 536 | 537 | 538 | 539 | 540 | 541 | 542 | 543 | 544 | 545 | 546 | 547 | 548 | 549 | 550 | 551 | 552 | 553 | 554 | 555 | 556 | 557 | 558 | 559 | 560 | 561 | 562 | 563 | 564 | 565 | 566 | 567 | 568 | 569 | 570 | 571 | 572 | 573 | 574 | 575 | 576 | 577 | 578 | 579 | 580 | 581 | 582 | 583 | 584 | 585 | 586 | 587 | 588 | 589 | 590 | 591 | 592 | 593 | 594 | 595 | 596 | 597 | 598 | 599> | T;
    get isValid(): boolean;
    chain(next: ValueObject): ValueObject;
}
export declare type SimpleObject<T> = T extends ValueObject<infer R> ? R : T extends (...args: any[]) => any ? never : T;
export {};
