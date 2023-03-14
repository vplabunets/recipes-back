POST Реєстрація
Потрібно передати, приклад: {
"name": "Monica Belucci",
"email": "mbelucci10011@gmail.com",
"id": "641053faf7f1655437d34b03"
}

https://recipes-back-production.up.railway.app/api/auth/signup

## Відповідь:: {message: "User registration was successful, a verification request was sent to your email"}

---

POST Вхід в систему якщо вже зареєстрований

Вхід в систему через email та password (login)

https://recipes-back-production.up.railway.app/api/auth/signup

## Відповідь:, коли верифікацію пройдено :

---

GET Отримання всіх рецептів
https://recipes-back-production.up.railway.app/api/recipes

## Відповідь:

---

GET Отримання рецептів по ID рецепту
https://recipes-back-production.up.railway.app/api/recipes/:ID

## Відповідь:

---

GET USER RECIPES Отримання рецептів користувача
https://recipes-back-production.up.railway.app/api/users

## Відповідь:

---

GET USER MYDATA Отримання даних користувача
https://recipes-back-production.up.railway.app/api/users/mydata

## Відповідь:

---

POST Додавання рецепту
Потрібно передати: "{ }"

https://recipes-back-production.up.railway.app/api/recipes

## Відповідь:

---

PATCH Редагування рецепту
Потрібно передати: "{"name":"honey"}"
https://recipes-back-production.up.railway.app/api/recipes/:ID

## Відповідь:

---

DELETE Видалення рецепту

https://recipes-back-production.up.railway.app/api/recipes/64086ce73d0ef91ecfdfdb99

## Відповідь:

    1) Якщо ID не знайдено, то буде відповідь: {"message": "No recipe"}
    2) Якщо ID не знайдено:
    {
    "_id": "640f9c34d6a7b9e996b607d5",
    "name": "milk2",
    "createdAt": "2023-03-13T21:57:08.231Z",
    "updatedAt": "2023-03-13T21:57:08.231Z"

}
