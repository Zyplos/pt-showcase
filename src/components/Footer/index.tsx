import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="fancy-button">
        <a href="https://zyplos.dev" target="_blank" rel="noreferrer">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAlCAYAAADyUO83AAAACXBIWXMAAC4jAAAuIwF4pT92AAAFw2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuYThkNDc1MzQ5LCAyMDIzLzAzLzIzLTEzOjA1OjQ1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuNyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDctMjlUMDU6NTA6MTgtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA3LTI5VDA1OjU0OjQ3LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA3LTI5VDA1OjU0OjQ3LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTgzNmU1Mi1kY2NhLTRjOWMtYjNhNi0zMzcyYjRhODM1MTciIHhtcE1NOkRvY3VtZW50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"
            alt=""
          />
          i made this
        </a>
      </div>
      <p>
        check out my other stuff or follow me on{" "}
        <a href="https://twitter.com/zyplos" target="_blank" rel="noreferrer">
          twitter
        </a>{" "}
        and/or{" "}
        <a
          href="https://bsky.app/profile/zyplos.dev"
          target="_blank"
          rel="noreferrer"
        >
          bluesky
        </a>
      </p>
      <p>
        if you haven't already, <strong>toggle the design commentary</strong> at
        the top for extra notes
      </p>
    </footer>
  );
}
