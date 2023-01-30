# 启动一个nginx
FROM nginx:alpine

# 把打包后的目录移动到nginx默认的前端目录
COPY /dist /usr/share/nginx/html

RUN ls -la /usr/share/nginx/html
