// AO Integration utility functions
// Browser-compatible implementation for demo purposes

interface UserAction {
  wallet: string
  actionType: string
  metadata: Record<string, any>
  timestamp: number
}

interface AOMessage {
  id: string
  process: string
  tags: Array<{ name: string; value: string }>
  data: string
  timestamp: number
}

interface AOResult {
  Messages: Array<{
    Data: string
    Tags: Array<{ name: string; value: string }>
  }>
}

const AO_PROCESS_ID = "xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10"

// Mock storage for demo purposes (in production, this would be blockchain storage)
const mockAOStorage: {
  messages: AOMessage[]
  analytics: any
} = {
  messages: [],
  analytics: {
    totalTesters: 1247,
    totalPlatforms: 23,
    totalConnections: 3891,
    retentionRate: 68.5,
    platformConnections: [
      { name: "Social Feed", connections: 892 },
      { name: "Community Forum", connections: 743 },
      { name: "Messaging Platform", connections: 621 },
      { name: "Social Connect", connections: 445 },
    ],
  },
}

// Browser-compatible AO functions
async function mockMessage(params: {
  process: string
  tags: Array<{ name: string; value: string }>
  data: string
}): Promise<string> {
  const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  const message: AOMessage = {
    id: messageId,
    process: params.process,
    tags: params.tags,
    data: params.data,
    timestamp: Date.now(),
  }

  mockAOStorage.messages.push(message)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return messageId
}

async function mockResult(params: {
  message: string
  process: string
}): Promise<AOResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50))

  return {
    Messages: [
      {
        Data: JSON.stringify({ success: true, messageId: params.message }),
        Tags: [{ name: "Status", value: "Success" }],
      },
    ],
  }
}

async function mockDryrun(params: {
  process: string
  tags: Array<{ name: string; value: string }>
  data: string
}): Promise<AOResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 150))

  const actionTag = params.tags.find((tag) => tag.name === "Action")

  if (actionTag?.value === "GetAnalytics") {
    // Update analytics with recent activity
    const recentConnections = mockAOStorage.messages.filter((msg) =>
      msg.tags.some((tag) => tag.name === "ActionType" && tag.value === "CONNECT_PLATFORM"),
    ).length

    const updatedAnalytics = {
      ...mockAOStorage.analytics,
      totalConnections: mockAOStorage.analytics.totalConnections + recentConnections,
      totalTesters: mockAOStorage.analytics.totalTesters + Math.floor(recentConnections * 0.7),
    }

    return {
      Messages: [
        {
          Data: JSON.stringify(updatedAnalytics),
          Tags: [{ name: "Type", value: "Analytics" }],
        },
      ],
    }
  }

  return {
    Messages: [
      {
        Data: JSON.stringify({ success: true }),
        Tags: [{ name: "Status", value: "Success" }],
      },
    ],
  }
}

async function mockMonitor(params: { process: string }) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    process: params.process,
    status: "active",
    messages: mockAOStorage.messages.length,
  }
}

export async function logUserAction(
  wallet: string,
  actionType: string,
  metadata: Record<string, any> = {},
): Promise<void> {
  try {
    const action: UserAction = {
      wallet,
      actionType,
      metadata,
      timestamp: Date.now(),
    }

    console.log("[v0] Logging AO action:", action)

    const messageId = await mockMessage({
      process: AO_PROCESS_ID,
      tags: [
        { name: "Action", value: "LogUserAction" },
        { name: "Wallet", value: wallet },
        { name: "ActionType", value: actionType },
        { name: "Timestamp", value: action.timestamp.toString() },
      ],
      data: JSON.stringify(action),
    })

    console.log("[v0] AO message sent:", messageId)

    // Get the result to confirm the action was processed
    const messageResult = await mockResult({
      message: messageId,
      process: AO_PROCESS_ID,
    })

    console.log("[v0] AO action result:", messageResult)
  } catch (error) {
    console.error("[v0] Failed to log user action to AO:", error)
    // Fallback to local logging if AO fails
    const action: UserAction = {
      wallet,
      actionType,
      metadata,
      timestamp: Date.now(),
    }
    console.log("[v0] Fallback - Action logged locally:", action)
  }
}

export async function fetchAnalyticsData(processId: string = AO_PROCESS_ID) {
  try {
    console.log("[v0] Fetching analytics from AO process:", processId)

    const analyticsResult = await mockDryrun({
      process: processId,
      tags: [{ name: "Action", value: "GetAnalytics" }],
      data: JSON.stringify({ request: "analytics" }),
    })

    console.log("[v0] AO analytics result:", analyticsResult)

    // Parse the result or fall back to mock data
    if (analyticsResult && analyticsResult.Messages && analyticsResult.Messages.length > 0) {
      try {
        const data = JSON.parse(analyticsResult.Messages[0].Data)
        return data
      } catch (parseError) {
        console.warn("[v0] Failed to parse AO analytics data, using mock data")
      }
    }

    // Fallback to mock data if AO process doesn't return valid data
    return mockAOStorage.analytics
  } catch (error) {
    console.error("[v0] Failed to fetch analytics from AO:", error)
    return mockAOStorage.analytics
  }
}

export async function initializeAOMonitoring(processId: string = AO_PROCESS_ID) {
  try {
    console.log("[v0] Initializing AO process monitoring:", processId)

    const monitorResult = await mockMonitor({
      process: processId,
    })

    console.log("[v0] AO monitoring initialized:", monitorResult)
    return monitorResult
  } catch (error) {
    console.error("[v0] Failed to initialize AO monitoring:", error)
    return null
  }
}

export async function registerPlatform(
  owner: string,
  platformData: {
    name: string
    category: string
    description: string
    budget: string
  },
): Promise<string | null> {
  try {
    console.log("[v0] Registering Platform in AO:", platformData)

    const messageId = await mockMessage({
      process: AO_PROCESS_ID,
      tags: [
        { name: "Action", value: "RegisterPlatform" },
        { name: "Owner", value: owner },
        { name: "PlatformName", value: platformData.name },
        { name: "Category", value: platformData.category },
      ],
      data: JSON.stringify({
        timestamp: Date.now(),
        ...platformData,
      }),
    })

    console.log("[v0] Platform registration message sent:", messageId)
    return messageId
  } catch (error) {
    console.error("[v0] Failed to register Platform in AO:", error)
    return null
  }
}
