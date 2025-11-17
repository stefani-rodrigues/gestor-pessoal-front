# Etapa 1: construir o app
FROM node:22.16.0 AS build

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Gerar build de produção
RUN npm run build


# Etapa 2: servir com um servidor leve (nginx)
FROM nginx:stable-alpine

# Copiar build do React para a pasta padrão do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando padrão para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
