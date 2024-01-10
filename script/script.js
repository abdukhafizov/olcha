let body = document.body

//a
let section = document.createElement("section")
let container = document.createElement("div")
let catalog_sec_all = document.createElement("div")
let img = document.createElement("img")
let i_txt = document.createElement("p")
let price = document.createElement("p")
let two_boxes = document.createElement("div")
let korzinka = document.createElement("div")
let img_korzinka = document.createElement("img")
let rasrochka = document.createElement("div")
let ras_txt = document.createElement("p")


//b styling
section.classList.add("catalog_sec")
container.classList.add("container")
catalog_sec_all.classList.add("catalog_sec_all")
i_txt.classList.add("i_txt")
price.classList.add("price")
korzinka.classList.add("korzinka")
section.classList.add("catalog_sec")
rasrochka.classList.add("rasrochka")
ras_txt.classList.add("ras_txt")
two_boxes.classList.add("two_boxes")

img.src = "https://olcha.uz/image/220x220/products/Cjg3V5nm4mBivJC9davhVhYWJBhcreltBb7OOuLX8ol5KM5TsUNUUEA6j9sK.jpg"
img.alt = "logo"
img_korzinka.src = "./img/icons8-корзина-64.png"
img.alt = "korzinka"

i_txt.innerHTML = "Apple Iphone 15 Pro"
price.innerHTML = "14 940 000 сум"
ras_txt.innerHTML = "В рассрочку"


//c append вставка 

body.append(section)
section.append(container)
container.append(catalog_sec_all)
catalog_sec_all.append(img, i_txt, price, two_boxes)
two_boxes.append(korzinka, rasrochka)
korzinka.append(img_korzinka)
rasrochka.append(ras_txt)
