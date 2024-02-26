# Используйте базовый образ JDK для сборки приложения
FROM adoptopenjdk/openjdk11:latest as build

# Установите рабочий каталог в контейнере
WORKDIR /app

# Скопируйте gradle wrapper и файлы сборки в рабочий каталог
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

# Скопируйте исходный код приложения
COPY src src

# Выдайте права на выполнение для gradlew и соберите приложение
RUN chmod +x ./gradlew
RUN ./gradlew build

# Используйте образ JRE для выполнения приложения
FROM adoptopenjdk/openjdk11:latest

# Установите рабочий каталог в контейнере
WORKDIR /app

# Скопируйте собранный JAR-файл в рабочий каталог
COPY --from=build /app/build/libs/KidLearnHub-1.1.jar /app/app.jar

# Определите команду запуска
CMD ["java", "-jar", "app.jar"]
