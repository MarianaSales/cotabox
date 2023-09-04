import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface User {
    name: string;
    lastname: string;
    participation: string;
}

interface PieChartProps {
    data: User[];
}

export function PieChart({ data }: PieChartProps) {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"pie", number[], string> | null>(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartRef.current && data) {
            const labels = data.map((user) => `${user.name} ${user.lastname}`);
            const participations = data.map((user) => parseFloat(user.participation));

            const ctx = chartRef.current.getContext("2d");

            if (ctx) {
                chartInstance.current = new Chart<"pie", number[], string>(ctx, {
                    type: "pie",
                    data: {
                        labels,
                        datasets: [
                            {
                                data: participations,
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.6)",
                                    "rgba(54, 162, 235, 0.6)",
                                    "rgba(255, 206, 86, 0.6)",
                                    "rgba(75, 192, 192, 0.6)",
                                    "rgba(153, 102, 255, 0.6)",
                                    "rgba(255, 159, 64, 0.6)",
                                    "rgba(0, 128, 0, 0.6)",
                                    "rgba(128, 0, 128, 0.6)",
                                    "rgba(255, 0, 0, 0.6)",
                                    "rgba(0, 0, 255, 0.6)",
                                ],
                            },
                        ],
                    },
                    options: {}, 
                });
            }
        }
    }, [data]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}


