import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import china from "../geo/china.json";

export const Chart6 = () => {
  const divRef = useRef(null);
  const color = { 青海省: "#BB31F7", 甘肃省: "#15B8FD", 四川省: "#06E1EE" };
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        yAxis: { show: false },
        xAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN", //自定义扩展图表类型
            data: [{ name: "甘肃省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: color["甘肃省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", //自定义扩展图表类型
            data: [{ name: "四川省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: color["四川省"],
              borderColor: "#yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", //自定义扩展图表类型
            data: [{ name: "青海省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: color["青海省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: color["甘肃省"] }} />
          甘肃籍
          <span className="icon" style={{ background: color["四川省"] }} />
          四川籍
          <span className="icon" style={{ background: color["青海省"] }} />
          青海籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
