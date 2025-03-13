import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@app/root';

// Находим корневой элемент
const container = document.getElementById('root');

// Проверяем, что элемент существует
if (container) {
    const root = createRoot(container); // Создаём корень
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}