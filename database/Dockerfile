# Dockerfile para o Banco de Dados (MySQL)

# Imagem base do MySQL
FROM mysql:8.0.40

# Copie o script SQL para o contêiner
COPY schema.sql /docker-entrypoint-initdb.d/

# Exponha a porta do MySQL
EXPOSE 3306

# Defina as variáveis de ambiente para o MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=school_system
