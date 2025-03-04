FROM openjdk:23-jdk-slim AS build

WORKDIR /app

COPY .mvn .mvn
COPY mvnw mvnw
COPY pom.xml pom.xml
COPY src/ src/

RUN chmod +x mvnw && ./mvnw clean install -DskipTests

FROM openjdk:23-jdk-slim

WORKDIR /app

COPY --from=build /app/target/Back-End-0.0.1-SNAPSHOT.jar app.jar

COPY scripts/wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

EXPOSE 8080

ENTRYPOINT ["/app/wait-for-it.sh", "db:3306", "--", "java", "-jar", "app.jar"]