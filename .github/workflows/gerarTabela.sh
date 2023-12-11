#! /bin/bash

cd ../../00-Iniciante || exit

echo "| ID | Nome | Link | Status |"
for i in * ; do
    if [[ $i =~ ^[0-9]+- ]]; then
        id="$(echo "$i" | cut -d "-" -f1)"
        nome="$(echo "$i" | cut -d "-" -f2-)"
        echo "| $id | $nome | [$id](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/$i) | ✅ |"
    fi
done