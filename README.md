Please have docker-compose

then run:

``` 
 docker-compose up --build
```

visit localhost:3000

if you don't have docker-compose and have trouble running the app,
it is hosted on a very cheap server here: http://64.226.108.23:3000/
it is not guaranteed to work at the time you access it

## Explanation on choices

- There is a `status` attribute in the jsons 'AVAILABLE'. It suggests it can also be 'SOLD' or something. There is no change according to this status
- In the json, `styles`, `mediums`, `materials`, `subjects` are all in plural form. The page desgin shows `SUBJECT`, `MEDIUM`, `STYLE` in singular form. I followed the design
- I could not identify the fonts. I used a default one as it not so different
