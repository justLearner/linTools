/**
 * 获取数组的交集
 * @param list 原始数组
 * @param args 获取交集的数组
 *
 * 返回交集的数组
 */
const arrIntersection = (list, ...args) => {
  list.filter((item) => args.every((v) => v.includes(item)));
};
