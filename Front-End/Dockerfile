FROM node:22.11.0

RUN useradd -m appuser

WORKDIR /app

COPY package.json package-lock.json ./

RUN chown -R appuser:appuser /app

USER appuser

RUN npm install

COPY --chown=appuser:appuser . .

EXPOSE 4201

CMD ["npm", "start"]