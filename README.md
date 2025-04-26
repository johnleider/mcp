# MCP

Machine Context Protocol (MCP) server.

## Overview

This is a Model Context Protocol (MCP) server implementation that allows AI assistants like Claude to interact with your custom tools and resources. The server is built using the official `@modelcontextprotocol/sdk` package and provides a modular architecture for adding custom capabilities.

This MCP server runs as a Node.js application and communicates over stdio, making it compatible with VS Code's MCP integration. It's designed to be extensible, allowing you to add custom tools, resources, and prompts to enhance AI capabilities in your development workflow.

## Installation

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Start the server
pnpm start
```

## Configuration for VS Code

To use this MCP server with VS Code, add the following to your `.vscode/mcp.json` file (or move it to `settings.json` for global usage):

```json
{
  "servers": {
    "my-mcp-server": {
      "command": "node",
      "args": ["/absolute/path/to/mcp/dist/index.js"],
      "env": {}
    }
  }
}
```

Make sure to replace `/absolute/path/to` with the actual absolute path to the `mcp` directory.

Additionally, ensure that automatic discovery is enabled in your `settings.json` file:

```json
{
  "chat.mcp.discovery.enabled": true
}
```

You can also verify the discovery and configuration by using the command palette in VS Code:

1. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).
2. Search for `MCP`.
3. Use the available options to check the discovery and configuration settings.

## Features

This MCP server provides a structured foundation for building custom tools and capabilities for AI assistants with:

- **Modular Architecture**: Organized into distinct modules for tools, resources, and prompts
- **Stdio Communication**: Compatible with VS Code's MCP integration through stdio transport
- **Environment Configuration**: Uses dotenv for environment variable management
- **TypeScript Support**: Full TypeScript integration for type safety
- **Extensible Design**: Easily add new tools and capabilities by implementing the provided interfaces

The server is designed to be expanded with custom tools for helping with components, layouts, and documentation as indicated in the capabilities description.

## Project Structure

```
mcp/
├── src/
│   ├── index.ts              # Main entry point, server initialization
│   ├── prompts/              # Prompt registration and management
│   │   └── index.ts          # Prompt registration module
│   ├── resources/            # Resource definitions and handlers
│   │   └── index.ts          # Resource registration module
│   └── tools/                # Tool implementations
│       └── index.ts          # Tool registration module
├── .github/                  # GitHub-specific files
│   └── FUNDING.yml           # Sponsorship configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Project metadata and dependencies
├── pnpm-lock.yaml            # Dependency lock file
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Development

To add new features or extend existing ones:

1. Add or update service methods in the appropriate service file.
2. Register the tool in the corresponding tools file.
3. Build and test your changes.

## MCP SDK Integration

This project uses the `@modelcontextprotocol/sdk` package to create a Machine Context Protocol server that Claude can interact with. The MCP architecture enables Claude to:

- Call specific tools defined in the server
- Receive structured responses
- Provide a better experience for related inquiries

The implementation follows the standard MCP patterns with:
- Server initialization using `McpServer`
- StdioServerTransport for communication

## License

MIT
