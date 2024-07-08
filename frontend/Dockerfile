# Usa la imagen base de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el código de la aplicación Next.js a la imagen
COPY . .

# Instala las dependencias necesarias
RUN npm install

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto en el que corre Next.js (por defecto 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación Next.js
CMD ["npm", "start"]
