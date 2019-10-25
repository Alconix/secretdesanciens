boss=("sivara" "behemoth" "radiance" "corsandre" "orgozoa" "cour" "zaqul" "azshara")
for i in "${boss[@]}"
do
    mkdir $i
    cp ./template.js $i/$i.js
    touch $i/$i-details.html
    touch $i/$i-dps.html
    touch $i/$i-tank.html
    touch $i/$i-heal.html
    touch $i/$i-general.html
done