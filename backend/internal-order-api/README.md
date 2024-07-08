# Internal order API

Es un servicio que permite a los usuarios realizar pedidos de cerveza en un bar. El bar ofrece promociones esporádicas y permite mantener un historial de las órdenes realizadas.

Este proyecto utiliza FastAPI con arquitectura hexagonal y "vertical slicing" para el manejo de órdenes.

## Requisitos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)
- virtualenv (opcional, pero recomendado)

## Configuración del Entorno de Desarrollo

### 1. Clonar el Repositorio

Clona el repositorio a tu máquina local usando el siguiente comando:

```bash
git clone git@github.com:Mrbanano/order-control.git
cd internal-order-api
```

### 2. Crear un Entorno Virtual

Crea un entorno virtual para aislar las dependencias del proyecto. Puedes hacerlo usando virtualenv o el módulo venv incluido en Python.

- Con virtualenv:

  ```bash
  pip install virtualenv
  virtualenv venv
  ```

- con venv:

  ```bash
  python -m venv venv
  ```

### 3. Activar el Entorno Virtual

- En Windows:

  ```cmd
  Copiar código
  venv\Scripts\activate
  ```

- En macOS y Linux:
  ```bash
  source venv/bin/activate
  ```

#### 4. Instalar Dependencias

Instala las dependencias necesarias usando el archivo requirements.txt:

```bash
source venv/bin/activate
```

## Dependencias

- fastapi
- uvicorn

Estas dependencias están listadas en el archivo requirements.txt y se instalarán automáticamente al ejecutar

```bash
pip install -r requirements.txt
```

## Desactivar el Entorno Virtual

Una vez que hayas terminado de trabajar en tu proyecto, puedes desactivar el entorno virtual ejecutando:

```bash
deactivate
```

## Estructura del Proyecto

```bash
internal-order-api/
├── app/
│   │─────── adapters/
│   │   │   ├── api/
│   │   │   │   └── order_router.py
│   │   │   └── persistence/
│   │   │       ├── data/
│   │   │       │   ├── order_data.py
│   │   │       │   └── stock_data.py
│   │   │       └── in_memory_order_repository.py
│   │   ├── core/
│   │   │   │──── models.py
│   │   │   │──── services.py
│   │   │   └──── schemas.py
│   │   ├
│   └── main.py
└── requirements.txt
```

## Contribuciones

Es un proyecto para una prueba tecnica entonces no va a recibir mantenimiento ni contribuciones

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
