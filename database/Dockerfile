FROM mysql:8.0.40

COPY schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3307

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=SchoolSystem
