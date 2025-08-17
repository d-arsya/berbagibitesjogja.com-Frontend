import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Label,
  Pie,
  PieChart,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { useMemo } from "react";

type ActivityItemProps = {
  title: string;
  desc: string;
  time: string;
  icon: React.ElementType;
};

export function ActivityItem({
  title,
  desc,
  time,
  icon: Icon,
}: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="bg-navy-light text-navy p-2 rounded-full">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}

type CampaignCardProps = {
  title: string;
  desc: string;
  progress: number;
  status: string;
};

export function CampaignCard({
  title,
  desc,
  progress,
  status,
}: CampaignCardProps) {
  return (
    <div className="border border-l-tosca border-l-4 p-2 bg-slate-100 mb-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
          <p className="text-xs text-gray-400 mt-1">Progres: {progress}%</p>
        </div>
        <div className="">
          <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
            {status}
          </span>
          <div className="flex justify-end text-xs mt-2 gap-3">
            <button className="text-cyan-600 hover:underline">Edit</button>
            <button className="text-red-500 hover:underline">Selesai</button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div
          className="h-2 bg-tosca rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Actions */}
    </div>
  );
}

type HeroCardProps = {
  name: string;
  title: string;
  desc: string;
  Photo: string | React.ElementType; // bisa string (url) atau icon component
};

export function HeroCard({ name, title, desc, Photo }: HeroCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-navy-light flex flex-col items-center">
      {typeof Photo === "string" ? (
        <img
          src={Photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-3"
        />
      ) : (
        <div className="bg-navy text-white p-3 rounded-full mb-3">
          <Photo className="w-8 h-8" />
        </div>
      )}
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm">{title}</p>
      <span className="mt-2 px-4 py-1 text-sm bg-navy text-white rounded-full">
        {desc}
      </span>
    </div>
  );
}

type PartnerCardProps = {
  name: string;
  join: string;
  desc: string;
  icon: React.ElementType;
};

export function PartnerCard({
  name,
  join,
  desc,
  icon: Icon,
}: PartnerCardProps) {
  return (
    <div className="p-4 rounded-xl border bg-white flex items-center gap-4">
      <div className="bg-navy-light text-navy p-3 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{join}</p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Kontribusi:</span> {desc}
        </p>
      </div>
    </div>
  );
}

type QuickActionCardProps = {
  title: string;
  link: string;
  icon: React.ElementType;
};

export function QuickActionCard({
  title,
  link,
  icon: Icon,
}: QuickActionCardProps) {
  return (
    <a
      href={link}
      className="p-6 rounded-2xl shadow bg-white flex flex-col items-center hover:bg-navy-light hover:shadow-md transition"
    >
      <div className="bg-cyan-600 text-white p-3 rounded-full mb-3">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-gray-800 font-medium">{title}</p>
    </a>
  );
}

type ReviewCardProps = {
  title: string;
  amount: string | number;
  stats: string;
  icon: React.ElementType; // untuk icon component
};

export function ReviewCard({
  title,
  amount,
  stats,
  icon: Icon,
}: ReviewCardProps) {
  return (
    <div className="p-4 rounded-2xl shadow bg-white flex justify-between border-navy border-l-4">
      <div className="flex gap-y-2 flex-col">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-xl font-bold">{amount}</h2>
        <p className="text-green-500 text-sm">{stats}</p>
      </div>
      <div className="bg-navy-light p-2 rounded-md h-max">
        <Icon className="w-6 h-6 text-navy" />
      </div>
    </div>
  );
}
type DistributionStatisticsProps = {
  chartData: {
    day: string; // X-axis value
    amount: number; // bar value
  }[];
};
export function ChartBarDefault({ chartData }: DistributionStatisticsProps) {
  const chartConfig = {
    desktop: {
      label: "Jumlah",
      color: "var(--navy)",
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="amount" fill="var(--color-desktop)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

export function ChartPieDonutText() {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Firefox",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Edge",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ];
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Visitors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

export function DistributionStats() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
      {/* Distribution Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-teal-600 rounded-sm" />
            <span className="text-gray-800">Panti Asuhan</span>
          </div>
          <span className="text-gray-800 font-semibold">35%</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-teal-900 rounded-sm" />
            <span className="text-gray-800">Lansia</span>
          </div>
          <span className="text-gray-800 font-semibold">25%</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-teal-500 rounded-sm" />
            <span className="text-gray-800">Tunawisma</span>
          </div>
          <span className="text-gray-800 font-semibold">20%</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-900 rounded-sm" />
            <span className="text-gray-800">Komunitas Lainnya</span>
          </div>
          <span className="text-gray-800 font-semibold">20%</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Summary */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Total distribusi bulan ini</span>
          <span className="text-teal-600 font-semibold">112 kg</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Distribusi selesai</span>
          <span className="text-green-600 font-semibold">85%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Target tercapai</span>
          <span className="text-yellow-500 font-semibold">90%</span>
        </div>
      </div>

      {/* Options Button */}
      <div className="flex items-center justify-start">
        <button className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full flex items-center space-x-2">
          <span className="text-sm font-semibold">Opsi</span>
          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
        </button>
      </div>
    </div>
  );
}
