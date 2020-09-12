//根据分组编码批量获取
export const getMockData = (params = {}) =>
  fetch("/api/profile", params).then((res) => res.json());
