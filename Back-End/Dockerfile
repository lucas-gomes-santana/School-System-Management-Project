# Dockerfile da API Java

# Etapa 1: Imagem base do OpenJDK
FROM openjdk:23-jdk-slim AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o wrapper do Maven, o arquivo pom.xml e o diretório src para o contêiner
COPY .mvn .mvn
COPY mvnw mvnw
COPY pom.xml pom.xml
COPY src/ src/

# Conceda permissão de execução para o Maven Wrapper e construa o projeto
RUN chmod +x mvnw && ./mvnw clean install -DskipTests

# Etapa 2: Imagem base para execução
FROM openjdk:23-jdk-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o JAR compilado para o contêiner
COPY --from=build /app/target/Back-End-0.0.1-SNAPSHOT.jar app.jar

# Copie o script wait-for-it.sh para o contêiner
COPY scripts/wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Exponha a porta 8080 (ou a porta que seu serviço usa)
EXPOSE 8080

# Comando para rodar o aplicativo
ENTRYPOINT ["/app/wait-for-it.sh", "db:3306", "--", "java", "-jar", "app.jar"]