* SlideShow is a carousel showing a current step and some control buttons that page
back and forth through a list of steps
    slides_: Array is an array of step items with { id, name, duration } shape
    activeSlideIdx: Pointer to the currently visible slide
    handleNext(idx: number) and handleBack(idx: number) are callbacks for when control buttons are clicked; they get activeSlideIdx

* StepCard is a slide showing a visible step. It displays a Heading and a large CountdownTimer
    name: string - is a heading
    isActive: boolean - is whether this step should be visible

* CountdownTimer is a timer for the current step.
    timeRemaining: number is how much time there's left; rendered as a clock
    isActive: boolean is whether this timer should be counting down
    setTimeRemaining(time): a callback invoked by a setTimeout

* ControlButton is a button with a callback
    onClick() is a callback to invoke when the button is clicked.

* ProgressPanel is a footer that shows a progress bar with start time and approx end time of the entire PlayThrough

* Page is a wrapper that renders NavToolbar and PlaythroughContent.

* AppNav is a toolbar at the top; it renders ControlButtons for "reset", "pause" and "close". When the playthrough is paused, it renders a massive "resume" modal.
    handleReset, handlePause, handleClose and handleResume are the callbacks that control buttons will need to handle (though there's really no reason for these not to be anonymous, as they'll just be dispatching setControlPref with the value of the button