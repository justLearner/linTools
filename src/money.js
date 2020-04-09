/**
 * 转换为带千分符的，小数位不加千分符
 * @param value 原始值
 */
export const formatMoneyThousand = value => {
  if (!value) return "0";
  const _value = String(value);
  if (_value.includes(".")) {
    let _valueArr = _value.split(".");
    _valueArr[0] = _valueArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return _valueArr.join(".");
  } else {
    return _value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
