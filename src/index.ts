interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

interface McpToolExport {
  tools: McpToolDefinition[];
  callTool: (name: string, args: Record<string, unknown>) => Promise<unknown>;
}

/**
 * performance-review MCP — wraps StupidAPIs (requires X-API-Key)
 *
 * Generate a performance review that communicates nothing clearly. HR approved.
 */


const API_KEY = '6e0ddbe88486dc354370290979829dc892b0386bd789ae5a';

const tools: McpToolExport['tools'] = [
  {
    name: 'performance_review_generate',
    description: 'Generate a performance review that communicates nothing clearly. HR approved.',
    inputSchema: {
      type: 'object' as const,
      properties: {"employee_name": {"type": "string"}, "role": {"type": "string"}, "rating": {"type": "string", "enum": ["rockstar", "solid", "developing", "not_a_culture_fit"]}, "actual_performance": {"type": "string"}, "what_manager_wants_to_say": {"type": "string"}},
      required: ["employee_name"],
    },
  },
];

async function callApi(url: string, args: Record<string, unknown>): Promise<unknown> {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(args)) {
    if (v !== undefined && v !== null && v !== '') {
      params.set(k, String(v));
    }
  }
  const fullUrl = params.toString() ? url + '?' + params.toString() : url;
  const res = await fetch(fullUrl, {
    headers: { 'X-API-Key': API_KEY },
  });
  if (!res.ok) throw new Error('performance-review API error: ' + res.status);
  return res.json();
}

async function callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case 'performance_review_generate':
      return callApi('https://api.stupidapis.com/performance-review/generate', args);
    default:
      throw new Error('Unknown tool: ' + name);
  }
}

export default { tools, callTool } satisfies McpToolExport;
