src/
├── shared/
│   ├── api/
│   │   ├── endpoints/       # Эндпоинты API (разбитые по сущностям)
│   │   │   ├── posts.ts     # Пример: API для работы с постами
│   │   │   └── users.ts     # Пример: API для работы с пользователями
│   │   ├── client.ts        # HTTP-клиент (axios/fetch)
│   │   ├── types/           # Типы для API-ответов
│   │   └── index.ts         # Экспорт всех API
└── features/
    └── posts/              # Фича, использующая API
        ├── model/          # (Опционально) Модели, сторы и т.д.
        └── ui/