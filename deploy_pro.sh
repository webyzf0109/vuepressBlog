npm run build
ssh root@140.143.136.124 "rm -rf /usr/share/nginx/html/personal_blog/"
scp -r ./docs/.vuepress/dist  root@140.143.136.124:/usr/share/nginx/html/personal_blog