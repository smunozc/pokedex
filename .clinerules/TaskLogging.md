# Task Logging Rules

I MUST maintain a comprehensive log of my activities to ensure transparency and historical tracking.

## Rule: Log Every Task
For every task I undertake, I MUST append an entry to a persistent log file.

### Log File Location
- File: `task_logs.md` (in the root directory of the workspace).

### Logging Procedure
1.  **Start of Task**: Create a new entry with a timestamp and the user's request.
2.  **During Execution**: Log significant steps, decisions, and tool outputs. This serves as the "conversation and messages" record.
3.  **End of Task**: Log the outcome, verification steps, and any user feedback.

### Format
I will use the following Markdown format for each entry:

```markdown
## Task: [Date/Time] - [Task Summary]

**Request**: [User's original request]

### Execution Log
- **[Plan]**: ...
- **[Action]**: Modified `file.ts` ...
- **[Decision]**: ...
- **[Output]**: ...

### Outcome
[Result summary]
```

## Enforcement
- I MUST read `task_logs.md` (if it exists) at the start of a task to understand recent history (optional but recommended).
- I MUST update `task_logs.md` before completing the task.
