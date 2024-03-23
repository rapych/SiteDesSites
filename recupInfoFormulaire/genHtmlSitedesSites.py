import requests
import urllib.request



def miseEnformeDesDatas(element):
    htmlElement = """
                <div class=\"website-card\">
    				<div class=\"card-left\">
    					<h3 class=\"website-title\">""" + element["SiteName"] + """</h3>
    					<p class=\"website-description\">
    						""" + element["Description"] + """
    					</p>
    					<p class=\"website-authors\">""" + element["NomsPrenoms"] + """</p>
    				</div>
    				<div class=\"card-right\">
    					<img class=\"website-img\" src=\"images/""" + element["SiteName"] + """.png\" />
    					<div class=\"card-btn\" onclick=\"window.location.href = '/""" + element["SiteName"] + """/index.html'\">
    						<span>Link</span>
    						<img src=\"./images/link-icon.svg\" class=\"link-img\" />
    					</div>
    				</div>
    			</div>"""
    zipLink = element["SiteZip"]
    imgLink = element["Image"]
    elementTab = {"html": htmlElement, "zipLink": zipLink, "imgLink": imgLink, "name": element["SiteName"]}
    return elementTab

def generateAllHtml(datas):
    html = ""
    for element in datas:
        html += "\n" + element["html"]

    return html

def downloadImages(datas):
    for element in datas:
        link = element["imgLink"].split("id=")[1].split("&")[0]
        url = f"https://drive.usercontent.google.com/u/0/uc?id={link}&export=download"
        name = element["name"]
        print(f"Downloading {name} img...")
        urllib.request.urlretrieve(url, name+".png")
        print(f"Downloaded {name} img !")

def downloadZip(datas):
    for element in datas:
        link = element["zipLink"].split("id=")[1].split("&")[0]
        url = f"https://drive.usercontent.google.com/u/0/uc?id={link}&export=download"
        name = element["name"]
        print(f"Downloading {name} zip...")
        urllib.request.urlretrieve(url, name+".zip")
        print(f"Downloaded {name} zip !")

url = "https://opensheet.elk.sh/1VE3eFvWDWLsarBfBzaIXXI0eakt6uNCPOClmg74hjN8/Feuille1"
res = requests.get(url)
jsonRes= res.json()


datasTraitees = []
for element in jsonRes:
    if element != {}:
        datasTraitees.append(miseEnformeDesDatas(element))

downloadZip(datasTraitees)
downloadImages(datasTraitees)
with open('output.html', 'w') as file:
    file.write(generateAllHtml(datasTraitees))


