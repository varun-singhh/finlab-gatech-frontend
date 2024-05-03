import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "../../gatech/src/components/report/card";
import dynamic from "next/dynamic";
import PageContainer from "@/components/container/pagecontainer";
import Form from "@/components/container/form";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  const rootState = useSelector((state: RootState) => state?.report);
  const [data, setData] = useState({
    incomeStatement: {
      netIncome: 0,
      netIncomePerShare: 0,
      dilutedEarningsPerShare: 0,
      EBITDA: 0,
      operatingIncome: 0,
      revenue: 0,
    },
    balanceSheet: {
      totalAssets: 0,
      totalLiabilities: 0,
      totalEquity: 0,
      cashAndCashEquivalents: 0,
      shortTermInvestments: 0,
      accountsReceivableNet: 0,
    },
    cashFlowStatement: {
      netCashProvidedByOperatingActivities: 0,
      netCashUsedInInvestingActivities: 0,
      netCashUsedInFinancingActivities: 0,
      cashAndCashEquivalentsBeginningOfPeriod: 0,
      cashAndCashEquivalentsEndOfPeriod: 0,
    },
    financialMetrics: {
      revenue: 0,
      netIncome: 0,
      earningsPerShare: 0,
      freeCashFlow: 0,
    },
    businessInsights: {
      revenueGrowth: 0,
      netIncomeGrowth: 0,
      earningsPerShareGrowth: 0,
      freeCashFlowGrowth: 0,
    },
  });
  // Generate years from 1995 to current year
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 1995; i <= currentYear; i++) {
    years.push(i);
  }

  useEffect(() => {
    setData(rootState?.data?.data ?? data);
  }, [rootState?.data?.data]);
  // Chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // Chart options for financial data
  const optionsFinancial: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: function (value: number) {
          return `$${value}B`;
        },
      },
    },
    xaxis: {
      categories: Object.keys(data?.incomeStatement),
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };

  // Chart series for financial data
  const seriesFinancial: any = [
    {
      name: "Values",
      data: Object.values(data?.incomeStatement),
    },
  ];

  // Chart options for business insights
  const optionsBusiness: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: function (value: number) {
          return `${value}%`;
        },
      },
    },
    xaxis: {
      categories: Object.keys(data?.businessInsights),
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };

  const optionsBalanceSheet: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: function (value: number) {
          return `$${value}B`;
        },
      },
    },
    xaxis: {
      categories: Object.keys(data?.balanceSheet),
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };

  // Chart series for balanceSheet
  const seriesBalanceSheet: any = [
    {
      name: "Values",
      data: Object.values(data?.balanceSheet),
    },
  ];

  // Chart options for cashFlowStatement
  const optionsCashFlowStatement: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: function (value: number) {
          return `$${value}B`;
        },
      },
    },
    xaxis: {
      categories: Object.keys(data?.cashFlowStatement),
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };

  // Chart series for cashFlowStatement
  const seriesCashFlowStatement: any = [
    {
      name: "Values",
      data: Object.values(data?.cashFlowStatement),
    },
  ];

  // Chart options for financialMetrics
  const optionsFinancialMetrics: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: function (value: number) {
          return `$${value}B`;
        },
      },
    },
    xaxis: {
      categories: Object.keys(data?.financialMetrics),
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };

  // Chart series for financialMetrics
  const seriesFinancialMetrics: any = [
    {
      name: "Values",
      data: Object.values(data?.financialMetrics),
    },
  ];

  // Chart series for business insights
  const seriesBusiness: any = [
    {
      name: "Values",
      data: Object.values(data?.businessInsights),
    },
  ];

  return (
    <PageContainer
      title="10k Filing Report"
      description="This is the reports page"
    >
      <DashboardCard>
        <Form />
      </DashboardCard>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Financial Data Overview and Business Insights Overview */}
        <div style={{ flex: "1", minWidth: "50%" }}>
          <DashboardCard title="Financial Data Overview">
            <Chart
              options={{
                ...optionsFinancial,
                colors: ["#45CE30", "#7CEC9F"], // Custom colors
              }}
              series={seriesFinancial}
              type="area"
              height="370px"
            />
          </DashboardCard>
        </div>
        {/* Financial Metrics Overview */}
        <div style={{ flex: "1", minWidth: "50%" }}>
          <DashboardCard title="Financial Metrics Overview">
            <Chart
              options={optionsFinancialMetrics}
              series={seriesFinancialMetrics}
              type="bar"
              height="370px"
            />
          </DashboardCard>
        </div>
        {/* Balance Sheet Overview */}
        <div style={{ flex: "1", minWidth: "50%" }}>
          <DashboardCard title="Balance Sheet Overview">
            <Chart
              options={{
                ...optionsBalanceSheet,
                colors: ["#EA7773", "#F5BCBA"], // Custom colors
              }}
              series={seriesBalanceSheet}
              type="bar"
              height="370px"
            />
          </DashboardCard>
        </div>
        {/* Cash Flow Statement Overview */}
        <div style={{ flex: "1", minWidth: "50%" }}>
          <DashboardCard title="Cash Flow Statement Overview">
            <Chart
              options={{
                ...optionsCashFlowStatement,
                colors: ["#F3B63A", "#F5BCBA"], // Custom colors
              }}
              series={seriesCashFlowStatement}
              type="bar"
              height="370px"
            />
          </DashboardCard>
        </div>
        <div style={{ flex: "1", minWidth: "100%" }}>
          <DashboardCard title="Business Insights Overview">
            <Chart
              options={{
                ...optionsBusiness,
                colors: ["#8B78E6", "#F5BCBA"], // Custom colors
              }}
              series={seriesBusiness}
              type="area"
              height="370px"
            />
          </DashboardCard>
        </div>
      </div>
    </PageContainer>
  );
};

export default SalesOverview;
