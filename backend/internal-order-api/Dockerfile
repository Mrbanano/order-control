# Usa la imagen base de Python
FROM python:3.9-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el código del API de FastAPI a la imagen
COPY ./ /app

# Instala las dependencias necesarias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto en el que corre FastAPI
EXPOSE 8000

# Comando para ejecutar el servidor FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
