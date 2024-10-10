from node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "dev", "--host"]
EXPOSE 5173