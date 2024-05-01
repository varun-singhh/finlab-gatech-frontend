import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "../../gatech/src/components/report/card";
import dynamic from "next/dynamic";
import PageContainer from "@/components/container/pagecontainer";
import Form from "@/components/container/form";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  const [year, setYear] = useState("2024");

  // Generate years from 1995 to current year
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 1995; i <= currentYear; i++) {
    years.push(i);
  }

  const handleChange = (event: any) => {
    setYear(event.target.value);
  };

  // Chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // Data extraction from JSON response
  const data = {
    incomeStatement: {
      netIncome: 257.6,
      netIncomePerShare: 30.62,
      dilutedEarningsPerShare: 29.96,
      EBITDA: 346.2,
      operatingIncome: 260.1,
      revenue: 257.6,
    },
    balanceSheet: {
      totalAssets: 439.5,
      totalLiabilities: 185.2,
      totalEquity: 254.3,
      cashAndCashEquivalents: 142.8,
      shortTermInvestments: 10.1,
      accountsReceivableNet: 51.6,
    },
    cashFlowStatement: {
      netCashProvidedByOperatingActivities: 145.4,
      netCashUsedInInvestingActivities: 10.9,
      netCashUsedInFinancingActivities: 11.8,
      cashAndCashEquivalentsBeginningOfPeriod: 132.0,
      cashAndCashEquivalentsEndOfPeriod: 142.8,
    },
    financialMetrics: {
      revenue: 257.6,
      netIncome: 20.6,
      earningsPerShare: 2.65,
      freeCashFlow: 56.1,
    },
    businessInsights: {
      revenueGrowth: "23%",
      netIncomeGrowth: "18%",
      earningsPerShareGrowth: "15%",
      freeCashFlowGrowth: "31%",
    },
  };

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
      categories: Object.keys(data.incomeStatement),
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
      data: Object.values(data.incomeStatement),
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
      categories: Object.keys(data.businessInsights),
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
      categories: Object.keys(data.balanceSheet),
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
      data: Object.values(data.balanceSheet),
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
      categories: Object.keys(data.cashFlowStatement),
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
      data: Object.values(data.cashFlowStatement),
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
      categories: Object.keys(data.financialMetrics),
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
      data: Object.values(data.financialMetrics),
    },
  ];

  // Chart series for business insights
  const seriesBusiness: any = [
    {
      name: "Values",
      data: Object.values(data.businessInsights).map((value: string) =>
        parseFloat(value.replace("%", ""))
      ),
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
