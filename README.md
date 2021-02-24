<h1 align="center">Transform your business with Atlas.</h1>

<p align="center">
  <i>With Atlas you have access to a platform where you can map your end-to-end business processes and automate your workflows.</i>
  <br>
</p>

<p align="center">
  <a href="https://www.weareatlas.com"><strong>www.weareatlas.com</strong></a>
  <br>
</p>

<hr>

This repository collects community maintained translations for [weareatlas](https://weareatlas.github.io/weareatlas/CHANGELOG.html) user interface elements, messages and tooltips.

## Available Translations

* [English](./src/lib/translations/en-GB.json)
* [German](./src/lib/translations/de-DE.json)
* [Italian](./src/lib/translations/it-IT.json)
* [Turkish](./src/lib/translations/tr-TR.json)

## Use a Translation (Optional)

Follow along the [i18next](https://www.i18next.com/) example and replace `defaultNS` with a section within the language file in this repository.

```JavaScript
i18next.init({lng, resources, defaultNS,
    fallbackLng: (code) => {
        if (code.startsWith('it')) {
            return 'it-IT';
        }
        if (code.startsWith('de')) {
            return 'de-DE';
        }
        if (code.startsWith('tr')) {
            return 'tr-TR';
        }
        return 'en-GB';
    }
});
```

## Contributing

Create a [new language file](https://github.com/weareatlas/i18n/new/master/src/lib/translations) and contribute a translation. Checkout [`en-GB.json`](https://github.com/weareatlas/i18n/blob/master/src/lib/translations/en-GB.json) for a list of available messages.

## License

MIT
