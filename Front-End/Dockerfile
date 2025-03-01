# Etapa 1: Imagem base para o Angular
FROM node:22.11.0 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos essenciais para instalar as dependências
COPY ./package.json ./package-lock.json ./

# Instale as dependências
RUN npm install

# Agora copie o restante dos arquivos do projeto
COPY . .

# Compile a aplicação Angular para produção
RUN npm run build --prod

# Etapa 2: Servir a aplicação com um servidor estático (nginx)
FROM nginx:alpine

# Copie os arquivos compilados para o diretório do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80 (ou a porta configurada no nginx)
EXPOSE 80

# Comando para rodar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
