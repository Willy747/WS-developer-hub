document.addEventListener("click", function(event) {

    if (event.target.id === "analyze-markdown-btn") {

        const markdown = document.getElementById("markdown-input").value;

        const words = markdown
            .trim()
            .split(/\s+/)
            .filter(word => word.length > 0);

        const headings = markdown.match(/^#{1,6}\s/gm) || [];

        const links = markdown.match(/\[.*?\]\(.*?\)/g) || [];

        const codeBlocks = markdown.match(/```/g) || [];

        const wordCount = words.length;
        const headingCount = headings.length;
        const linkCount = links.length;
        const codeBlockCount = Math.floor(codeBlocks.length / 2);
        const readingTime = Math.ceil(wordCount / 200);

        document.getElementById("word-count").textContent = wordCount;
        document.getElementById("heading-count").textContent = headingCount;
        document.getElementById("link-count").textContent = linkCount;
        document.getElementById("code-block-count").textContent = codeBlockCount;
        document.getElementById("reading-time").textContent = readingTime;

    }

});
