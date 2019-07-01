# Пути

## Регистрация - POST - /auth/signup

На `body` ожидает объект со свойствами `name`, `email` и `password`.

Если все ок вернет 201

```js
{
  user: Object,
  token: String
}
```

Если все плохо вернет 409

```js
{
  message: Object
}
```

## Логин - POST - /auth/signin

На `body` ожидает объект со свойствами `email` и `password`.

Если все ок вернет 200

```js
{
  user: Object,
  token: String
}
```

Если все плохо вернет 404

```js
{
  message: Object
}
```

## Текущий - GET - /auth/current

Ожидает хедер `Authorization` со значением `Bearer тут_токет`.

Если все ок вернет 200

```js
{
  user: Object,
}
```

Если все плохо вернет 500

```js
{
  message: Object
}
```