# mcp-performance-review

performance-review MCP — wraps StupidAPIs (requires X-API-Key)

Part of the [Pipeworx](https://pipeworx.io) open MCP gateway.

## Tools

| Tool | Description |
|------|-------------|
| `performance_review_generate` | Generate a performance review that communicates nothing clearly. HR approved. |

## Quick Start

Add to your MCP client config:

```json
{
  "mcpServers": {
    "performance-review": {
      "url": "https://gateway.pipeworx.io/performance-review/mcp"
    }
  }
}
```

Or use the CLI:

```bash
npx pipeworx use performance-review
```

## License

MIT
