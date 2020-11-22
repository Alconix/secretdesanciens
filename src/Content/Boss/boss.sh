#!/bin/bash
boss=("hurlaile" "altimor" "destructeur" "xymox" "kaelthas" "sombreveine" "conseil" "fangepoing" "generaux" "denathrius")

raid="nathria"
mkdir $raid

for i in ${boss[@]}
do
    mkdir $raid/$i
    touch $raid/$i/$i.js
    touch $raid/$i/$i-details.html
    touch $raid/$i/$i-dps.html
    touch $raid/$i/$i-tank.html
    touch $raid/$i/$i-heal.html
    touch $raid/$i/$i-general.html
done