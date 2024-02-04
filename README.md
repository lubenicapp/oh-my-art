Please have docker-compose

then run:

``` 
 docker-compose up --build
```

visit localhost:3000


## Explanation on choices

- There is a `status` attribute in the jsons 'AVAILABLE'. It suggests it can also be 'SOLD' or something. There is no change according to this status
- In the json, `styles`, `mediums`, `materials`, `subjects` are all in plural form. The page desgin shows `SUBJECT`, `MEDIUM`, `STYLE` in singular form. I followed the design
- I could not identify the fonts. I used a default one as it not so different
