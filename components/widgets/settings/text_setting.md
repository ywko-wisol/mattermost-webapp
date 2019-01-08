TextSetting example:

```js
<TextSetting
    label='label'
    helpText='Help Text'
    footer='Footer'
    value='value'
    onChange={(id, val) => {}}
/>
```

TextSetting disabled example:

```js
<TextSetting
    label='label'
    helpText='Help Text'
    footer='Footer'
    disabled={true}
    value='value'
    onChange={(id, val) => {}}
/>
```

TextSetting for email example:

```js
<TextSetting
    label='label'
    helpText='Help Text'
    footer='Footer'
    type='email'
    value='value'
    onChange={(id, val) => {}}
/>
```
