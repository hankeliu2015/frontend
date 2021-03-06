// tslint:disable:no-expression-statement
import delay from '../../utils/delay'
import drawRipple from '../../animations/ripple'

/*
  Guide the user through having an issue and reporting it. Where clicking the "next"
  button results in a ripple, not going to the next card, we include an "id" for the
  step so that separate handlers can determine what step they are on and continue
  the tour when certain conditions are met, e.g. writing "Checkout" for the issue title
*/

declare var Shepherd: any

export const startStep: TourStep = {
  id: 'begin-tour',
  buttons: [
    {
      classes: 'human-pink-bg single-button umami--click--begin-tour',
      text: `
        <span>
          <svg class="flag" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.925659C0.445312 0.925659 0 1.37097 0 1.92566V15.9257C0 16.4803 0.445312 16.9257 1 16.9257C1.55469 16.9257 2 16.4803 2 15.9257V1.92566C2 1.37097 1.55469 0.925659 1 0.925659ZM13.9688 8.72253C13.625 8.28503 13.625 7.56628 13.9688 7.12878L15.8281 4.72253C16.1719 4.28503 15.9844 3.92566 15.4141 3.92566H12.3125C11.7422 3.92566 10.9453 3.60535 10.5469 3.22253L9.9375 2.6366C9.53906 2.24597 8.74219 1.92566 8.17188 1.92566H3V9.92566H6.10156C6.67188 9.92566 7.46875 10.246 7.86719 10.6288L8.47656 11.2147C8.88281 11.6053 9.67188 11.9257 10.2422 11.9257H15.4141C15.9844 11.9257 16.1719 11.5663 15.8281 11.1288L13.9688 8.72253Z" fill="white" />
          </svg>
          Begin the tour
        </span>
      `,
      action(): void {
        this.next() // tslint:disable-line: no-invalid-this no-this
      },
    },
  ],
}

export const introStep: TourStep = {
  id: 'tour-intro',
  text: [
    `With More Human Internet, users of your site can quickly and easily report issues or request features through a simple widget. Let's see it in action...`,
  ],
}

export const addToCartStep: TourStep = {
  id: 'add-to-cart',
  attachTo: {
    element: '.demo-content-inner',
    on: 'bottom',
  },
  text: [`Suppose you are shopping for a friend's birthday gift, and you've found the perfect item. <strong>Click "Add to Cart"</strong> to continue...`],
  onNextClick(): void {
    drawRipple(document.querySelector('button.add-to-cart')!)
  },
}

export const checkoutStep: TourStep = {
  id: 'checkout',
  attachTo: {
    element: '.demo-content-inner',
    on: 'bottom',
  },
  text: ['Next <strong>click "Checkout"</strong>...'],
  onNextClick(): void {
    drawRipple(document.querySelector('button.checkout')!)
  },
}

export const checkoutFailingStep: TourStep = {
  id: 'checkout-fail',
  beforeShowPromise(): Promise<any> {
    return delay(1500)
  },
  attachTo: {
    element: 'button.checkout',
    on: 'bottom',
  },
  text: [`Something's wrong. The button is spinning endlessly!`],
}

export const letsReportStep: TourStep = {
  id: 'lets-report',
  attachTo: {
    element: '.more-human-internet-widget-boundary',
    on: 'bottom-end',
  },
  text: [
    "Let's report this issue. <strong>Click the widget</strong> to continue. Site maintainers can layer the More Human Internet widget onto their site with a few lines of embedded code.",
  ],
  onNextClick(): void {
    drawRipple(document.querySelector('.more-human-internet-widget-boundary')!)
  },
}

export const letsWriteIssueTitleStep: TourStep = {
  id: 'lets-write-issue-title',
  beforeShowPromise(): Promise<any> {
    return delay(300)
  },
  attachTo: {
    element: '.more-human-internet-widget-editor-issue-title-input',
    on: 'left',
  },
  text: [`Let's write up the issue. <strong>Type "Checkout"</strong> to continue...`],
  onNextClick(): void {
    Shepherd.activeTour
      ?.getCurrentStep()
      .updateStepOptions({ text: 'The first step in reporting issue is to give it a title. So <strong>type "Checkout"</strong> to continue.' })
    drawRipple(document.querySelector('.more-human-internet-widget-editor-issue-title-input')!)
  },
}

export const explainSimilarIssuesStep: TourStep = {
  id: 'explain-similar-issue',
  attachTo: {
    element: '.more-human-internet-similar-issues',
    on: 'left',
  },
  text: [
    "Looks like this site has some similar issues reported by other users. You could select an existing issue, but none of them fully describe what you're seeing.",
  ],
}

export const letsAmendIssueTitleStep: TourStep = {
  id: 'lets-amend-issue-title',
  attachTo: {
    element: '.more-human-internet-widget-editor-issue-title-input',
    on: 'left',
  },
  text: [`Add some more detail. <strong>Type "Checkout is broken for the supersuit"</strong> to continue...`],
  onNextClick(): void {
    Shepherd.activeTour
      ?.getCurrentStep()
      .updateStepOptions({ text: `Let's add a more specific title. <strong>Type "Checkout is broken for the supersuit"</strong> to continue.` })
    drawRipple(document.querySelector('.more-human-internet-widget-editor-issue-title-input')!)
  },
}

export const postAsNewIssueStep: TourStep = {
  id: 'post-as-new-issue',
  attachTo: {
    element: '.more-human-internet-widget-boundary',
    on: 'left',
  },
  text: [`Looks like this is a new issue, so <strong>click "Post as new issue"</strong> to continue`],
  onNextClick(): void {
    drawRipple(document.querySelector('button.post')!)
  },
}

export const finalPostStep: TourStep = {
  id: 'final-post',
  attachTo: {
    element: '.more-human-internet-widget-boundary',
    on: 'left',
  },
  text: [
    `The More Human Internet widget asks for additional detail to help the site's team address the issue. When you're finished, <strong>click "Post"</strong> to continue`,
  ],
  onNextClick(): void {
    drawRipple(document.querySelector('button.post')!)
  },
}

export const steps = Object.freeze([
  startStep,
  introStep,
  addToCartStep,
  checkoutStep,
  checkoutFailingStep,
  letsReportStep,
  letsWriteIssueTitleStep,
  explainSimilarIssuesStep,
  letsAmendIssueTitleStep,
  postAsNewIssueStep,
  finalPostStep,
])
