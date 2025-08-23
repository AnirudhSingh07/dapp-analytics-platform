"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { fetchAnalyticsData } from "@/lib/ao"
import Link from "next/link"

interface AnalyticsData {
  totalTesters: number
  totalDApps: number
  totalConnections: number
  retentionRate: number
  dappConnections: Array<{ name: string; connections: number }>
}

export default function DashboardPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAnalytics = async () => {
      setIsLoading(true)
      const data = await fetchAnalyticsData()
      setAnalyticsData(data)
      setIsLoading(false)
    }

    loadAnalytics()
  }, [])

  // Mock time series data for retention chart
  const retentionData = [
    { day: "Day 1", retention: 100 },
    { day: "Day 3", retention: 85 },
    { day: "Day 7", retention: 72 },
    { day: "Day 14", retention: 68 },
    { day: "Day 30", retention: 65 },
  ]

  // Mock category distribution data
  const categoryData = [
    { name: "DeFi", value: 35, color: "var(--color-chart-1)" },
    { name: "Gaming", value: 25, color: "var(--color-chart-2)" },
    { name: "NFT", value: 20, color: "var(--color-chart-3)" },
    { name: "Social", value: 12, color: "var(--color-chart-4)" },
    { name: "Other", value: 8, color: "var(--color-chart-5)" },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">DA</span>
                  </div>
                  <span className="font-bold text-xl text-foreground">DApp Analytics</span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading analytics data...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!analyticsData) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">DA</span>
                  </div>
                  <span className="font-bold text-xl text-foreground">DApp Analytics</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <p className="text-destructive mb-4">Failed to load analytics data</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">DA</span>
                </div>
                <span className="font-bold text-xl text-foreground">DApp Analytics</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Live Data
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Real-time insights from your DApp testing platform</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Testers</CardTitle>
              <div className="w-4 h-4 bg-chart-1 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{analyticsData.totalTesters.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active DApps</CardTitle>
              <div className="w-4 h-4 bg-chart-2 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{analyticsData.totalDApps}</div>
              <p className="text-xs text-muted-foreground">+3 new this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Connections</CardTitle>
              <div className="w-4 h-4 bg-chart-3 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {analyticsData.totalConnections.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">+8% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
              <div className="w-4 h-4 bg-chart-4 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{analyticsData.retentionRate}%</div>
              <p className="text-xs text-muted-foreground">+2.1% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* DApp Connections Chart */}
          <Card>
            <CardHeader>
              <CardTitle>DApp Connections</CardTitle>
              <CardDescription>Number of wallet connections per DApp</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  connections: {
                    label: "Connections",
                    color: "var(--color-chart-1)",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData.dappConnections}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={12} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="connections" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Retention Chart */}
          <Card>
            <CardHeader>
              <CardTitle>User Retention</CardTitle>
              <CardDescription>Percentage of users returning over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  retention: {
                    label: "Retention %",
                    color: "var(--color-chart-2)",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={retentionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="retention"
                      stroke="var(--color-chart-2)"
                      strokeWidth={3}
                      dot={{ fill: "var(--color-chart-2)", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Category Distribution and Top DApps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>DApp Categories</CardTitle>
              <CardDescription>Distribution of DApps by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Percentage",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex flex-wrap gap-2 mt-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                    <span className="text-sm text-muted-foreground">
                      {category.name} ({category.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performing DApps Table */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing DApps</CardTitle>
              <CardDescription>DApps with highest user engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.dappConnections.map((dapp, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{dapp.name}</p>
                        <p className="text-sm text-muted-foreground">{dapp.connections} connections</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                      Active
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
