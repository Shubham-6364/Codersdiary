/** Animated-looking terminal window — pure CSS, no JS animation libs */
export default function TerminalWindow() {
  return (
    <div className="terminal animate-float" role="img" aria-label="DevOps terminal demo">
      {/* Window chrome */}
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-amber" />
          <span className="terminal-dot terminal-dot-green" />
        </div>
        <div className="terminal-title">shubham@codersdiary — zsh</div>
        <div style={{ width: '4rem' }} />
      </div>

      {/* Body */}
      <div className="terminal-body" aria-hidden="true">
        {/* Command 1 */}
        <div className="t-line">
          <span className="t-prompt">➜</span>
          <span className="t-dir">~/infra</span>
          <span className="t-cmd">kubectl get nodes -o wide</span>
        </div>
        <div className="t-out">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;VERSION</div>
        <div className="t-out">eks-prod-node-1&nbsp;&nbsp;<span className="t-success">Ready</span>&nbsp;&nbsp;&nbsp;v1.30.2</div>
        <div className="t-out">eks-prod-node-2&nbsp;&nbsp;<span className="t-success">Ready</span>&nbsp;&nbsp;&nbsp;v1.30.2</div>
        <div className="t-out">eks-prod-node-3&nbsp;&nbsp;<span className="t-success">Ready</span>&nbsp;&nbsp;&nbsp;v1.30.2</div>

        <br />

        {/* Command 2 */}
        <div className="t-line">
          <span className="t-prompt">➜</span>
          <span className="t-dir">~/infra</span>
          <span className="t-cmd">terraform apply --auto-approve</span>
        </div>
        <div className="t-out"><span className="t-warn">~</span> aws_eks_cluster.prod: Modifying...</div>
        <div className="t-out"><span className="t-warn">~</span> aws_eks_cluster.prod: Still modifying... [5s]</div>
        <div className="t-out"><span className="t-success">✔</span> aws_eks_cluster.prod: Modifications complete!</div>
        <br />
        <div className="t-out">
          <span className="t-success">Apply complete!</span> Resources: 0 added, 3 changed, 0 destroyed.
        </div>

        <br />

        {/* Command 3 */}
        <div className="t-line">
          <span className="t-prompt">➜</span>
          <span className="t-dir">~/infra</span>
          <span className="t-cmd">argocd app sync production</span>
        </div>
        <div className="t-out">TIMESTAMP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GROUP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KIND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS</div>
        <div className="t-out">2024-01-15&nbsp;&nbsp;&nbsp;apps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deployment&nbsp;<span className="t-success">Synced</span></div>
        <div className="t-out">2024-01-15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-success">Synced</span></div>

        <br />

        {/* Prompt with cursor */}
        <div className="t-line">
          <span className="t-prompt">➜</span>
          <span className="t-dir">~/infra</span>
          <span className="t-cursor" />
        </div>
      </div>
    </div>
  )
}
