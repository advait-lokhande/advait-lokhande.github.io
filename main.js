
// document.getElementById('content').innerHTML =
//     marked.parse('# Marked in browser\n\nRendered by **marked**.');

async function navbarclick(id) {
    console.log(id)
}

function renderHeaderFooter(){
    $.get('/index.html',function(data,status){
        if(status == "success") {
            header = ($(data).find('#header'))[0].innerHTML
            footer = ($(data).find('#footer'))[0].innerHTML
            document.getElementById('header').innerHTML = header
            document.getElementById('footer').innerHTML = footer            
        }
        // else 
    })
}

async function getmd(link){
    return new Promise( (resolve,reject) => {
        $.get(link,function(data,status){
            if(status == "success")
                resolve(data)
            else reject(status)
        })
    })
}

async function rendermd() {
    let areas = ""
    try {
        areas = await getmd('./md_content/focus_areas.md')
    } catch (error) {
        console.error(error)
    }
    // console.log(areas)
    document.getElementById('areas').innerHTML = marked.parse(areas);

    let updates = ""
    try {
        updates = await getmd('./md_content/updates.md')
    } catch (error) {
        console.error(error)
    }
    // console.log(updates)
    document.getElementById('updates').innerHTML = marked.parse(updates);
}

// async function rendermd_ol(target,link) {
//     mddivs = document.getElementsByClassName('mdload')
//     for(elem in mddivs)
//     let md = ""
//     try {
//         md = await getmd(link)
//     } catch (error) {
//         console.error(error)
//     }
//     console.log("target")
//     target.innerHTML = marked.parse(md);
// }

rendermd()
renderHeaderFooter()