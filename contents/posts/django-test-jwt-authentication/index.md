---
title: 【Django】JWT 認証付きの API のテストでユーザー認証を行う方法
date: '2023-06-11'
---

JWT 認証には [djangorestframework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) を用いていることを前提とする。

```python
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()


class ExampleTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='username', password='password')
        self.refresh = RefreshToken.for_user(self.user)
        self.client.credentials(
            HTTP_AUTHORIZATION='Bearer ' + str(self.refresh.access_token)
        )
```

### 参考

- https://django-rest-framework-simplejwt.readthedocs.io/en/latest/creating_tokens_manually.html
