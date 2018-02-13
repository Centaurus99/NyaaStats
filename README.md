# NyaaStats
A user state page buider for Minecraft.

# How to use
You can simply build your own web pages, just following this instruction.

## First grab user data from map folder
1. Clone the project.
2. `npm install`.
3. Rename config.example.yml to config.yml and modify it.
4. Run `npm start`. This will take long time to grab the informations for each user, be patient.

## Build skin render
1. Go into `skin` folder.
2. `npm install && npm run build`.

## Build web pages
1. Go into `web` folder.
2. `npm install && npm run build`.
## That's all
Now you can find all the files you need in the `web/dist` folder. Upload them to you server, and configure your nginx server like this:

```
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /your/root/path;

  index index.html;

  server_name example.com;

  location / {
    try_files $uri $uri/ @rewrites;
  }

  location @rewrites {
    rewrite ^(.+)$ /index.html last;
  }

}
```

> Notice:

>If you want to deploy without nignx, you will need to change the router mode from `history` to `hash` [here](https://github.com/NyaaCat/NyaaStats/blob/713303de573ac36b9cd7ef8f20100aa3eb993273/web/src/router/index.js#L11). Remember to rebuild web pages.


# Credits
The skin render is almost a copy from [NameMC](https://namemc.com). Thanks for their excellent work.