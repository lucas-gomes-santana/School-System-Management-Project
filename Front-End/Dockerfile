# Imagem base para o Angular
FROM node:22.11.0

# Cria um usuário não-root
RUN useradd -m appuser

# Define o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY package.json package-lock.json ./

# Altere o proprietário dos arquivos para o usuário não-root
RUN chown -R appuser:appuser /app

# Troque para o usuário não-root
USER appuser

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY --chown=appuser:appuser . .

# Exponha a porta 4200 (porta padrão do ng serve)
EXPOSE 4200

# Comando para rodar o servidor de desenvolvimento do Angular
CMD ["npm", "start"]