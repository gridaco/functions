# Part of [CoLI](https://coli.codes) Project

## Supported language formatters

- typescript (ts, tsx)
- javascript (js, jsx, js-flow)
- html
- yaml
- json

## Api - calling via REST Api

**Current function url**: `https://q18lvkpic8.execute-api.us-west-1.amazonaws.com/production/`

- GET /
- POST /format

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
