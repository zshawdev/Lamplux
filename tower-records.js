const articleInterviewSection = document.querySelector("#article-interview-section");
let articleTextJSON;

/// Interview Generating via JSON

const fetchInterview = async() => {
    const res = await fetch("article-text/simple-style.json");
    const data = await res.json();
    articleTextJSON = data;
    generateArticleTextBlocks(articleTextJSON);
    displayLang();
}

fetchInterview();

const generateArticleTextBlocks = (articleTextJSON) => {
    const max = Object.keys(articleTextJSON).length;
    for (i = 1; i <= max; i++) {
        articleTextBlock = document.createElement("div");
        articleTextBlock.classList.add("dialogue-box");
        articleInterviewSection.append(articleTextBlock);
        const span = document.createElement("span");
        articleTextBlock.append(span);
        const p = document.createElement("p");
        articleTextBlock.append(p);
    }
}

/// Language Display

const displayLang = () => {
    const max = articleTextJSON.length - 1;
    for (i = 0; i <= max; i++) {
        const author = eval(`articleTextJSON[${i}].en_US.author`);
        const text = eval(`articleTextJSON[${i}].en_US.text`);
        span = articleInterviewSection.children[`${i}`].children[0];
        p = articleInterviewSection.children[`${i}`].children[1];
        span.innerHTML = author;
        span.classList.add("dialogue-author");
        p.innerHTML = text;
        p.classList.add("dialogue-text");
    };
    // if (lang === "en_US") {
    //     appendInnerArticleContextText("en_US", 33, "—Lamp performs \"Yume Utsutsu\"—");
    //     appendInnerArticleContextText("en_US", 107, "—Lamp performs \"At the Night Party\" & \"Fantasy\"—");
    //     appendInnerArticleContextText("en_US", 118, "—Outro—");
    // } else if (lang === "jp") {
    //     appendInnerArticleContextText("jp", 33, "「ゆめうつつ」を演る");
    //     appendInnerArticleContextText("jp", 107, "「夜会にて」と「Fantasy」を演る");
    //     appendInnerArticleContextText("jp", 118, "アウトロ");
    // }
    // appendInnerArticleImage(15, "images/simple-style-nagai-frame.jpg");
};

/// Inner-Article Appending

// const appendInnerArticleImage = (index, image) => {
//     const innerArticleImage = document.createElement("img");
//     innerArticleImage.src = image;
//     innerArticleImage.classList.add("resize-inner-article-image");
//     articleInterviewSection.children[index].children[1].append(innerArticleImage);
// }

// const appendInnerArticleContextText = (lang, index, text) => {
//     articleInterviewSection.children[index].children[1].remove();
//     let div = document.createElement("div");
//     let pText = document.createElement("p");
//     pText.innerHTML = eval(`articleTextJSON[index].${lang}.text`);
//     let pContext = document.createElement("p");
//     pContext.innerHTML = text;
//     articleInterviewSection.children[index].append(div);
//     div.append(pText);
//     div.append(pContext);
//     div.classList.add("make-column");
//     pContext.classList.add("make-italic");
//     pContext.style.marginTop = "30px";
// }