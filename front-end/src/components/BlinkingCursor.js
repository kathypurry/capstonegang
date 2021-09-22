function BlinkingCursor({ currentSnippet }) {
        let cursor = true;
        let speed = 350;
        setInterval(() => {
          if(cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed)

        

    return (
        <div>
            <span id='cursor'>|</span>
        </div>
    );
};

export default BlinkingCursor;
