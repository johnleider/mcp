# MCP

Machine Context Protocol (MCP) server.

## Overview


## Installation

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Start the server
pnpm start
```

## Configuration for Claude

To use this MCP server with Claude, add the following to your `.vscode/mcp.json` file (or move it to `settings.json` for global usage):

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

## Project Structure

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
