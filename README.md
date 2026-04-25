# Práctica DevOps CI/CD

Aplicación Hola Mundo con Node.js, Express, Jest y Docker.

## Estructura

```
prueba-devops/
├── index.js          # Aplicación Express
├── Dockerfile        # Imagen Docker
├── package.json      # Dependencias
├── .gitignore
├── test/
│   └── index.test.js # Pruebas unitarias
└── .github/
    └── workflows/
        └── ci.yml   # GitHub Actions
```

## Comandos

```bash
npm install    # Instalar dependencias
npm test       # Ejecutar pruebas
npm start      # Iniciar aplicación
docker build -t prueba-devops .  # Construir imagen
```

## GitHub Actions

El pipeline automático:
1. Instala dependencias
2. Ejecuta pruebas unitarias
3. Construye y sube imagen a Docker Hub
4. Despliega a producción (Render)