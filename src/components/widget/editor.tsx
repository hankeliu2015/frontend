import React from 'react'


type EditorProps = {
  issueTitle: string
  setIssueTitle(issueTitle: string): void
}


export default function Editor({ issueTitle, setIssueTitle }: EditorProps): JSX.Element {
  const issueTitleRef = React.useRef<HTMLDivElement>()
  // const issueBodyRef = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    const editorElement = issueTitleRef.current!.querySelector('trix-editor') as any
    editorElement.addEventListener('trix-change', (event: { target: { value: string } }) => {
      const match = event.target.value.match(/^<div>(.*)<\/div>$/)

      if (!match) {
        throw new Error('trix should always wrap its contents in a div and the toolbar is exposed')
      }

      setIssueTitle(match[1])
    })
  })

  return (
    <div className="more-human-internet-widget-editor">
      <div
        ref={issueTitleRef as any}
        className="more-human-internet-widget-editor-issue-title-input"
        dangerouslySetInnerHTML={{ __html: `<trix-editor placeholder="What is your issue?"></trix-editor>` }}
      />
      {/* <div
        ref={issueBodyRef as any}
        className="more-human-internet-widget-editor-issue-body-input"
        dangerouslySetInnerHTML={{ __html: `<trix-editor></trix-editor>` }}
      /> */}
    </div>
  )
}
