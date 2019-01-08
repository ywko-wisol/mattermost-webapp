Mattermost have a default set of colors for the default theme. Other themes and
can use different colors.

```js noeditor
function Color({color, variable, children}) {
    return (
        <div style={{display: 'flex', 'flex-direction': 'column', 'align-items': 'center', width: '200px', margin: '20px'}}>
            <div style={{
                'border-radius': '5%',
                display: 'inline-block',
                'background-color': color,
                width: '96px',
                height: '96px',
                border: '1px solid rgba(0, 0, 0, .5)',
            }}/>
            <div><b>{children}</b></div>
            <div>Sass variable: {variable}</div>
            <div>Color: {color}</div>
        </div>
    );
}
<div style={{display: 'flex', 'flex-wrap': 'wrap'}}>
    <Color variable='$primary-color' color='#166de0'>Primary Color</Color>
    <Color variable='$link-color' color='rgb(35, 137, 215)'>Link color</Color>
    <Color variable='$bg--gray' color='rgb(245, 245, 245)'>Background Gray</Color>
    <Color variable='$light-gray' color='rgba(0, 0, 0, .15)'>Light gray</Color>
    <Color variable='$gray' color='rgba(0, 0, 0, .3)'>Gray</Color>
    <Color variable='$dark-gray' color='rgba(0, 0, 0, .5)'>Dark gray</Color>
    <Color variable='$transparent' color='rgb(0, 0, 0, 0)'>Transparent</Color>
    <Color variable='$white' color='rgb(255, 255, 255)'>White</Color>
    <Color variable='$black' color='rgb(0, 0, 0)'>Black</Color>
    <Color variable='$red' color='rgb(214, 73, 70)'>Red</Color>
    <Color variable='$yellow' color='rgb(255, 255, 0)'>Yellow</Color>
</div>
```
