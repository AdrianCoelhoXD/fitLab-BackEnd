# 📚 FitLab Backend - Guia de Instalação  

Bem-vindo ao projeto **FitLab**! Este é o backend da nossa aplicação de academia, construído com **Node.js, Express, MongoDB e Swagger**.  

Siga os passos abaixo para configurar o projeto na sua máquina e contribuir com melhorias!  

--- 

## 🛠 **Pré-requisitos**  
Antes de começar, verifique se você tem instalado:  
✅ **Node.js** (v18 ou superior) - [Download Node.js](https://nodejs.org/)  
✅ **MongoDB** (local ou Atlas) - [Download MongoDB](https://www.mongodb.com/try/download/community)  
✅ **Git** - [Download Git](https://git-scm.com/)  
✅ **Postman** (opcional, para testar rotas) - [Download Postman](https://www.postman.com/)  

---

## 🚀 **Passo a Passo: Como Rodar o Projeto**  

### **1. Clone o Repositório**  
Abra o terminal bash e execute:  
git clone https://github.com/AdrianCoelhoXD/fitlab-backend.git
cd fitlab-backend 

### **2. Instale as Dependências**
Terminal bash:
npm install
ou, se usar Yarn:
yarn install 

### **3. Configure o Ambiente**
Crie um arquivo .env na raiz do projeto e adicione:

.env
MONGODB_URI=mongodb://localhost:27017/FitLab
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000 


### **4.  Inicie o Servidor**
Terminal bash:
npm start
# ou, para desenvolvimento com nodemon:
npm run dev
ou 
nodemon src/app.js
 
### **5. Acesse a Documentação (Swagger UI)**
Abra no navegador:
🔗 http://localhost:3000/api-docs 

📌 Rotas Principais
Método	Rota	Descrição
POST	/auth/signup	Cadastro de usuário
POST	/auth/login	Login (retorna JWT)
GET	/gyms	Lista academias
POST	/gyms	Cria academia (apenas admin)
 

### **Como Contribuir**
Crie uma branch para sua feature:

Terminal bash:
git checkout -b minha-feature
Faça commit das alterações:

Terminal bash:
git add .
git commit -m "Minha contribuição incrível"
Envie para o repositório:

Terminal bash:
git push origin minha-feature
Abra um Pull Request no GitHub!
