# INDUCK server
...

## Модульная архитектура REST API (Modular Monolith)

### ```Структура проекта (дополненная для тестирования)```

```bash
src/
├── modules/
│   ├── user/               # Модуль пользователей
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   ├── user.repository.ts
│   │   ├── user.model.ts
│   │   ├── user.routes.ts
│   │   └── __tests__/      # Тесты модуля
│   │       ├── user.controller.test.ts
│   │       ├── user.service.test.ts
│   │       └── user.integration.test.ts
│   │
│   └── product/            # Модуль товаров
│       └── ...             # Аналогичная структура
│
├── core/                   # Общие компоненты
│   ├── config/
│   ├── middlewares/
│   └── utils/
└── app.ts                  # Инициализация приложения
```

# ...