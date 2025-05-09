/**
 * MCP - Main Entry Point
 *
 * This file initializes the MCP server and registers all the available tools.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import dotenv from 'dotenv'

dotenv.config()

import { registerPrompts } from './prompts/index.js'
import { registerResources } from './resources/index.js'
import { registerTools } from './tools/index.js'

const server = new McpServer({
  name: 'my-mcp-server',
  version: '1.0.0',
  capabilities: {
    resources: {
      description: 'No resources required for assistance.',
    },
    tools: {
      description: 'Tools to help with component properties, layouts, and documentation.',
    },
  },
})

registerResources(server)
registerPrompts(server)
registerTools(server)

async function main () {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('MCP Server running on stdio')
}

main().catch((error) => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})
