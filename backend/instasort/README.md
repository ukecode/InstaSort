## InstaSort Backend

* run

``` bash
$ adonis serve --dev
```

* Request Example:

```bash
curl --request GET \
  --url http://127.0.0.1:3333/insta \
  --header 'content-type: application/json' \
  --data '{
"url" : "https://www.instagram.com/p/CBTrP-ApHi6/"
}'

```