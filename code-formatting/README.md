# Part of [CoLI](https://coli.codes) Project

## Supported language formatters

- typescript (ts, tsx)
- javascript (js, jsx, js-flow)
- html
- yaml
- json

## Api - calling via REST Api

```sh
# option 1 - body only
POST /format
{
    "lang": "html",
    "code": "<div></div>"
}

# option 2 - mixing query
POST /format?lang=html
{
    "code": "<div></div>"
}
```
