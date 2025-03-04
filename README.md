### Choose your language of preference:
### Escolha a língua de sua preferência:

[English](#school-environment-management-system-project)

[Português Brasileiro](#projeto-sistema-de-gerenciamento-de-ambiente-escolar)

<br><br><br>

# School Environment Management System Project

### What is this project?

The idea of this project is to simulate an online system where the teacher can enter attendance, grades, and notes about students at a school. 
If the teacher insert incorrect data,he wiil not obtain acess to the system. 
The teacher's entry will be restricted, requiring them to re-enter the data correctly. 
This prevents unauthorized access that could accidentally or intentionally sabotage the data.

---

### Why was this project created?

As a Brazilian high school student, I have often seen teachers complain about the system used at my school. 
My interest in software development arose during my IT technical course at the school where I am currently studying. 
So, I came up with this project idea to learn more about how full-stack programming works.

---

### Technologies used:

- Angular Framework
- Java
- Spring Framework
- Maven
- SQL
- MySQL
- Docker

---

### How do I contribute to this project?

1. Fork this repository, copy the forked link, and clone the project to your computer.

2. Open a terminal and navigate to one of the three project folders. Example:
   ```sh
   cd Front-End
   ```

3. Run the following command to create a Docker image:
   ```sh
   docker build -t your_image_name .
   ```
   You can use any name, the important thing is to create the image. Make sure to do this for all three folders (Back-End, database, and Front-End).

4. Execute the following command in the root project folder:
   ```sh
   docker-compose up -d
   ```
   This will build the containers using the images you created earlier.

5. Copy and paste this port into your browser's address bar:
    ```sh
    http://localhost:4201/
    ```
    You will be taken to the system's login page, use the data from one of the teachers in the database file `schema.sql` that is inside the `databse` folder to log in. Make sure that the containers are running in your development environment.

6. Test the existing code, make your changes, commit them, and submit a Pull Request to the `Test-Branch`.

---

### Contribution Rules

#### Please follow the contribution rules below to increase the chances of your Pull Request being accepted:

- Keep the code and comments in English.

- If you want to modify the database structure, open an issue in this repository to contact me. Changes to the API and Angular code will also be required.

- If you create new Angular components, delete the spec files. This is not a complex project, so I prefer not to work with unit tests here. I also don't want the Front-End folder to have too many files.

- Commit your changes to the `Test-Branch` first to ensure your code is bug-free. After this process, you can make a Pull Request to the remote repository.I will evaluate your Pr and decide if it can be merged into the main branch.

---

### Final Warnings

- Only PRs in the `Test-Branch` will be accepted. I will decide if external PRs can be merged into the main branch.

- This project can be used for personal or educational purposes, but commercial use is prohibited. Read the LICENSE file for more information.

- If you have any questions, open an issue on my GitHub and ask me.

---

<br><br><br>

# Projeto Sistema de Gerenciamento de Ambiente Escolar

### O que é este projeto?

A ideia deste projeto é simular um sistema online onde o professor pode inserir presença, notas e observações sobre os alunos de uma escola. 
A entrada do professor será restringida se ele inserir dados incorretos na página de login do sistema, e ele precisará inserir os dados corretamente. 
Isso evita que qualquer pessoa acesse o sistema e sabote os dados, seja acidentalmente ou intencionalmente.

---

### Por que este projeto foi criado?

Como estudante do ensino médio brasileiro, vi várias reclamações dos professores sobre o sistema utilizado pela minha escola. 
Meu interesse pelo desenvolvimento de software surgiu durante meu curso técnico em Informática na escola onde estudo atualmente. 
Assim, tive a ideia deste projeto para aprender mais sobre como funciona a programação full-stack.

---

### Tecnologias utilizadas:

- Framework Angular

- Java

- Framework Spring Boot

- Apache Maven

- SQL

- MySQL

- Docker

---

### Como contribuir para este projeto?

1. Faça um fork deste repositório, copie o link do seu fork e clone o projeto no seu computador.

2. Abra um terminal e navegue para uma das três pastas principais do projeto. Exemplo:
   ```sh
   cd Front-End
   ```

3. Rode o seguinte comando para criar uma imagem Docker:
   ```sh
   docker build -t nome_da_sua_imagem .
   ```
   Você pode dar qualquer nome para a imagem que for criar,o que importa é que o processo seja completado com sucesso.

4. Execute o comando abaixo na pasta raíz do projeto:
   ```sh
   docker-compose up -d
   ```
   Isso irá criar e executar todos os contâineres que irão usar as imagens que você criou anteriormente.

5. Copie e cole essa porta na barra de enderços do seu navegador:
    ```sh
    http://localhost:4201/
    ```
    Você será levado para a página de login do sistema,use os dados de um dos professores do banco de dados do arquivo `schema.sql` que está dentro da pasta `databse` para fazer o login. Certifique-se de que os contâineres estão rodando no seu ambiente de desenvolvimento.

6. Test the existing code, make your changes, commit them, and submit a Pull Request to the `Test-Branch`.

---

### Regras de Contribuição

#### Por favor, siga as regras de contribuição abaixo para aumentar as chances de seu Pull Request ser aceito:

- Mantenha o código e os comentários em inglês.

- Se quiser modificar a estrutura do banco de dados, abra uma issue neste repositório para entrar em contato comigo. Será necessário fazer alterações também nos códigos da API e do Angular.

- Se criar novos componentes Angular, exclua os arquivos spec. Este não é um projeto muito complexo, então pretendo não trabalhar com testes unitários aqui. Além disso, não quero que a pasta `Front-End` tenha um excesso de arquivos.

- Commite suas alterações primeiro na `Test-Branch` para garantir que os códigos criados não possuem bugs ou outros erros. Após esse processo, você pode fazer um Pull Request para o repositório remoto. Eu avaliarei sua Pr e irei decidir se ela pode ser mesclada na branch main.

---

### Avisos Finais

- Serão aceitas apenas modificações na `Test-Branch`. Eu decidirei se os PRs externos podem ser mesclados na branch main.

- Este projeto pode ser usado para fins pessoais ou educacionais, mas o uso comercial é proibido. Leia o arquivo LICENSE para mais informações.

- Se tiver dúvidas, abra uma issue no repositório GitHub do projeto e tire suas dúvidas comigo.

