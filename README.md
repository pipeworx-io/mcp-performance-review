# mcp-performance-review

performance-review MCP — wraps StupidAPIs (requires X-API-Key)

Part of [Pipeworx](https://pipeworx.io) — an MCP gateway connecting AI agents to 1394+ live data sources.

## Tools

| Tool | Description |
|------|-------------|
| `performance_review_generate` | Generate a satirical corporate performance review for an employee; takes employee_name, role, rating (rockstar/solid/developing/not_a_culture_fit), actual_performance, and what_manager_wants_to_say — returns review text that communicates nothing clearly. |

## Quick Start

Add to your MCP client (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "performance-review": {
      "url": "https://gateway.pipeworx.io/performance-review/mcp"
    }
  }
}
```

Or connect to the full Pipeworx gateway for access to all 1394+ data sources:

```json
{
  "mcpServers": {
    "pipeworx": {
      "url": "https://gateway.pipeworx.io/mcp"
    }
  }
}
```

## Using with ask_pipeworx

Instead of calling tools directly, you can ask questions in plain English:

```
ask_pipeworx({ question: "your question about Performance Review data" })
```

The gateway picks the right tool and fills the arguments automatically.

## More

- [Docs and guides](https://pipeworx.io/docs)
- [pipeworx.io](https://pipeworx.io)

## License

MIT
