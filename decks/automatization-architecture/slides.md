---
marp: true
theme: custom
paginate: true
---

<!-- _class: lead -->

# Automatization Architecture

### Getting to a scalable architecture for AI automatizations

---

<!-- _class: top -->

## Agentic AI

<div class="diagram">
  <div class="node-stack">
    <div class="node user">User</div>
    <div class="sublabel">Erick</div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone local">
    <div class="zone-label">Local</div>
    <div class="node-stack">
      <div class="node agent">Agent</div>
      <div class="sublabel">Claude Code</div>
    </div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone cloud">
    <div class="zone-label">Cloud</div>
    <div class="node-stack">
      <div class="node llm">LLM</div>
      <div class="sublabel">Sonnet</div>
    </div>
  </div>
</div>

<p class="caption">This is a plain, general-purpose setup — no specific capabilities added yet.</p>

<style>
.caption {
  text-align: left;
  margin: 24px auto 0;
  max-width: 480px;
  color: #aaa;
  font-size: 0.8em;
  line-height: 1.5;
}
.diagram {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
.diagram > .node-stack {
  margin-top: 20px;
}
.node-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.node {
  padding: 16px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1em;
  border: 2px solid #555;
  background: #22222e;
  color: #e8e8ee;
}
.node.user { border-color: #5b8dee; background: rgba(91, 141, 238, 0.15); }
.node.agent { border-color: #e0785a; background: rgba(224, 120, 90, 0.15); }
.node.llm { border-color: #4fd1c5; background: rgba(79, 209, 197, 0.15); }
.sublabel {
  font-size: 0.65em;
  color: #aaa;
}
.arrow { font-size: 1.8em; color: #888; }
.zone {
  border: 2px dashed #555;
  border-radius: 12px;
  padding: 20px 16px 14px;
  position: relative;
}
.zone-label {
  position: absolute;
  top: -14px;
  left: 12px;
  background: #16161f;
  padding: 0 8px;
  font-size: 0.65em;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>

---

<!-- _class: top -->

## Customizing the Agent

<div class="diagram">
  <div class="node-stack">
    <div class="node user">User</div>
    <div class="sublabel">Erick</div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone local">
    <div class="zone-label">Local</div>
    <div class="node-stack">
      <div class="node agent">Agent</div>
      <div class="sublabel">Claude Code</div>
      <div class="node automation">Automation</div>
      <div class="sublabel">Skills, MCPs, etc</div>
    </div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone cloud">
    <div class="zone-label">Cloud</div>
    <div class="node-stack">
      <div class="node llm">LLM</div>
      <div class="sublabel">Sonnet</div>
    </div>
  </div>
</div>

<p class="caption">Ready to do the job — but still has two main problems: <strong>poor interface</strong> and <strong>runs on a local machine</strong>.</p>

<style>
.caption {
  text-align: left;
  margin: 24px auto 0;
  max-width: 480px;
  color: #aaa;
  font-size: 0.8em;
  line-height: 1.5;
}
.diagram {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
.diagram > .node-stack {
  margin-top: 20px;
}
.node-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.node {
  padding: 16px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1em;
  border: 2px solid #555;
  background: #22222e;
  color: #e8e8ee;
}
.node.user { border-color: #5b8dee; background: rgba(91, 141, 238, 0.15); }
.node.agent { border-color: #e0785a; background: rgba(224, 120, 90, 0.15); }
.node.llm { border-color: #4fd1c5; background: rgba(79, 209, 197, 0.15); }
.node.automation {
  border-color: #d9b44a;
  background: rgba(217, 180, 74, 0.15);
  font-size: 0.95em;
  padding: 10px 20px;
}
.sublabel {
  font-size: 0.65em;
  color: #aaa;
}
.arrow { font-size: 1.8em; color: #888; }
.zone {
  border: 2px dashed #555;
  border-radius: 12px;
  padding: 20px 16px 14px;
  position: relative;
}
.zone-label {
  position: absolute;
  top: -14px;
  left: 12px;
  background: #16161f;
  padding: 0 8px;
  font-size: 0.65em;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>

---

<!-- _class: top -->

## Solving the Problems

<div class="diagram">
  <div class="node-stack">
    <div class="node user">User</div>
    <div class="sublabel">Erick</div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone local">
    <div class="zone-label">Local</div>
    <div class="node-stack">
      <div class="node front">Front</div>
      <div class="sublabel">Web or Mobile</div>
    </div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone server">
    <div class="zone-label">Server</div>
    <div class="node-stack">
      <div class="node agent">Agent</div>
      <div class="sublabel">Claude SDK</div>
      <div class="node automation">Automation</div>
      <div class="sublabel">Skills, MCPs, etc</div>
    </div>
  </div>
  <div class="arrow">&#8594;</div>
  <div class="zone cloud">
    <div class="zone-label">Cloud</div>
    <div class="node-stack">
      <div class="node llm">LLM</div>
      <div class="sublabel">Sonnet</div>
    </div>
  </div>
</div>

<p class="caption">We keep using all the power of having Claude as the agent, while running it on a server lets us interact through a more friendly web interface.</p>

<style>
.caption {
  text-align: left;
  margin: 24px auto 0;
  max-width: 480px;
  color: #aaa;
  font-size: 0.8em;
  line-height: 1.5;
}
.diagram {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
.diagram > .node-stack {
  margin-top: 20px;
}
.node-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.node {
  padding: 16px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1em;
  border: 2px solid #555;
  background: #22222e;
  color: #e8e8ee;
}
.node.user { border-color: #5b8dee; background: rgba(91, 141, 238, 0.15); }
.node.agent { border-color: #e0785a; background: rgba(224, 120, 90, 0.15); }
.node.llm { border-color: #4fd1c5; background: rgba(79, 209, 197, 0.15); }
.node.front { border-color: #7cc576; background: rgba(124, 197, 118, 0.15); }
.node.automation {
  border-color: #d9b44a;
  background: rgba(217, 180, 74, 0.15);
  font-size: 0.95em;
  padding: 10px 20px;
}
.sublabel {
  font-size: 0.65em;
  color: #aaa;
}
.arrow { font-size: 1.8em; color: #888; }
.zone {
  border: 2px dashed #555;
  border-radius: 12px;
  padding: 20px 16px 14px;
  position: relative;
}
.zone-label {
  position: absolute;
  top: -14px;
  left: 12px;
  background: #16161f;
  padding: 0 8px;
  font-size: 0.65em;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
