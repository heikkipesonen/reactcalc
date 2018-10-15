import { Material, Types } from './Material'

const TABLE = [
    [40, 20, 2, 4, 2, 1.68, 2.14, 4.05, 1.34, 1.38, 0.793, 2.02, 1.34, 2.61, 1.6, 3.45, 2.36, 0.113],
    [40, 20, 2.5, 5, 2.5, 2.03, 2.59, 4.69, 1.54, 1.35, 0.77, 2.35, 1.54, 3.09, 1.88, 4.06, 2.72, 0.111],
    [40, 20, 3, 6, 3, 2.36, 3.01, 5.21, 1.68, 1.32, 0.748, 2.6, 1.68, 3.5, 2.12, 4.57, 3, 0.11],
    [50, 25, 2, 4, 2, 2.15, 2.74, 8.38, 2.81, 1.75, 1.01, 3.35, 2.25, 4.26, 2.62, 7.06, 3.92, 0.143],
    [50, 25, 2.5, 5, 2.5, 2.62, 3.34, 9.89, 3.28, 1.72, 0.991, 3.95, 2.62, 5.11, 3.12, 8.43, 4.6, 0.141],
    [50, 25, 3, 6, 3, 3.07, 3.91, 11.2, 3.67, 1.69, 0.969, 4.47, 2.93, 5.86, 3.56, 9.64, 5.18, 0.14],
    [50, 30, 2, 4, 2, 2.31, 2.94, 9.54, 4.29, 1.8, 1.21, 3.81, 2.86, 4.74, 3.33, 9.77, 4.84, 0.153],
    [50, 30, 2.5, 5, 2.5, 2.82, 3.59, 11.3, 5.05, 1.77, 1.19, 4.52, 3.37, 5.7, 3.98, 11.7, 5.72, 0.151],
    [50, 30, 3, 6, 3, 3.3, 4.21, 12.8, 5.7, 1.75, 1.16, 5.13, 3.8, 6.57, 4.58, 13.5, 6.49, 0.15],
    [50, 30, 4, 8, 4, 4.2, 5.35, 15.3, 6.69, 1.69, 1.12, 6.1, 4.46, 8.05, 5.58, 16.5, 7.71, 0.146],
    [60, 40, 2, 4, 2, 2.93, 3.74, 18.4, 9.83, 2.22, 1.62, 6.14, 4.92, 7.47, 5.65, 20.7, 8.12, 0.193],
    [60, 40, 2.5, 5, 2.5, 3.6, 4.59, 22.1, 11.7, 2.19, 1.6, 7.36, 5.87, 9.06, 6.84, 25.1, 9.72, 0.191],
    [60, 40, 3, 6, 3, 4.25, 5.41, 25.4, 13.4, 2.17, 1.58, 8.46, 6.72, 10.5, 7.94, 29.3, 11.2, 0.19],
    [60, 40, 4, 8, 4, 5.45, 6.95, 31, 16.3, 2.11, 1.53, 10.3, 8.14, 13.2, 9.89, 36.7, 13.7, 0.186],
    [60, 40, 5, 10, 5, 6.56, 8.36, 35.3, 18.4, 2.06, 1.48, 11.8, 9.21, 15.4, 11.5, 42.8, 15.6, 0.183],
    [70, 50, 2, 4, 2, 3.56, 4.54, 31.5, 18.8, 2.63, 2.03, 8.99, 7.5, 10.8, 8.58, 37.5, 12.2, 0.233],
    [70, 50, 2.5, 5, 2.5, 4.39, 5.59, 38, 22.6, 2.61, 2.01, 10.9, 9.04, 13.2, 10.4, 45.8, 14.7, 0.231],
    [70, 50, 3, 6, 3, 5.19, 6.61, 44.1, 26.1, 2.58, 1.99, 12.6, 10.4, 15.4, 12.2, 53.6, 17.1, 0.23],
    [70, 50, 4, 8, 4, 6.71, 8.55, 54.7, 32.2, 2.53, 1.94, 15.6, 12.9, 19.5, 15.4, 68.1, 21.2, 0.226],
    [70, 50, 5, 10, 5, 8.13, 10.4, 63.5, 37.2, 2.48, 1.9, 18.1, 14.9, 23.1, 18.2, 80.8, 24.6, 0.223],
    [80, 40, 2, 4, 2, 3.56, 4.54, 37.4, 12.7, 2.87, 1.67, 9.34, 6.36, 11.6, 7.17, 30.9, 11, 0.233],
    [80, 40, 2.5, 5, 2.5, 4.39, 5.59, 45.1, 15.3, 2.84, 1.65, 11.3, 7.63, 14.1, 8.72, 37.6, 13.2, 0.231],
    [80, 40, 3, 6, 3, 5.19, 6.61, 52.3, 17.6, 2.81, 1.63, 13.1, 8.78, 16.5, 10.2, 43.9, 15.3, 0.23],
    [80, 40, 4, 8, 4, 6.71, 8.55, 64.8, 21.5, 2.75, 1.59, 16.2, 10.7, 20.9, 12.8, 55.2, 18.8, 0.226],
    [80, 40, 5, 10, 5, 8.13, 10.4, 75.1, 24.6, 2.69, 1.54, 18.8, 12.3, 24.7, 15, 65, 21.7, 0.223],
    [80, 60, 2, 4, 2, 4.19, 5.34, 49.5, 31.9, 3.05, 2.44, 12.4, 10.6, 14.7, 12.1, 61.2, 17.1, 0.273],
    [80, 60, 2.5, 5, 2.5, 5.17, 6.59, 60.1, 38.6, 3.02, 2.42, 15, 12.9, 18, 14.8, 75.1, 20.7, 0.271],
    [80, 60, 3, 6, 3, 6.13, 7.81, 70, 44.9, 3, 2.4, 17.5, 15, 21.2, 17.4, 88.3, 24.1, 0.27],
    [80, 60, 4, 8, 4, 7.97, 10.1, 87.9, 56.1, 2.94, 2.35, 22, 18.7, 27, 22.1, 113, 30.3, 0.266],
    [80, 60, 5, 10, 5, 9.7, 12.4, 103, 65.7, 2.89, 2.31, 25.8, 21.9, 32.2, 26.4, 136, 35.7, 0.263],
    [90, 50, 2, 4, 2, 4.19, 5.34, 57.9, 23.4, 3.29, 2.09, 12.9, 9.35, 15.7, 10.5, 53.4, 15.9, 0.273],
    [90, 50, 2.5, 5, 2.5, 5.17, 6.59, 70.3, 28.2, 3.27, 2.07, 15.6, 11.3, 19.3, 12.8, 65.3, 19.2, 0.271],
    [90, 50, 3, 6, 3, 6.13, 7.81, 81.9, 32.7, 3.24, 2.05, 18.2, 13.1, 22.6, 15, 76.7, 22.4, 0.27],
    [90, 50, 3.6, 7.2, 3.6, 7.24, 9.23, 94.7, 37.7, 3.2, 2.02, 21.1, 15.1, 26.4, 17.5, 89.6, 25.8, 0.268],
    [90, 50, 4, 8, 4, 7.97, 10.1, 103, 40.7, 3.18, 2, 22.8, 16.3, 28.8, 19.1, 97.7, 28, 0.266],
    [90, 50, 5, 10, 5, 9.7, 12.4, 121, 47.4, 3.12, 1.96, 26.8, 18.9, 34.4, 22.7, 116, 32.7, 0.263],
    [100, 40, 2.5, 5, 2.5, 5.17, 6.59, 79.3, 18.8, 3.47, 1.69, 15.9, 9.39, 20.2, 10.6, 50.5, 16.8, 0.271],
    [100, 40, 3, 6, 3, 6.13, 7.81, 92.3, 21.7, 3.44, 1.67, 18.5, 10.8, 23.7, 12.4, 59, 19.4, 0.27],
    [100, 40, 4, 8, 4, 7.97, 10.1, 116, 26.7, 3.38, 1.62, 23.1, 13.3, 30.3, 15.7, 74.5, 24, 0.266],
    [100, 40, 5, 10, 5, 9.7, 12.4, 136, 30.8, 3.31, 1.58, 27.1, 15.4, 36.1, 18.5, 87.9, 27.9, 0.263],
    [100, 50, 2.5, 5, 2.5, 5.56, 7.09, 91.2, 31.1, 3.59, 2.09, 18.2, 12.4, 22.7, 14, 75.4, 21.5, 0.291],
    [100, 50, 3, 6, 3, 6.6, 8.41, 106, 36.1, 3.56, 2.07, 21.3, 14.4, 26.7, 16.4, 88.6, 25, 0.29],
    [100, 50, 4, 8, 4, 8.59, 10.9, 134, 44.9, 3.5, 2.03, 26.8, 18, 34.1, 20.9, 113, 31.3, 0.286],
    [100, 50, 5, 10, 5, 10.5, 13.4, 158, 52.5, 3.44, 1.98, 31.6, 21, 40.8, 25, 135, 36.8, 0.283],
    [100, 50, 6, 12, 6, 12.3, 15.6, 179, 58.7, 3.38, 1.94, 35.8, 23.5, 46.9, 28.5, 154, 41.4, 0.279],
    [100, 50, 6.3, 15.75, 9.45, 12.5, 15.9, 176, 58.2, 3.32, 1.91, 35.1, 23.3, 46.9, 28.6, 158, 42.1, 0.273],
    [100, 60, 3, 6, 3, 7.07, 9.01, 121, 54.6, 3.66, 2.46, 24.1, 18.2, 29.6, 20.8, 122, 30.6, 0.31],
    [100, 60, 3.6, 7.2, 3.6, 8.37, 10.7, 140, 63.3, 3.63, 2.44, 28, 21.1, 34.7, 24.3, 143, 35.6, 0.308],
    [100, 60, 4, 8, 4, 9.22, 11.7, 153, 68.7, 3.6, 2.42, 30.5, 22.9, 37.9, 26.6, 156, 38.7, 0.306],
    [100, 60, 5, 10, 5, 11.3, 14.4, 181, 80.8, 3.55, 2.37, 36.2, 26.9, 45.6, 31.9, 188, 45.8, 0.303],
    [100, 60, 6, 12, 6, 13.2, 16.8, 205, 91.2, 3.49, 2.33, 41.1, 30.4, 52.5, 36.6, 216, 51.9, 0.299],
    [100, 60, 6.3, 15.75, 9.45, 13.5, 17.2, 203, 90.9, 3.44, 2.3, 40.7, 30.3, 52.8, 36.9, 223, 53, 0.293],
    [100, 80, 2.5, 5, 2.5, 6.74, 8.59, 127, 90.2, 3.84, 3.24, 25.4, 22.5, 30, 25.8, 166, 35.7, 0.351],
    [100, 80, 3, 6, 3, 8.01, 10.2, 149, 106, 3.82, 3.22, 29.8, 26.4, 35.4, 30.4, 196, 41.9, 0.35],
    [100, 80, 4, 8, 4, 10.5, 13.3, 189, 134, 3.77, 3.17, 37.9, 33.5, 45.6, 39.2, 254, 53.4, 0.346],
    [100, 80, 5, 10, 5, 12.8, 16.4, 226, 160, 3.72, 3.12, 45.2, 39.9, 55.1, 47.2, 308, 63.7, 0.343],
    [100, 80, 6, 12, 6, 15.1, 19.2, 258, 182, 3.67, 3.08, 51.7, 45.5, 63.8, 54.7, 357, 73, 0.339],
    [100, 80, 6.3, 15.75, 9.45, 15.5, 19.7, 259, 183, 3.62, 3.04, 51.8, 45.7, 64.6, 55.4, 371, 75, 0.333],
    [120, 60, 2.5, 5, 2.5, 6.74, 8.59, 161, 55.2, 4.33, 2.53, 26.9, 18.4, 33.2, 20.6, 133, 31.7, 0.351],
    [120, 60, 3, 6, 3, 8.01, 10.2, 189, 64.4, 4.3, 2.51, 31.5, 21.5, 39.2, 24.2, 156, 37.1, 0.35],
    [120, 60, 3.6, 7.2, 3.6, 9.5, 12.1, 221, 74.8, 4.27, 2.48, 36.8, 24.9, 46.1, 28.4, 184, 43.2, 0.348],
    [120, 60, 4, 8, 4, 10.5, 13.3, 241, 81.2, 4.25, 2.47, 40.1, 27.1, 50.5, 31.1, 201, 47, 0.346],
    [120, 60, 5, 10, 5, 12.8, 16.4, 287, 96, 4.19, 2.42, 47.8, 32, 60.9, 37.4, 242, 55.8, 0.343],
    [120, 60, 6, 12, 6, 15.1, 19.2, 328, 109, 4.13, 2.38, 54.7, 36.3, 70.6, 43.1, 280, 63.6, 0.339],
    [120, 60, 6.3, 15.75, 9.45, 15.5, 19.7, 327, 109, 4.07, 2.35, 54.5, 36.4, 71.2, 43.7, 289, 65.1, 0.333],
    [120, 60, 8, 20, 12, 18.9, 24, 375, 124, 3.95, 2.27, 62.6, 41.3, 84.1, 51.3, 340, 75, 0.326],
    [120, 80, 3, 6, 3, 8.96, 11.4, 230, 123, 4.49, 3.29, 38.4, 30.9, 46.2, 35, 255, 50.8, 0.39],
    [120, 80, 4, 8, 4, 11.7, 14.9, 295, 157, 4.44, 3.24, 49.1, 39.3, 59.8, 45.2, 331, 64.9, 0.386],
    [120, 80, 5, 10, 5, 14.4, 18.4, 353, 188, 4.39, 3.2, 58.9, 46.9, 72.4, 54.7, 402, 77.8, 0.383],
    [120, 80, 6, 12, 6, 17, 21.6, 406, 215, 4.33, 3.15, 67.7, 53.8, 84.3, 63.5, 469, 89.4, 0.379],
    [120, 80, 6.3, 15.75, 9.45, 17.5, 22.2, 408, 217, 4.28, 3.12, 68.1, 54.3, 85.6, 64.7, 488, 92.1, 0.373],
    [120, 80, 8, 20, 12, 21.4, 27.2, 476, 252, 4.18, 3.04, 79.3, 62.9, 102, 76.9, 584, 108, 0.366],
    [140, 80, 4, 8, 4, 13, 16.5, 430, 180, 5.1, 3.3, 61.4, 45.1, 75.5, 51.3, 412, 76.5, 0.426],
    [140, 80, 5, 10, 5, 16, 20.4, 517, 216, 5.04, 3.26, 73.9, 54, 91.8, 62.2, 501, 91.8, 0.423],
    [140, 80, 6, 12, 6, 18.9, 24, 597, 248, 4.98, 3.21, 85.3, 62, 107, 72.4, 584, 106, 0.419],
    [140, 80, 6.3, 15.75, 9.45, 19.4, 24.8, 603, 251, 4.93, 3.19, 86.1, 62.9, 109, 74, 609, 109, 0.413],
    [140, 80, 8, 20, 12, 23.9, 30.4, 708, 293, 4.82, 3.1, 101, 73.3, 131, 88.4, 731, 129, 0.406],
    [150, 100, 4, 8, 4, 14.9, 18.9, 595, 319, 5.6, 4.1, 79.3, 63.7, 95.7, 72.5, 662, 105, 0.486],
    [150, 100, 5, 10, 5, 18.3, 23.4, 719, 384, 5.55, 4.05, 95.9, 76.8, 117, 88.3, 809, 127, 0.483],
    [150, 100, 6, 12, 6, 21.7, 27.6, 835, 444, 5.5, 4.01, 111, 88.8, 137, 103, 948, 147, 0.479],
    [150, 100, 6.3, 15.75, 9.45, 22.4, 28.5, 848, 453, 5.45, 3.98, 113, 90.5, 140, 106, 992, 152, 0.473],
    [150, 100, 8, 20, 12, 27.7, 35.2, 1008, 536, 5.35, 3.9, 134, 107, 169, 128, 1206, 182, 0.466],
    [150, 100, 10, 25, 15, 33.4, 42.6, 1162, 614, 5.22, 3.8, 155, 123, 199, 150, 1426, 211, 0.457],
    [150, 100, 12, 36, 24, 37.7, 48.1, 1207, 642, 5.01, 3.65, 161, 128, 215, 163, 1573, 229, 0.438],
    [150, 100, 12.5, 37.5, 25, 38.9, 49.5, 1225, 651, 4.97, 3.63, 163, 130, 220, 166, 1606, 233, 0.436],
    [160, 80, 4, 8, 4, 14.2, 18.1, 598, 204, 5.74, 3.35, 74.7, 50.9, 92.9, 57.4, 494, 88, 0.466],
    [160, 80, 5, 10, 5, 17.5, 22.4, 722, 244, 5.68, 3.3, 90.2, 61, 113, 69.7, 601, 106, 0.463],
    [160, 80, 6, 12, 6, 20.7, 26.4, 836, 281, 5.62, 3.26, 105, 70.2, 132, 81.3, 702, 122, 0.459],
    [160, 80, 6.3, 15.75, 9.45, 21.4, 27.3, 846, 286, 5.57, 3.24, 106, 71.4, 135, 83.3, 732, 126, 0.453],
    [160, 80, 8, 20, 12, 26.4, 33.6, 1001, 335, 5.46, 3.16, 125, 83.7, 163, 100, 882, 150, 0.446],
    [160, 80, 10, 25, 15, 31.8, 40.6, 1146, 380, 5.32, 3.06, 143, 95, 191, 117, 1031, 172, 0.437],
    [160, 80, 12, 36, 24, 35.8, 45.7, 1171, 391, 5.06, 2.93, 146, 97.8, 204, 125, 1111, 183, 0.418],
    [160, 80, 12.5, 37.5, 25, 36.9, 47, 1185, 396, 5.02, 2.9, 148, 98.9, 208, 127, 1129, 185, 0.416],
    [180, 100, 4, 8, 4, 16.8, 21.3, 926, 374, 6.59, 4.18, 103, 74.8, 126, 84, 854, 127, 0.546],
    [180, 100, 5, 10, 5, 20.7, 26.4, 1124, 452, 6.53, 4.14, 125, 90.4, 154, 103, 1045, 154, 0.543],
    [180, 100, 6, 12, 6, 24.5, 31.2, 1310, 524, 6.48, 4.1, 146, 105, 181, 120, 1227, 179, 0.539],
    [180, 100, 6.3, 15.75, 9.45, 25.4, 32.3, 1335, 536, 6.43, 4.07, 148, 107, 186, 124, 1283, 185, 0.533],
    [180, 100, 8, 20, 12, 31.4, 40, 1598, 637, 6.32, 3.99, 178, 127, 226, 150, 1565, 222, 0.526],
    [180, 100, 10, 25, 15, 38.1, 48.6, 1859, 736, 6.19, 3.89, 207, 147, 268, 177, 1859, 260, 0.517],
    [180, 100, 12, 36, 24, 43.4, 55.3, 1965, 782, 5.96, 3.76, 218, 156, 292, 194, 2073, 285, 0.498],
    [180, 100, 12.5, 37.5, 25, 44.8, 57, 2001, 796, 5.92, 3.74, 222, 159, 300, 199, 2122, 290, 0.496],
    [200, 100, 4, 8, 4, 18, 22.9, 1200, 411, 7.23, 4.23, 120, 82.2, 148, 91.7, 985, 142, 0.586],
    [200, 100, 5, 10, 5, 22.3, 28.4, 1459, 497, 7.17, 4.19, 146, 99.4, 181, 112, 1206, 172, 0.583],
    [200, 100, 6, 12, 6, 26.4, 33.6, 1703, 577, 7.12, 4.14, 170, 115, 213, 132, 1417, 200, 0.579],
    [200, 100, 6.3, 15.75, 9.45, 27.4, 34.8, 1739, 591, 7.06, 4.12, 174, 118, 219, 135, 1483, 208, 0.573],
    [200, 100, 8, 20, 12, 33.9, 43.2, 2091, 705, 6.95, 4.04, 209, 141, 267, 165, 1811, 250, 0.566],
    [200, 100, 10, 25, 15, 41.3, 52.6, 2444, 818, 6.82, 3.94, 244, 164, 318, 195, 2154, 292, 0.557],
    [200, 100, 12, 36, 24, 47.1, 60.1, 2607, 876, 6.59, 3.82, 261, 175, 350, 215, 2414, 322, 0.538],
    [200, 100, 12.5, 37.5, 25, 48.7, 62, 2659, 892, 6.55, 3.79, 266, 178, 359, 221, 2474, 329, 0.536],
    [200, 120, 4, 8, 4, 19.3, 24.5, 1353, 618, 7.43, 5.02, 135, 103, 164, 115, 1345, 172, 0.626],
    [200, 120, 5, 10, 5, 23.8, 30.4, 1649, 750, 7.37, 4.97, 165, 125, 201, 141, 1652, 210, 0.623],
    [200, 120, 6, 12, 6, 28.3, 36, 1929, 874, 7.32, 4.93, 193, 146, 237, 166, 1947, 245, 0.619],
    [200, 120, 6.3, 15.75, 9.45, 29.3, 37.4, 1976, 898, 7.27, 4.9, 198, 150, 244, 172, 2040, 255, 0.613],
    [200, 120, 8, 20, 12, 36.5, 46.4, 2386, 1079, 7.17, 4.82, 239, 180, 298, 209, 2507, 308, 0.606],
    [200, 120, 10, 25, 15, 44.4, 56.6, 2806, 1262, 7.04, 4.72, 281, 210, 356, 250, 3007, 364, 0.597],
    [200, 120, 12, 36, 24, 50.9, 64.9, 3031, 1368, 6.84, 4.59, 303, 228, 395, 278, 3419, 406, 0.578],
    [200, 120, 12.5, 37.5, 25, 52.6, 67, 3099, 1397, 6.8, 4.57, 310, 233, 406, 285, 3514, 416, 0.576],
    [250, 100, 5, 10, 5, 26.2, 33.4, 2554, 610, 8.75, 4.28, 204, 122, 259, 136, 1620, 217, 0.683],
    [250, 100, 6, 12, 6, 31.1, 39.6, 2992, 710, 8.69, 4.23, 239, 142, 305, 160, 1905, 253, 0.679],
    [250, 100, 6.3, 15.75, 9.45, 32.3, 41.1, 3066, 730, 8.63, 4.21, 245, 146, 314, 165, 1993, 263, 0.673],
    [250, 100, 8, 20, 12, 40.2, 51.2, 3714, 875, 8.51, 4.13, 297, 175, 385, 201, 2439, 317, 0.666],
    [250, 100, 10, 25, 15, 49.1, 62.6, 4384, 1021, 8.37, 4.04, 351, 204, 462, 240, 2910, 373, 0.657],
    [250, 100, 12.5, 37.5, 25, 58.5, 74.5, 4868, 1133, 8.08, 3.9, 389, 227, 530, 275, 3373, 425, 0.636],
    [250, 150, 5, 10, 5, 30.1, 38.4, 3304, 1508, 9.28, 6.27, 264, 201, 320, 225, 3285, 337, 0.783],
    [250, 150, 6, 12, 6, 35.8, 45.6, 3886, 1768, 9.23, 6.23, 311, 236, 378, 266, 3886, 396, 0.779],
    [250, 150, 6.3, 15.75, 9.45, 37.2, 47.4, 4001, 1825, 9.18, 6.2, 320, 243, 391, 276, 4078, 412, 0.773],
    [250, 150, 8, 20, 12, 46.5, 59.2, 4886, 2219, 9.08, 6.12, 391, 296, 482, 340, 5050, 504, 0.766],
    [250, 150, 10, 25, 15, 57, 72.6, 5825, 2634, 8.96, 6.02, 466, 351, 582, 409, 6121, 602, 0.757],
    [250, 150, 12, 36, 24, 66, 84.1, 6458, 2925, 8.77, 5.9, 517, 390, 658, 463, 7088, 684, 0.738],
    [250, 150, 12.5, 37.5, 25, 68.3, 87, 6633, 3002, 8.73, 5.87, 531, 400, 678, 477, 7315, 704, 0.736],
    [250, 150, 16, 48, 32, 83.8, 107, 7660, 3453, 8.47, 5.69, 613, 460, 805, 566, 8713, 823, 0.718],
    [260, 180, 5, 10, 5, 33.2, 42.4, 4121, 2350, 9.86, 7.45, 317, 261, 377, 294, 4695, 426, 0.863],
    [260, 180, 6.3, 15.75, 9.45, 41.2, 52.5, 5013, 2856, 9.77, 7.38, 386, 317, 463, 361, 5844, 523, 0.853],
    [260, 180, 8, 20, 12, 51.5, 65.6, 6145, 3493, 9.68, 7.29, 473, 388, 573, 446, 7267, 642, 0.846],
    [260, 180, 10, 25, 15, 63.2, 80.6, 7363, 4174, 9.56, 7.2, 566, 464, 694, 540, 8850, 772, 0.837],
    [260, 180, 12, 36, 24, 73.5, 93.7, 8245, 4679, 9.38, 7.07, 634, 520, 790, 615, 10328, 884, 0.818],
    [260, 180, 12.5, 37.5, 25, 76.2, 97, 8482, 4812, 9.35, 7.04, 652, 535, 815, 635, 10676, 911, 0.816],
    [260, 180, 16, 48, 32, 93.9, 120, 9923, 5614, 9.11, 6.85, 763, 624, 977, 759, 12890, 1079, 0.798],
    [300, 100, 6, 12, 6, 35.8, 45.6, 4777, 842, 10.2, 4.3, 318, 168, 411, 188, 2403, 306, 0.779],
    [300, 100, 6.3, 15.75, 9.45, 37.2, 47.4, 4907, 868, 10.2, 4.28, 327, 174, 425, 194, 2515, 318, 0.773],
    [300, 100, 8, 20, 12, 46.5, 59.2, 5978, 1045, 10, 4.2, 399, 209, 523, 238, 3080, 385, 0.766],
    [300, 100, 10, 25, 15, 57, 72.6, 7106, 1224, 9.9, 4.11, 474, 245, 631, 285, 3681, 455, 0.757],
    [300, 100, 12, 36, 24, 66, 84.1, 7808, 1343, 9.64, 4, 521, 269, 710, 321, 4177, 508, 0.738],
    [300, 100, 12.5, 37.5, 25, 68.3, 87, 8010, 1374, 9.59, 3.97, 534, 275, 732, 330, 4292, 521, 0.736],
    [300, 100, 16, 48, 32, 83.8, 107, 9157, 1543, 9.26, 3.8, 610, 309, 865, 386, 4939, 592, 0.718],
    [300, 150, 6, 12, 6, 40.5, 51.6, 6074, 2080, 10.8, 6.35, 405, 277, 500, 309, 4988, 479, 0.879],
    [300, 150, 6.3, 15.75, 9.45, 42.2, 53.7, 6266, 2150, 10.8, 6.32, 418, 287, 517, 321, 5234, 499, 0.873],
    [300, 150, 8, 20, 12, 52.8, 67.2, 7684, 2623, 10.7, 6.25, 512, 350, 640, 396, 6491, 612, 0.866],
    [300, 150, 10, 25, 15, 64.8, 82.6, 9209, 3125, 10.6, 6.15, 614, 417, 776, 479, 7879, 733, 0.857],
    [300, 150, 12, 36, 24, 75.4, 96.1, 10298, 3498, 10.4, 6.03, 687, 466, 883, 546, 9153, 837, 0.838],
    [300, 150, 12.5, 37.5, 25, 78.1, 99.5, 10594, 3595, 10.3, 6.01, 706, 479, 912, 563, 9452, 862, 0.836],
    [300, 150, 16, 48, 32, 96.4, 123, 12387, 4174, 10, 5.83, 826, 557, 1092, 673, 11328, 1015, 0.818],
    [300, 200, 6, 12, 6, 45.2, 57.6, 7370, 3962, 11.3, 8.29, 491, 396, 588, 446, 8115, 651, 0.979],
    [300, 200, 6.3, 15.75, 9.45, 47.1, 60, 7624, 4104, 11.3, 8.27, 508, 410, 610, 463, 8524, 680, 0.973],
    [300, 200, 8, 20, 12, 59.1, 75.2, 9389, 5042, 11.2, 8.19, 626, 504, 757, 574, 10627, 838, 0.966],
    [300, 200, 10, 25, 15, 72.7, 92.6, 11313, 6058, 11.1, 8.09, 754, 606, 921, 698, 12987, 1012, 0.957],
    [300, 200, 12, 36, 24, 84.8, 108, 12788, 6854, 10.9, 7.96, 853, 685, 1056, 801, 15236, 1167, 0.938],
    [300, 200, 12.5, 37.5, 25, 88, 112, 13179, 7060, 10.8, 7.94, 879, 706, 1091, 828, 15768, 1204, 0.936],
    [300, 200, 16, 48, 32, 109, 139, 15617, 8340, 10.6, 7.75, 1041, 834, 1319, 1000, 19223, 1442, 0.918],
    [350, 250, 6, 12, 6, 54.7, 69.6, 12457, 7458, 13.4, 10.3, 712, 597, 843, 671, 14554, 967, 1.18],
    [350, 250, 6.3, 15.75, 9.45, 57, 72.6, 12923, 7744, 13.3, 10.3, 738, 620, 876, 698, 15291, 1010, 1.17],
    [350, 250, 8, 20, 12, 71.6, 91.2, 16001, 9573, 13.2, 10.2, 914, 766, 1092, 869, 19136, 1253, 1.17],
    [350, 250, 10, 25, 15, 88.4, 113, 19407, 11588, 13.1, 10.1, 1109, 927, 1335, 1062, 23500, 1522, 1.16],
    [350, 250, 12, 36, 24, 104, 132, 22197, 13261, 13, 10, 1268, 1061, 1544, 1229, 27749, 1770, 1.14],
    [350, 250, 12.5, 37.5, 25, 108, 137, 22922, 13690, 12.9, 9.99, 1310, 1095, 1598, 1272, 28764, 1830, 1.14],
    [350, 250, 16, 48, 32, 134, 171, 27580, 16434, 12.7, 9.81, 1576, 1315, 1954, 1554, 35497, 2220, 1.12],
    [400, 200, 8, 20, 12, 71.6, 91.2, 18974, 6517, 14.4, 8.45, 949, 652, 1173, 728, 15820, 1133, 1.17],
    [400, 200, 10, 25, 15, 88.4, 113, 23003, 7864, 14.3, 8.36, 1150, 786, 1434, 888, 19368, 1373, 1.16],
    [400, 200, 12.5, 37.5, 25, 108, 137, 27100, 9260, 14.1, 8.22, 1355, 926, 1714, 1062, 23594, 1644, 1.14],
    [400, 200, 16, 48, 32, 134, 171, 32547, 11056, 13.8, 8.05, 1627, 1106, 2093, 1294, 28928, 1984, 1.12],
    [400, 300, 8, 20, 12, 84.2, 107, 25122, 16212, 15.3, 12.3, 1256, 1081, 1487, 1224, 31179, 1747, 1.37],
    [400, 300, 10, 25, 15, 104, 133, 30609, 19726, 15.2, 12.2, 1530, 1315, 1824, 1501, 38407, 2132, 1.36],
    [400, 300, 12, 36, 24, 123, 156, 35284, 22747, 15, 12.1, 1764, 1516, 2122, 1747, 45527, 2492, 1.34],
    [400, 300, 12.5, 37.5, 25, 127, 162, 36489, 23517, 15, 12, 1824, 1568, 2198, 1810, 47237, 2580, 1.34],
    [400, 300, 16, 48, 32, 159, 203, 44350, 28535, 14.8, 11.9, 2218, 1902, 2708, 2228, 58730, 3159, 1.32]
]

export const parseRHS = (material: number[]) => ({
    type: Types.RHS,
    width: material[0],
    height: material[1],
    thickness: material[2],
    rext: material[3],
    rint: material[4],
    mass: material[5],
    aos: material[6],
    sma: material[7],
    smaY: material[8],
    rog: material[9],
    rogY: material[10],
    sm: material[11],
    smY: material[12],
    pm: material[13],
    pmY: material[14],
    inertia: material[15],
    modulus: material[16],
    ssa: material[17]
});

export const RHS: Material[] = TABLE.map(entry => parseRHS(entry));

export default RHS;