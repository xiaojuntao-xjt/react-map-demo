import React, { useEffect, useRef } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/map/js/china";

function useChinaMap(props) {
  const containerRef = useRef(null);
  useEffect(() => {
    // console.log("componentDidMount 和 compnentDidUpdate");
    const option = {
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "测试",
          type: "map",
          mapType: "china",
          roam: false,
          label: {
            show: true,
          },
          data: [
            { name: "北京", value: Math.round(Math.random() * 1000) },
            { name: "天津", value: Math.round(Math.random() * 1000) },
            { name: "上海", value: Math.round(Math.random() * 1000) },
            { name: "重庆", value: Math.round(Math.random() * 1000) },
            { name: "河北", value: Math.round(Math.random() * 1000) },
            { name: "河南", value: 100 },
            { name: "云南", value: Math.round(Math.random() * 1000) },
            { name: "辽宁", value: Math.round(Math.random() * 1000) },
            { name: "黑龙江", value: Math.round(Math.random() * 1000) },
            { name: "湖南", value: Math.round(Math.random() * 1000) },
            { name: "安徽", value: Math.round(Math.random() * 1000) },
            { name: "山东", value: Math.round(Math.random() * 1000) },
            { name: "新疆", value: Math.round(Math.random() * 1000) },
            { name: "江苏", value: Math.round(Math.random() * 1000) },
            { name: "浙江", value: Math.round(Math.random() * 1000) },
            { name: "江西", value: Math.round(Math.random() * 1000) },
            { name: "湖北", value: Math.round(Math.random() * 1000) },
            { name: "广西", value: Math.round(Math.random() * 1000) },
            { name: "甘肃", value: Math.round(Math.random() * 1000) },
            { name: "山西", value: Math.round(Math.random() * 1000) },
            { name: "内蒙古", value: Math.round(Math.random() * 1000) },
            { name: "陕西", value: Math.round(Math.random() * 1000) },
            { name: "吉林", value: Math.round(Math.random() * 1000) },
            { name: "福建", value: Math.round(Math.random() * 1000) },
            { name: "贵州", value: Math.round(Math.random() * 1000) },
            { name: "广东", value: Math.round(Math.random() * 1000) },
            { name: "青海", value: Math.round(Math.random() * 1000) },
            { name: "西藏", value: Math.round(Math.random() * 1000) },
            { name: "四川", value: Math.round(Math.random() * 1000) },
            { name: "宁夏", value: Math.round(Math.random() * 1000) },
            { name: "海南", value: Math.round(Math.random() * 1000) },
            { name: "台湾", value: Math.round(Math.random() * 1000) },
            { name: "香港", value: Math.round(Math.random() * 1000) },
            { name: "澳门", value: Math.round(Math.random() * 1000) },
          ],
        },
      ],
    };
    let listData = props.data;
    if (listData && listData.list && listData.list.length > 0) {
      option.series[0].data.forEach((item, index) => {
        item.value = listData.list[index].value;
      });
    }
    const dom = containerRef.current;
    if (!dom) return;
    const chart = echarts.init(dom);
    chart.setOption(option);
  });
  useEffect(() => {
    // console.log("componentDidMount");
  }, []);
  return (
    <div>
      <div
        ref={containerRef}
        id="echartsMapId"
        style={{ width: "100", height: "25rem" }}
      />
    </div>
  );
}

export default useChinaMap;
