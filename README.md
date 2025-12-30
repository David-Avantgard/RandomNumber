# 🎲 Number Generator | Gerador de Número Aleatório

🇧🇷 Projeto educacional desenvolvido durante o aprendizado em Full Stack Development no DevClub.  
🇪🇸 Proyecto educativo desarrollado durante el aprendizaje de Full Stack Development en DevClub.

---

## 📌 Descrição | Descripción

🇧🇷  
Este projeto gera um número aleatório entre dois valores definidos pelo usuário.  
O objetivo é praticar HTML, CSS e JavaScript, com foco em lógica básica, manipulação do DOM e responsividade.

🇪🇸  
Este proyecto genera un número aleatorio entre dos valores definidos por el usuario.  
El objetivo es practicar HTML, CSS y JavaScript, con enfoque en lógica básica, manipulación del DOM y diseño responsivo.

---

## 🚀 Funcionalidades | Funcionalidades

🇧🇷
- Definir valor mínimo e máximo
- Gerar número aleatório dentro do intervalo
- Validação de valores inválidos
- Animação visual ao exibir o resultado
- Layout responsivo (desktop e mobile)

🇪🇸
- Definir valor mínimo y máximo
- Generar número aleatorio dentro del rango
- Validación de valores inválidos
- Animación visual al mostrar el resultado
- Diseño responsivo (desktop y mobile)

---

## ⚙️ Lógica Central do Projeto (Nível Júnior)

A funcionalidade principal deste projeto é a geração de um número aleatório utilizando JavaScript.

Para isso, foi utilizada a função nativa Math.random(), que gera um número decimal entre 0 e 1.  
Esse valor é ajustado para o intervalo definido pelo usuário através da seguinte lógica:

Math.floor(Math.random() * (max - min + 1)) + min

Explicação simples:
- Math.random() gera um número aleatório
- (max - min + 1) define o intervalo correto
- Math.floor() remove as casas decimais
- + min garante que o número comece no valor mínimo

Assim, o número sorteado sempre estará entre os valores informados pelo usuário.

---

## 🛠️ Tecnologias Utilizadas | Tecnologías Utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla)

---

## 📂 Estrutura do Projeto | Estructura del Proyecto

/
assets/
logo.png  
Favicon.png  
BackGroud.png  

index.html  
styles.css  
scripts.js  
README.md  

---

## 👤 Autor | Autor

David Carvalho  
Desenvolvedor em formação — Full Stack  
Desarrollador en formación — Full Stack  

Projeto educacional desenvolvido durante estudos no DevClub.


