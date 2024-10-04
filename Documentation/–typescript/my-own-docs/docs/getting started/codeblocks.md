---
title: Codeblocks
sidebar_position: 6
---

```jsx title= "Codeblock"
function Greeting(props){
    return <p>Welcome, {props.userName}!</p>;
}

export default Greeting;
```

```jsx title="Highlights Lines" showLineNumbers
// highlight-next-line
function HighlightsText(highlight){
    if(hightlight){
        // highlight-start
        return 'This text is highlighted!';
    }
    return 'Nothing highlighted';
    // highlight-end
}
```


```jsx title="Highlights Lines" {3,5-8} showLineNumbers

function HighlightsText(highlight){
    if(hightlight){
        return 'This text is highlighted!';
    }
    return 'Nothing highlighted';
   
}
```

