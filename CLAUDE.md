# Claude Code 最佳 Workflow（实操版）

> 本文件定义了 Claude Code 与本仓库协作的标准流程。

---

## 🎯 第一步：理解 Repo（必须单独一步）

```markdown
Read this entire repository and produce a structured system analysis:

1. Core modules (with responsibilities)
2. Data flow (end-to-end)
3. Key APIs / interfaces
4. Data storage schema
5. External dependencies
6. Implicit constraints (important)
7. Known technical debt or risks

IMPORTANT:
- Do NOT hallucinate
- Only use evidence from code
- Be explicit when uncertain
```

**输出保存：** `/docs/system_analysis.md`

---

## 📐 第二步：结构化系统（非常关键）

```markdown
Based on system_analysis.md, create a clean system model:

- System architecture diagram (textual)
- Module boundaries
- Data flow graph
- Responsibility mapping

Output as structured markdown
```

**输出：** `/docs/system_model.md`

---

## 🔍 第三步：发现问题（很多人不会做）

```markdown
Based on system_analysis.md, identify:

1. Bottlenecks
2. Design inconsistencies
3. Scalability risks
4. Maintainability issues
5. Missing capabilities

Be concrete and reference code patterns
```

**输出：** `/docs/system_problems.md`

---

## 🧠 第四步：生成 PRD（核心 Prompt）

```markdown
You are a senior product manager and system architect. Your task is to generate a PRD for an EXISTING SYSTEM (brownfield project). You MUST base everything on:
- system_analysis.md
- system_model.md
- system_problems.md

---

# Output a COMPLETE PRD with the following structure:

## 1. Background
- What the current system does
- Key architecture overview

## 2. Problem Statement
- Current pain points
- Root causes (technical + product)

## 3. Goals
- What we want to improve
- Quantifiable targets if possible

## 4. Non-Goals
- What we explicitly will NOT change

## 5. User Scenarios
- Real usage flows (based on system behavior)

## 6. Functional Requirements
- Concrete system behaviors (NOT vague)

## 7. Constraints
- Must respect existing system limitations

## 8. Risks
- Technical + product risks

## 9. Success Metrics
- Measurable outcomes

---

# Rules:
- DO NOT invent features not grounded in the repo
- MUST reflect existing architecture
- MUST be actionable for engineers
- MUST be specific, not generic
```

**输出：** `/docs/prd.md`

---

## ⚙️ 第五步：生成设计文档（配套）

```markdown
Based on prd.md, generate a technical design document:

Include:
- Architecture changes
- Data flow changes
- API design
- Migration strategy
- Rollback plan

Must align with existing system
```

**输出：** `/docs/design.md`

---

## 🚀 快速使用指南

当你开始一个新任务时，在 Claude Code 中按顺序执行：

```bash
# 1. 先理解系统
[粘贴第一步的 prompt]

# 2. 建立结构化模型
[粘贴第二步的 prompt]

# 3. 找出问题
[粘贴第三步的 prompt]

# 4. 生成 PRD
[粘贴第四步的 prompt]

# 5. 技术设计
[粘贴第五步的 prompt]
```

---

## 📁 输出文件说明

| 文件 | 用途 |
|------|------|
| `docs/system_analysis.md` | 系统全面分析 |
| `docs/system_model.md` | 清晰的结构模型 |
| `docs/system_problems.md` | 发现的问题和风险 |
| `docs/prd.md` | 产品需求文档 |
| `docs/design.md` | 技术设计方案 |

---

## 💡 最佳实践

1. **不要跳过第一步** — 理解系统是所有后续工作的基础
2. **每个步骤单独进行** — 不要合并步骤，保持专注
3. **引用具体代码** — 避免幻觉，基于代码证据
4. **PRD 要具体** — 不是通用废话，是可执行的文档
5. **设计文档对齐现有系统** — 不要做破坏性改动
