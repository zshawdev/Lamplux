const sectionTextArticle = document.querySelector("#section-text-article");
let textArticleTranscipt;

/// Interview Generating via JSON

const fetchInterview = async() => {
    const res = await fetch("text-article-transcripts/simple-style.json");
    const data = await res.json();
    textArticleTranscipt = data;
    generatetextArticleBlocks(textArticleTranscipt);
}

fetchInterview();

const generatetextArticleBlocks = (textArticleTranscipt) => {
    const max = Object.keys(textArticleTranscipt).length;
    for (i = 0; i <= max; i++) {
        textArticleBlock = document.createElement("div");
        textArticleBlock.classList.add("section-text-article__text-article-block");
        
        if (textArticleTranscipt[i].type === "dialogue") {
            textArticleBlock.classList.add("section-text-article__text-article-block--dialogue");
            sectionTextArticle.append(textArticleBlock);

            const span = document.createElement("span");
            span.classList.add("section-text-article__dialogue-author");
            const author = eval(`textArticleTranscipt[${i}].en_US.author`);
            span.innerHTML = author;
            textArticleBlock.append(span);

            const p = document.createElement("p");
            p.classList.add("section-text-article__dialogue-text");
            const text = eval(`textArticleTranscipt[${i}].en_US.text`);
            p.innerHTML = text;
            textArticleBlock.append(p);
        }

        else if (textArticleTranscipt[i].type === "context") {
            textArticleBlock.classList.add("section-text-article__text-article-block--context");
            sectionTextArticle.append(textArticleBlock);
            const span = document.createElement("span");
            span.classList.add("section-text-article__context-text");
            const text = eval(`textArticleTranscipt[${i}].en_US.text`);
            span.innerHTML = text;
            textArticleBlock.append(span);
        }

        else if (textArticleTranscipt[i].type === "image") {
            textArticleBlock.classList.add("section-text-article__text-article-block--image");
            sectionTextArticle.append(textArticleBlock);
            const img = document.createElement("img");
            img.classList.add("section-text-article__image");
            const srcLink = eval(`textArticleTranscipt[${i}].srcLink`);
            img.src = srcLink;
            const alt = eval(`textArticleTranscipt[${i}].alt`);
            img.alt = alt;
            textArticleBlock.append(img);
        }
    }
}