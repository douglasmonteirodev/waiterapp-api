# WAITERAPP API

[![GitHub](https://img.shields.io/badge/sistema-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/douglasmonteirodev/waiterapp-web) [![GitHub](https://img.shields.io/badge/mobile-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/douglasmonteirodev/waiterapp-mobile)
[![Figma](https://img.shields.io/badge/figma-ir-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/gVluFLXcvkx8RUcF39PQPH/Waiter-App?node-id=0%3A1&t=9P60iLlk4Lfd2eS9-0)

## Descrição:

### Sobre as tecnologias utilizadas.

- `Foi utilizado Node JS, PostgresSQL, Token JWT e Prisma`

### SOBRE ROTAS:

### <i>Rotas de user</i>

- `/users = tipo POST "Criar novo usuário"`
- `/session = tipo POST "Logar usuário"`
- `/me = tipo GET "Detalhes do usuário"`

### <i>Rotas de category</i>

- `/category = tipo POST "Criar categorias"`
- `/category = tipo GET "Listar categorias"`

### <i>Rotas de products</i>

- `/product = tipo POST = "Cria um novo produto"`
- `/product/category = tipo GET = "Lista os produtos por categoria"`

### <i>Rotas de order</i>

- `/order = tipo POST = "Abre mesa"`
- `/order = tipo DELETE = "Deleta a mesa"`
- `/order/add = tipo POST = "Adiciona produto a mesa"`
- `/order/remove = tipo DELETE = "Remove produto da mesa"`
- `/order/send = tipo PUT = "Manda pedido para o dashboard"`
- `/order/remove = tipo DELETE = "Remove produto da mesa"`
- `/order = tipo GET = "Listar as ordens"`
- `/order/detail = tipo GET = "Busca detalhes da mesa"`
- `/order/finish = tipo PUT = "Finalizar o pedido"`

## <i>Douglas Monteiro</i> 😁🔥🚀
