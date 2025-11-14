# Task Management API

Backend NestJS para um gerenciador de tarefas (API REST) - front em React separado.

## Descrição

API REST para gerenciamento de tarefas com operações CRUD completas. Esta é a versão inicial com armazenamento em memória.

## Tecnologias

- **NestJS** - Framework Node.js progressivo
- **TypeScript** - Linguagem tipada
- **class-validator** - Validação de DTOs
- **class-transformer** - Transformação de dados
- **uuid** - Geração de IDs únicos

## Instalação

```bash
npm install
```

## Executar a aplicação

```bash
# Modo de desenvolvimento
npm run start:dev

# Modo de produção
npm run build
npm run start
```

A aplicação estará disponível em: `http://localhost:3000/api`

## Endpoints da API

### Tasks

- **GET /api/tasks** - Lista todas as tarefas
- **GET /api/tasks/:id** - Obtém uma tarefa específica
- **POST /api/tasks** - Cria uma nova tarefa
- **PATCH /api/tasks/:id** - Atualiza uma tarefa
- **DELETE /api/tasks/:id** - Remove uma tarefa

### Exemplo de corpo de requisição (POST/PATCH)

```json
{
  "title": "Minha tarefa",
  "description": "Descrição da tarefa",
  "status": "pending"
}
```

**Status válidos:** `pending`, `in-progress`, `completed`

## Estrutura do Projeto

```
src/
├── common/
│   └── middleware/
│       ├── logger.middleware.ts    # Log de requisições
│       └── auth.middleware.ts      # Placeholder para autenticação
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts     # DTO para criação
│   │   └── update-task.dto.ts     # DTO para atualização
│   ├── entities/
│   │   └── task.entity.ts         # Interface da entidade Task
│   ├── tasks.controller.ts        # Controller com rotas CRUD
│   ├── tasks.service.ts           # Service com lógica de negócio
│   └── tasks.module.ts            # Module do domínio Tasks
├── app.module.ts                  # Módulo raiz da aplicação
└── main.ts                        # Bootstrap da aplicação
```

## Middlewares

- **LoggerMiddleware**: Registra todas as requisições HTTP com método, URL, status e tempo de resposta
- **AuthMiddleware**: Placeholder para autenticação (a ser implementado com JWT)

## Validação

A aplicação utiliza `ValidationPipe` global para validar todos os DTOs automaticamente.

## Próximos Passos / Pontos de Atenção

- ⚠️ **Dados em memória**: Atualmente os dados são armazenados em memória e serão perdidos ao reiniciar a aplicação. Planejar integração com banco de dados (PostgreSQL, MongoDB, etc.)
- ⚠️ **Autenticação**: O middleware de autenticação é um placeholder. Deve ser substituído por implementação real com JWT/Passport
- 🔄 Adicionar testes unitários e de integração
- 🔄 Configurar variáveis de ambiente (.env)
- 🔄 Adicionar documentação com Swagger/OpenAPI
- 🔄 Implementar paginação para listagem de tarefas
- 🔄 Adicionar filtros e ordenação

## Scripts Disponíveis

```bash
npm run start:dev  # Inicia em modo de desenvolvimento com watch
npm run build      # Compila o projeto
npm run start      # Inicia em modo de produção
npm run format     # Formata código com Prettier
npm run lint       # Executa ESLint
npm run test       # Executa testes
```

## Licença

MIT
