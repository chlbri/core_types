"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTimeOutClientError = exports.TIMEOUT_ERROR_STATUS = void 0;
const _1 = require("./_");
exports.TIMEOUT_ERROR_STATUS = [
    900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914,
    915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929,
    930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944,
    945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959,
    960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974,
    975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989,
    990, 991, 992, 993, 994, 995, 996, 997, 998, 999,
];
function isTimeOutClientError(val) {
    return _1.isN(exports.TIMEOUT_ERROR_STATUS, val);
}
exports.isTimeOutClientError = isTimeOutClientError;
