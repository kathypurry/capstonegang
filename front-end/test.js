//boop
phase === 2 && startTime && endTime
    ? (<>
            <span>WPM: {Math.round(((60 / duration) * correctChar) / 5)}</span>
            <span>Accuracy: {((correctChar / snippet.length) * 100).toFixed(2)}%</span>
            <span>Duration: {duration}s</span>
        </>)
    : null