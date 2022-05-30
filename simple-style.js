const sectionInterview = document.querySelector("#section-interview");
let articleTextJSON;

/// Interview Generating via JSON

const fetchInterview = async() => {
    const res = await fetch("article-text/simple-style.json");
    const data = await res.json();
    articleTextJSON = data;
    generateArticleBlocks(articleTextJSON);
}

fetchInterview();

const generateArticleBlocks = (articleTextJSON) => {
    const max = Object.keys(articleTextJSON).length;
    for (i = 0; i <= max; i++) {
        articleBlock = document.createElement("div");
        articleBlock.classList.add("section-interview__article-block");
        
        if (articleTextJSON[i].type === "dialogue") {
            articleBlock.classList.add("section-interview__article-block--dialogue");
            sectionInterview.append(articleBlock);

            const span = document.createElement("span");
            span.classList.add("section-interview__dialogue-author");
            const author = eval(`articleTextJSON[${i}].en_US.author`);
            span.innerHTML = author;
            articleBlock.append(span);

            const p = document.createElement("p");
            p.classList.add("section-interview__dialogue-text");
            const text = eval(`articleTextJSON[${i}].en_US.text`);
            p.innerHTML = text;
            articleBlock.append(p);
        }

        else if (articleTextJSON[i].type === "context") {
            articleBlock.classList.add("section-interview__article-block--context");
            sectionInterview.append(articleBlock);
            const span = document.createElement("span");
            span.classList.add("section-interview__context-text");
            const text = eval(`articleTextJSON[${i}].en_US.text`);
            span.innerHTML = text;
            articleBlock.append(span);
        }

        else if (articleTextJSON[i].type === "image") {
            articleBlock.classList.add("section-interview__article-block--image");
            sectionInterview.append(articleBlock);
            const img = document.createElement("img");
            img.classList.add("section-interview__image");
            const srcLink = eval(`articleTextJSON[${i}].srcLink`);
            img.src = srcLink;
            const alt = eval(`articleTextJSON[${i}].alt`);
            img.alt = alt;
            articleBlock.append(img);
        }
    }
}